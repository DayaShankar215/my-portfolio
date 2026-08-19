import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 74px;
  background: ${({ scrolled }) =>
    scrolled ? 'var(--header-bg)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) =>
    scrolled ? 'blur(14px) saturate(160%)' : 'none'};
  -webkit-backdrop-filter: ${({ scrolled }) =>
    scrolled ? 'blur(14px) saturate(160%)' : 'none'};
  border-bottom: ${({ scrolled }) =>
    scrolled ? '1px solid var(--border)' : '1px solid transparent'};
  transition: all 0.35s ease;
`;

const ScrollProgress = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 2px;
  background: var(--gradient);
  width: ${({ progress }) => `${progress}%`};
  transition: width 0.1s linear;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
`;

const Logo = styled(motion.a)`
  font-family: 'Sora', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text);

  span {
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 8px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: min(320px, 78vw);
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    background: var(--bg-elevated);
    border-left: 1px solid var(--border);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
  }
`;

const NavLinkItem = styled(motion.li)`
  a {
    display: block;
    padding: 9px 18px;
    border-radius: 999px;
    font-size: 0.93rem;
    font-weight: 500;
    color: var(--text-muted);
    transition: all 0.3s ease;

    &:hover {
      color: var(--text);
      background: var(--surface);
    }
  }

  a.active {
    color: #fff;
    background: var(--gradient);
    box-shadow: 0 6px 18px var(--shadow-color);
  }

  @media (max-width: 768px) {
    a {
      font-size: 1.1rem;
      padding: 10px 42px;
    }
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled(motion.button)`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--surface-hover);
    color: var(--primary);
  }
`;

const MobileMenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 999;
  backdrop-filter: blur(2px);
`;

function Header({ theme, toggleTheme, activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setActiveSection(href.replace('#', ''));
    setIsOpen(false);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <div className="container">
        <Nav>
          <Logo
            href="#home"
            onClick={() => setActiveSection('home')}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Daya<span>.</span>
          </Logo>

          <NavLinks isOpen={isOpen} ref={menuRef}>
            {navLinks.map((link, index) => (
              <NavLinkItem
                key={link.href}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <a
                  href={link.href}
                  className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </a>
              </NavLinkItem>
            ))}
          </NavLinks>

          <HeaderActions>
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle theme"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </IconButton>
            <MobileMenuButton
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </MobileMenuButton>
          </HeaderActions>
        </Nav>
        <ScrollProgress progress={progress} />
      </div>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </HeaderContainer>
  );
}

export default Header;