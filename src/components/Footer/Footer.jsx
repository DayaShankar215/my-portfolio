import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaHeart,
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--footer-bg);
  color: white;
  padding: 60px 0 28px;
  text-align: center;
  border-top: 1px solid var(--border);
  position: relative;
`;

const FooterBrand = styled(motion.div)`
  font-family: 'Sora', sans-serif;
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 10px;

  span {
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FooterTagline = styled.p`
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.92rem;
  margin-bottom: 26px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 30px;
  justify-content: center;

  a {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.05rem;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      background: var(--gradient);
      border-color: transparent;
      transform: translateY(-4px);
      box-shadow: 0 10px 24px var(--shadow-color);
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    color: #f43f5e;
    font-size: 0.8rem;
  }
`;

function Footer() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: <FaGithub />, href: 'https://github.com/DayaShankar215', label: 'GitHub' },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/daya-shankar-adhikari-85236030a/?originalSubdomain=np',
      label: 'LinkedIn',
    },
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/share/16FptwPBLf/',
      label: 'Facebook',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/dayashankar_adhikari/',
      label: 'Instagram',
    },
  ];

  return (
    <FooterContainer>
      <div className="container">
        <FooterBrand
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Daya<span>.</span>
        </FooterBrand>
        <FooterTagline>Turning ideas into elegant, working web experiences.</FooterTagline>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <SocialLinks>
            {socials.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </SocialLinks>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FooterLinks>
            {links.map((link, index) => (
              <a key={index} href={link.href}>
                {link.name}
              </a>
            ))}
          </FooterLinks>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Copyright>
            &copy; {new Date().getFullYear()} Daya Shankar Adhikari. Built with <FaHeart /> by me.
          </Copyright>
        </motion.div>
      </div>
    </FooterContainer>
  );
}

export default Footer;