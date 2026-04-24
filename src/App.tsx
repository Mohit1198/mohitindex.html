/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--accent1)] selection:text-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <div className="w-full h-[1px] bg-[var(--border)]" />
        <About />
        <div className="w-full h-[1px] bg-[var(--border)]" />
        <Skills />
        <div className="w-full h-[1px] bg-[var(--border)]" />
        <Experience />
        <div className="w-full h-[1px] bg-[var(--border)]" />
        <Portfolio />
        <div className="w-full h-[1px] bg-[var(--border)]" />
        <Education />
        <div className="w-full h-[1px] bg-[var(--border)]" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

