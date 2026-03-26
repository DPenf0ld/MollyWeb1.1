/**
 * MOLLY BROWN — Official Music Website
 * Design: Bold Monochrome / Zine Culture
 * Colors: #0d0d0d bg | #f9f9f9 text | #c0392b crimson accent
 * Fonts: Bebas Neue (display) + Lato (body) + Playfair Display (song titles italic)
 * Layout: Asymmetric editorial, ZoomParallax hero, horizontal release strip
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

// ── CDN image URLs ────────────────────────────────────────────────────────────
const CDN = {
  outside: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663479390629/Tf68qkU7AheU84RWxtFEQ9/Outside_4b4002e1.JPG',
  gamePlan: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663479390629/Tf68qkU7AheU84RWxtFEQ9/GamePlan_4631accf.jpg',
  foreverGuessing: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663479390629/Tf68qkU7AheU84RWxtFEQ9/ForeverGuessing_f9934a0f.jpg',
  whatYouCouldnt: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663479390629/Tf68qkU7AheU84RWxtFEQ9/WhatYouCouldntGiveToMe_84630daf.jpg',
  moreObsessed: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663479390629/Tf68qkU7AheU84RWxtFEQ9/MoreObsessed_c5f6d1d1.jpg',
};

// ── Parallax images (5 images for the hero mosaic) ───────────────────────────
const parallaxImages = [
  { src: CDN.outside, alt: 'Molly Brown with microphone outdoors' },
  { src: CDN.moreObsessed, alt: 'More Obsessed single artwork' },
  { src: CDN.gamePlan, alt: 'Game Plan single artwork' },
  { src: CDN.foreverGuessing, alt: 'Forever Guessing EP artwork' },
  { src: CDN.whatYouCouldnt, alt: "What You Couldn't Give To Me single artwork" },
];

// ── Releases data ─────────────────────────────────────────────────────────────
const releases = [
  {
    title: 'Game Plan',
    type: 'Single',
    year: '2025',
    cover: CDN.gamePlan,
    description:
      "My third single 'Game Plan' was inspired by and written for my friend. I wanted to create a song that was hers and that she could scream to in the car! This was such a fun track to create from writing the sarcastic lyrics to the overall production. I have been very grateful to have my track selected to play on Future Hits, Kennet Radio and BBC Introducing. I was also so pleased to hear 'Game Plan' made the A-list on Future Hits Radio!",
    spotify: 'https://open.spotify.com/artist/1M53ltFUdI9gkD4zTvTTB6?si=7aaCQSVeTvmo36_zJ8sDfA',
    apple: 'https://music.apple.com/gb/artist/molly-brown/1764474988',
  },
  {
    title: "What You Couldn't Give To Me",
    type: 'Single',
    year: '2025',
    cover: CDN.whatYouCouldnt,
    description:
      "I released my second single 'What You Couldn't Give To Me' in May 2025. I wrote this track after a negative experience and desperately wanted to experiment with these lyrics to create some sarcasm. The overall message is that feeling when you realise you never really know someone which I'm sure many of my listeners can relate to. My track climbed to the Top 10 on the Future Hits Radio Top 40 — a massive achievement.",
    spotify: 'https://open.spotify.com/artist/1M53ltFUdI9gkD4zTvTTB6?si=7aaCQSVeTvmo36_zJ8sDfA',
    apple: 'https://music.apple.com/gb/artist/molly-brown/1764474988',
  },
  {
    title: 'Forever Guessing',
    type: 'EP',
    year: '2024',
    cover: CDN.foreverGuessing,
    description:
      "I released my first single 'Gone Away' in September 2024 which was followed by the release of my EP 'Forever Guessing' in October 2024. The four tracks represent different stages and emotions felt during heartbreak. I hope my music resonates with my listeners and echoes important messages and emotions. Working with my producer Martin Pawley, I thoroughly enjoyed the creative process. My fourth track 'Switch Off' featured on BBC Introducing.",
    spotify: 'https://open.spotify.com/artist/1M53ltFUdI9gkD4zTvTTB6?si=7aaCQSVeTvmo36_zJ8sDfA',
    apple: 'https://music.apple.com/gb/artist/molly-brown/1764474988',
  },
  {
    title: 'More Obsessed',
    type: 'Single',
    year: '2025',
    cover: CDN.moreObsessed,
    description:
      "My latest single 'More Obsessed' is out now. Looking forward to you all hearing it — this track pushes into new sonic territory while staying true to the emotional honesty that defines my songwriting. Stream it now on all platforms.",
    spotify: 'https://open.spotify.com/artist/1M53ltFUdI9gkD4zTvTTB6?si=7aaCQSVeTvmo36_zJ8sDfA',
    apple: 'https://music.apple.com/gb/artist/molly-brown/1764474988',
  },
];

// ── Social links ──────────────────────────────────────────────────────────────
const socials = [
  { name: 'Spotify', href: 'https://open.spotify.com/artist/1M53ltFUdI9gkD4zTvTTB6?si=7aaCQSVeTvmo36_zJ8sDfA' },
  { name: 'Apple Music', href: 'https://music.apple.com/gb/artist/molly-brown/1764474988' },
  { name: 'Instagram', href: 'https://www.instagram.com/_mollyxbrown_' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@mollybrownxmusic' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCXcPrLh7qL5eFeZ7-kGKa4A' },
  { name: 'Facebook', href: 'https://www.facebook.com/mollyxbrown03' },
];

// ── Animation variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// ── Animated section wrapper ──────────────────────────────────────────────────
function AnimSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Navigation ────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = ['About', 'Releases', 'Gallery', 'Contact'];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-['Bebas_Neue'] text-2xl tracking-widest text-white hover:text-[#c0392b] transition-colors duration-200"
          >
            MOLLY BROWN
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="font-['Lato'] text-sm font-light tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0d0d0d] flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="font-['Bebas_Neue'] text-5xl tracking-widest text-white hover:text-[#c0392b] transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Hero overlay (shown before scroll) ───────────────────────────────────────
function HeroOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        className="text-center"
      >
        <p className="font-['Lato'] text-xs font-light tracking-[0.4em] uppercase text-white/50 mb-4">
          Independent Artist · Berkshire, UK
        </p>
        <h1
          className="font-['Bebas_Neue'] text-white leading-none"
          style={{ fontSize: 'clamp(5rem, 18vw, 16rem)', letterSpacing: '0.05em' }}
        >
          MOLLY
          <br />
          BROWN
        </h1>
        <motion.p
initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
          className="font-['Lato'] text-xs font-light tracking-[0.3em] uppercase text-white/40 mt-6"
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </div>
  );
}

// ── About section ─────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-[#0d0d0d]">
      <span className="section-label">ABOUT</span>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <AnimSection>
            <motion.div variants={slideLeft}>
              <span className="accent-line mb-6" />
              <h2
                className="font-['Bebas_Neue'] text-white mb-8"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
              >
                THE ARTIST
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="font-['Lato'] text-white/70 text-lg leading-relaxed mb-6 font-light">
              Molly Brown is an independent artist from Berkshire, releasing her first EP{' '}
              <span className="song-title text-white">'Forever Guessing'</span> at the age of 20.
              Molly has been playing the piano and singing from a young age. Ever since, she has enjoyed putting
              her own spin on covering songs and performing at a wide range of events and venues.
            </motion.p>
            <motion.p variants={fadeUp} className="font-['Lato'] text-white/70 text-lg leading-relaxed mb-8 font-light">
              Whilst at University, Molly thoroughly enjoyed working and performing with different bands on lead
              vocals. Songwriting has always been an outlet for Molly. From writing and recording demos in her
              bedroom, Molly has since worked with producer Martin Pawley, who has brought her ideas to life.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              {['BBC Introducing', 'Future Hits Radio', 'Kennet Radio'].map((tag) => (
                <span
                  key={tag}
                  className="font-['Lato'] text-xs tracking-[0.2em] uppercase text-[#c0392b] border border-[#c0392b]/30 px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </AnimSection>

          {/* Image side */}
          <AnimSection>
            <motion.div
              variants={fadeUp}
              className="relative"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src={CDN.outside}
                  alt="Molly Brown with microphone"
                  className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                {/* Vertical rule accent */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#c0392b]" />
              </div>
              {/* Caption */}
              <p className="font-['Lato'] text-xs tracking-[0.2em] uppercase text-white/30 mt-3">
                Molly Brown — Berkshire, UK
              </p>
            </motion.div>
          </AnimSection>
        </div>
      </div>
    </section>
  );
}

// ── Releases section ──────────────────────────────────────────────────────────
function ReleasesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="releases" className="relative py-32 bg-[#111111] overflow-hidden">
      <span className="section-label">RELEASES</span>
      <div className="container relative z-10">
        <AnimSection>
          <motion.div variants={slideLeft} className="mb-16">
            <span className="accent-line mb-6" />
            <h2
              className="font-['Bebas_Neue'] text-white"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
            >
              MUSIC
            </h2>
          </motion.div>
        </AnimSection>

        {/* Release tabs */}
        <div className="flex flex-wrap gap-0 mb-12 border-b border-white/10">
          {releases.map((r, i) => (
            <button
              key={r.title}
              onClick={() => setActive(i)}
              className={`font-['Lato'] text-xs tracking-[0.2em] uppercase px-6 py-4 transition-all duration-200 border-b-2 -mb-px ${
                active === i
                  ? 'text-white border-[#c0392b]'
                  : 'text-white/40 border-transparent hover:text-white/70'
              }`}
            >
              {r.title}
            </button>
          ))}
        </div>

        {/* Active release detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"
          >
            {/* Artwork */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img
                  src={releases[active].cover}
                  alt={releases[active].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-['Lato'] text-xs tracking-[0.2em] uppercase bg-[#c0392b] text-white px-3 py-1">
                    {releases[active].type}
                  </span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <p className="font-['Lato'] text-xs tracking-[0.3em] uppercase text-white/40 mb-3">
                {releases[active].year}
              </p>
              <h3
                className="song-title text-white mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
              >
                {releases[active].title}
              </h3>
              <p className="font-['Lato'] text-white/65 text-base leading-relaxed mb-10 font-light">
                {releases[active].description}
              </p>

              {/* Stream buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={releases[active].spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-['Lato'] text-sm tracking-[0.15em] uppercase text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-[#0d0d0d] transition-all duration-300"
                >
                  <SpotifyIcon />
                  Spotify
                </a>
                <a
                  href={releases[active].apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-['Lato'] text-sm tracking-[0.15em] uppercase text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-[#0d0d0d] transition-all duration-300"
                >
                  <AppleIcon />
                  Apple Music
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All releases grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {releases.map((r, i) => (
            <motion.button
              key={r.title}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden text-left group ${active === i ? 'ring-1 ring-[#c0392b]' : ''}`}
            >
              <div style={{ aspectRatio: '1/1' }} className="overflow-hidden">
                <img
                  src={r.cover}
                  alt={r.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    active === i ? '' : 'grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'
                  }`}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="font-['Lato'] text-xs tracking-[0.15em] uppercase text-white/80 truncate">
                  {r.title}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Gallery section ───────────────────────────────────────────────────────────
function GallerySection() {
  const galleryImages = [
    { src: CDN.outside, alt: 'Molly Brown outdoor shoot', span: 'md:col-span-2 md:row-span-2' },
    { src: CDN.gamePlan, alt: 'Game Plan artwork', span: '' },
    { src: CDN.moreObsessed, alt: 'More Obsessed artwork', span: '' },
    { src: CDN.foreverGuessing, alt: 'Forever Guessing EP', span: '' },
    { src: CDN.whatYouCouldnt, alt: "What You Couldn't Give To Me", span: '' },
  ];

  return (
    <section id="gallery" className="relative py-32 bg-[#0d0d0d] overflow-hidden">
      <span className="section-label">GALLERY</span>
      <div className="container relative z-10">
        <AnimSection>
          <motion.div variants={slideLeft} className="mb-16">
            <span className="accent-line mb-6" />
            <h2
              className="font-['Bebas_Neue'] text-white"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
            >
              GALLERY
            </h2>
          </motion.div>
        </AnimSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden ${img.span} group`}
            >
              <div style={{ aspectRatio: '1/1' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-[#c0392b]/0 group-hover:bg-[#c0392b]/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Press / Features strip ────────────────────────────────────────────────────
function PressStrip() {
  const items = [
    'BBC Introducing',
    '·',
    'Future Hits Radio',
    '·',
    'Kennet Radio',
    '·',
    'Future Hits Top 10',
    '·',
    'Future Hits A-List',
    '·',
    'BBC Introducing',
    '·',
    'Future Hits Radio',
    '·',
    'Kennet Radio',
    '·',
  ];

  return (
    <div className="bg-[#c0392b] py-4 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-['Bebas_Neue'] text-white text-xl tracking-widest">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ── Contact section ───────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section id="contact" className="relative py-32 bg-[#111111] overflow-hidden">
      <span className="section-label">CONTACT</span>
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <AnimSection>
            <motion.div variants={slideLeft} className="mb-12">
              <span className="accent-line mb-6" />
              <h2
                className="font-['Bebas_Neue'] text-white"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
              >
                GET IN TOUCH
              </h2>
              <p className="font-['Lato'] text-white/60 text-lg mt-4 font-light">
                For bookings or just to say hello.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-12">
              <a
                href="mailto:mollyannstudios@gmail.com"
                className="group inline-flex items-center gap-4 font-['Bebas_Neue'] text-white hover:text-[#c0392b] transition-colors duration-300"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '0.05em' }}
              >
                <span className="accent-line group-hover:w-8 transition-all duration-300" />
                mollyannstudios@gmail.com
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Lato'] text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-200"
                >
                  {s.name}
                </a>
              ))}
            </motion.div>
          </AnimSection>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-['Bebas_Neue'] text-white/30 text-lg tracking-widest">MOLLY BROWN</span>
        <p className="font-['Lato'] text-xs text-white/20 tracking-widest">
          © {new Date().getFullYear()} Molly Brown Music. All rights reserved.
        </p>
        <div className="flex gap-6">
          {socials.slice(0, 3).map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Lato'] text-xs tracking-widest uppercase text-white/20 hover:text-white/60 transition-colors duration-200"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────
function SpotifyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

// ── Main Home component ───────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Nav />

      {/* Hero: ZoomParallax with name overlay */}
      <div className="relative">
        <HeroOverlay />
        <ZoomParallax images={parallaxImages} />
      </div>

      {/* Press ticker */}
      <PressStrip />

      {/* About */}
      <AboutSection />

      {/* Releases */}
      <ReleasesSection />

      {/* Gallery */}
      <GallerySection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
