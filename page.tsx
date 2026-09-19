'use client';

import { useEffect, useState } from 'react';

const navItems = ['Our story', 'Classes', 'Schedule', 'Journal'];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <main>
    <section className="hero" id="home"><div className="glow glow-one" /><div className="glow glow-two" /><div className="glow glow-three" /><div className="halo halo-one" /><div className="halo halo-two" />
      <header className="nav"><a className="brand" href="#home"><img className="brand-logo" src="/assets/meraya-logo-transparent.png" alt="Meraya Dance" /><span>MERAYA</span></a><nav className={menuOpen ? 'links open' : 'links'}>{navItems.map((item) => <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav><a className="nav-cta" href="#join">Dance with us <span>↗</span></a><button className="menu" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button></header>
      <div className="hero-video" aria-hidden="true"><video autoPlay loop muted playsInline preload="metadata"><source src="/assets/meraya-hero.mp4" type="video/mp4" /></video></div><div className="hero-video-wash" />
      <div className="hero-content hero-enter"><a className="hero-instagram" href="https://www.instagram.com/meraya.dance/" target="_blank" rel="noreferrer" aria-label="Follow Meraya Dance on Instagram"><span className="instagram-icon" aria-hidden="true" /><span>Follow @meraya.dance</span><b aria-hidden="true">↗</b></a><p className="hero-name"><span>Meraya Dance</span></p><h1>Move <span className="freely-word">freely.<img className="hero-logo-inline" src="/assets/meraya-logo-transparent.png" alt="Meraya Dance" /></span><br />Feel deeply.</h1><p className="intro">A home for rhythm, expression and the joy of becoming more yourself through dance.</p><a className="text-link" href="#classes">Explore Meraya <span>↓</span></a></div><div className="hero-footer"><p>DISCOVER<br />YOUR RHYTHM</p><p className="scroll">SCROLL TO MOVE <span>↓</span></p></div>
    </section>
    <section className="kinetic"><div className="kinetic-line" data-direction="1"><span>WE MOVE</span></div><div className="kinetic-line" data-direction="-1"><span>TOGETHER</span></div></section>
    <section className="statement reveal" id="our-story"><p className="eyebrow">THE MERAYA WAY</p><h2>Dance is a language<br />before it is a performance.</h2><div className="statement-bottom"><p>We create room for every body to listen, release and find its own way of moving.</p><a href="#join" className="round-link">↗</a></div></section>
    <section className="classes reveal" id="classes"><div className="section-heading"><h2>A journey back to yourself.</h2></div><div className="class-grid class-grid-two"><article className="class-card flyer-card"><img src="/assets/dance-into-freedom-clean.png" alt="Dance into Freedom — every Friday at 2:30pm at Womanly Wellness" /></article><article className="class-card healing-card"><span>PRIVATE SESSION</span><h3>One-to-one<br />healing</h3><p>A personalised somatic embodiment session for deeper release, nervous-system support, and compassionate reconnection.</p><a href="#join">Book a session <b>↗</b></a></article></div></section>
    <section className="schedule reveal" id="schedule"><p className="eyebrow">MOVE WITH MERAYA</p><div className="schedule-line"><p>EVERY FRIDAY</p><h3>Dance into Freedom</h3><p>14:30 · Womanly Wellness</p><span>↗</span></div><div className="schedule-line"><p>BY APPOINTMENT</p><h3>One-to-one healing</h3><p>Private somatic session</p><span>↗</span></div></section>
    <section className="join reveal" id="join"><div className="join-glow" /><p className="eyebrow">YOUR FIRST STEP</p><h2>Come move<br />with us.</h2><a href="mailto:hello@merayadance.com" className="gradient-button">Book your first class <span>↗</span></a></section>
    <footer id="journal"><a className="brand" href="#home"><span className="brand-mark">✦</span><span>MERAYA</span></a><p>Dance studio · Dubai</p><p>© 2026 Meraya Dance</p></footer>
  </main>;
}
