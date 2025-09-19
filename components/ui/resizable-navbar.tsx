/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import spells_logo from "@/public/spells_image.png";
import Link from "next/link";

export const NAV_HEIGHT = 72; // px — adjust to match your layout

interface NavbarProps { children: React.ReactNode; className?: string; }
interface NavBodyProps { children: React.ReactNode; className?: string; visible?: boolean; }
interface NavItemsProps { items:{name:string; link:string;}[]; className?: string; onItemClick?: () => void; atTop?: boolean; }
interface MobileNavProps { children: React.ReactNode; className?: string; visible?: boolean; }
interface MobileNavHeaderProps { children: React.ReactNode; className?: string; }
interface MobileNavMenuProps { children: React.ReactNode; className?: string; isOpen: boolean; onClose: () => void; atTop?: boolean; }

export const Navbar = ({ children, className }: NavbarProps) => {
  // Use global scroll so the animation always updates correctly
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false); // true after threshold

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  // Inject "visible" to first-level children
  const enhanced = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<any>, { visible })
      : child
  );

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[200] w-full",
        "pt-[env(safe-area-inset-top)]",
        className
      )}
      aria-label="Primary navigation"
    >
      {enhanced}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  const atTop = !visible;

  // Inject atTop into descendants (logo, items, buttons)
  const enhanced = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<any>, { atTop, visible })
      : child
  );

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 8 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      style={{ height: NAV_HEIGHT, minWidth: 800 }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
        // Keep surfaces consistent with your original design:
        // transparent at top; soft glass/blur when shrunk
        visible ? "bg-white/80 dark:bg-neutral-950/80" : "bg-transparent",
        className
      )}
    >
      {enhanced}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, atTop }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.nav
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 items-center justify-center text-sm font-medium",
        // ONLY color changes at the top to stay readable over hero
        atTop ? "text-white" : "text-neutral-700 dark:text-neutral-300",
        className
      )}
    >
      <div className="relative flex items-center gap-2">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className="relative rounded-full px-4 py-2 text-current transition-colors hover:opacity-90"
          >
            {hovered === idx && (
              <motion.span
                layoutId="hovered"
                className={cn(
                  "absolute inset-0 rounded-full",
                  atTop ? "bg-white/10" : "bg-gray-100 dark:bg-neutral-800"
                )}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  const atTop = !visible;
  const enhanced = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<any>, { atTop, visible })
      : child
  );

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? 12 : 0,
        paddingLeft: visible ? 12 : 0,
        borderRadius: visible ? 4 : 32,
        y: visible ? 8 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
      style={{ height: NAV_HEIGHT }}
    >
      {enhanced}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => (
  <div className={cn("flex w-full flex-row items-center justify-between", className)}>
    {children}
  </div>
);

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
  atTop,
}: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        className={cn(
          "absolute left-0 right-0 top-[calc(100%+8px)] z-[210] flex w-full flex-col gap-4 rounded-lg px-4 py-6 shadow-xl",
          // readable sheet; slight translucency when over hero
          atTop ? "bg-black/70 text-white backdrop-blur-md" : "bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white/90",
          className
        )}
        onClick={onClose}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
  atTop,
}: {
  isOpen: boolean;
  onClick: () => void;
  atTop?: boolean;
}) =>
  isOpen ? (
    <IconX className={cn("cursor-pointer", atTop ? "text-white" : "text-current")} onClick={onClick} />
  ) : (
    <IconMenu2 className={cn("cursor-pointer", atTop ? "text-white" : "text-current")} onClick={onClick} />
  );

export const NavbarLogo = ({ atTop }: { atTop?: boolean }) => (
  <Link
    href="/"
    className={cn(
      "z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal",
      atTop ? "text-white" : "text-neutral-900 dark:text-white"
    )}
    aria-label="Home"
  >
    <Image src={spells_logo} alt="logo" width={44} height={44} />
  </Link>
);

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  atTop,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  atTop?: boolean;
} & (React.ComponentPropsWithoutRef<"a"> | React.ComponentPropsWithoutRef<"button">)) => {
  const base = "px-4 py-2 rounded-md text-sm font-bold transition duration-200 inline-block text-center";
  const variants = {
    primary: "bg-white text-black hover:-translate-y-0.5 shadow",
    secondary: "bg-transparent text-current hover:opacity-90",
    dark: "bg-black text-white shadow",
    gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow",
  } as const;
  return (
    <Tag href={href} className={cn(base, variants[variant], className, atTop && variant === "secondary" ? "text-white" : "")} {...props}>
      {children}
    </Tag>
  );
};