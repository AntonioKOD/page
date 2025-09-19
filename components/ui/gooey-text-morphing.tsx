"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;      // wrapper layout (size/position)
  textClassName?: string;  // extra classes for the text spans
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!texts || texts.length === 0) return;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    // Initialize content
    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length] ?? "";
      text1Ref.current.style.opacity = "1";
      text2Ref.current.style.opacity = "0";
      text1Ref.current.style.filter = "blur(0px)";
      text2Ref.current.style.filter = "blur(0px)";
    }

    const setMorph = (fractionRaw: number) => {
      const fraction = Math.max(0, Math.min(1, fractionRaw));
      if (!text1Ref.current || !text2Ref.current) return;

      // Keep the gooey feel but clamp blur to avoid halos
      const blurIn  = Math.min(8 / Math.max(0.0001, 1 - fraction) - 8, 24);
      const blurOut = Math.min(8 / Math.max(0.0001, fraction) - 8, 24);

      const opIn  = Math.pow(fraction, 0.4);       // 0..1
      const opOut = Math.pow(1 - fraction, 0.4);   // 0..1

      text2Ref.current.style.filter = `blur(${isFinite(blurOut) ? blurOut : 24}px)`;
      text2Ref.current.style.opacity = `${opIn}`;

      text1Ref.current.style.filter = `blur(${isFinite(blurIn) ? blurIn : 24}px)`;
      text1Ref.current.style.opacity = `${opOut}`;
    };

    const doCooldown = () => {
      morph = 0;
      if (!text1Ref.current || !text2Ref.current) return;
      text2Ref.current.style.filter = "blur(0px)";
      text2Ref.current.style.opacity = "1";
      text1Ref.current.style.filter = "blur(0px)";
      text1Ref.current.style.opacity = "0";
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }
      setMorph(fraction);
    };

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length] ?? "";
          }
        }
        doMorph();
      } else {
        doCooldown();
      }
    };

    // If only one phrase, render it static (keeps background clean & goo filter harmless)
    if (texts.length === 1) {
      if (text1Ref.current && text2Ref.current) {
        text1Ref.current.textContent = texts[0];
        text1Ref.current.style.opacity = "1";
        text2Ref.current.textContent = "";
        text2Ref.current.style.opacity = "0";
      }
      return; // no RAF needed
    }

    animate();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div
      className={cn(
        "relative w-full h-full pointer-events-none", // don't block hero CTAs
        className
      )}
      style={{ isolation: "isolate" }} // scope any filter to this stacking context
    >
      {/* Scoped gooey threshold filter — does NOT affect your background image */}
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="goo-threshold">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Apply the filter ONLY to the text layer */}
      <div
        className="absolute inset-0 grid place-items-center"
        style={{ filter: "url(#goo-threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center leading-tight",
            "text-white", // ← force white text
            "will-change-[filter,opacity]",
            textClassName
          )}
          style={{ backfaceVisibility: "hidden" }}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center leading-tight",
            "text-white", // ← force white text
            "will-change-[filter,opacity]",
            textClassName
          )}
          style={{ backfaceVisibility: "hidden" }}
        />
      </div>
    </div>
  );
}