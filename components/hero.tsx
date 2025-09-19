'use client'
import {useState, useEffect} from 'react'
import ScrollExpandMedia from './blocks/scroll-expansion-hero'
import hero_image from '@/public/hero_spells.png'
interface MediaAbout {
    overview: string
    conclusion: string;
}

interface MediaContent {
    src: string;
    poster?:string;
    background: string;
    title: string;
    date: string;
    scrollToExpand: string;
    about: MediaAbout;
}

interface MediaContentCollection {
    [key: string]: MediaContent;
}

const heroMediaContent: MediaContentCollection = {
    video: {
        src: "/hero_video.mp4",
        poster: hero_image.src,
        background: hero_image.src,
        title: "Whisper Power Into  Your Hands",
        date: "Mystical Transformation",
        scrollToExpand: 'Scroll to unlock your destiny',
        about: {
    overview: "Step beyond the veil and into the hidden archives of forbidden magic. Here, spellcraft is not performance, but pact — drawn from centuries of shadowed traditions, whispered charms, and ancient curses. Our practitioners walk the line between blessing and bane, weaving together threads of folklore, ritual, and unseen energy to deliver spells that bend fate itself. From the legacy of night-witches like the Shtriga to secret rites carried through forgotten covens, every spell is bound in secrecy and sharpened with intent.",
    conclusion: "Whether your heart craves the pull of love, your hands hunger for wealth, your spirit longs for protection, or your ambition demands recognition, our spellwork answers with precision. Each casting is tailored to your desire, binding your will to powers older than kings and empires. The shadows do not lie — seekers before you have found their desires fulfilled. The only question is: what will you dare to summon?"
}
    },
    image: {
        src: hero_image.src,
        background: hero_image.src,
        title: "Ancient Spells",
        date: "Mystical Transformation",
        scrollToExpand: 'Scroll to unlock your destiny',
        about: {
            overview: "Enter the sacred realm of ancient spell casting and mystical transformation. Our master practitioners, trained in the oldest traditions of magic, witchcraft, and energy work, have spent decades perfecting the art of powerful spell casting. We combine ancient wisdom with modern energy healing techniques to create personalized love spells, money spells, healing spells, protection spells, and success spells that truly transform lives.",
            conclusion: "Whether you seek powerful love spells to attract your soulmate, money spells for financial abundance, healing spells for physical and emotional wellness, protection spells against negative energy, or success spells for career advancement, our authentic spell casting services are crafted with your specific intentions in mind. Join over 10,000 satisfied clients who have experienced the life-changing power of our mystical services, witchcraft, and spiritual transformation."
        }
    }
}

const MediaContent = ({mediaType}: {mediaType: 'video' | 'image'}) => {
    const currentMedia = heroMediaContent[mediaType];

    return (
<div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-foreground'>
        Ancient spells woven with the hunger of the night, whether of love, vengeance, fortune, or fate.
        <br/>
        <br/>
        <span className='text-accent'>The choice, as always, is yours.</span>
      </h2>
      <p className='text-lg mb-8 text-muted-foreground leading-relaxed'>
        {currentMedia.about.overview}
      </p>

      <p className='text-lg mb-8 text-muted-foreground leading-relaxed'>
        {currentMedia.about.conclusion}
      </p>
    </div>
    )
}
export const VideoExpansionTextBlend = () => {
  const mediaType = 'video';
  const currentMedia = heroMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = 'image';
  const currentMedia = heroMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = 'video';
  const currentMedia = heroMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = 'image';
  const currentMedia = heroMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

const Hero = () => {
  const [mediaType] = useState('video');
  const currentMedia = heroMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType as 'video' | 'image'}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType as 'video' | 'image'} />
      </ScrollExpandMedia>
    </div>
  );
};

export default Hero;
