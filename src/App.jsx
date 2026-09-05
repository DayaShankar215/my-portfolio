import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Journey from './components/Journey/Journey';
import Skills from './components/Skills/Skills';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton';
import CursorGlow from './components/CursorGlow/CursorGlow';
import OwnerAccess from './components/OwnerAccess/OwnerAccess';
import useMediaProtection from './hooks/useMediaProtection';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });
  const [activeSection, setActiveSection] = useState('home');
  const [ownerMode, setOwnerMode] = useState(
    () => localStorage.getItem('owner-mode') === 'true'
  );

  useMediaProtection(!ownerMode);

  useEffect(() => {
    document.documentElement.classList.toggle('owner-mode', ownerMode);
    localStorage.setItem('owner-mode', ownerMode ? 'true' : 'false');
  }, [ownerMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <div className="animated-background" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
      </div>
      <CursorGlow />

      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div
            key="content"
            style={{ position: 'relative', zIndex: 1, opacity: 0, animation: 'appear 0.6s ease forwards' }}
          >
            <Header
              theme={theme}
              toggleTheme={toggleTheme}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <main>
              <Hero />
              <About />
              <Journey />
              <Skills />
              <Stats />
              <Services />
              <Projects />
              <Contact />
            </main>
            <Footer />
            <ScrollToTopButton />
            <OwnerAccess ownerMode={ownerMode} setOwnerMode={setOwnerMode} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;