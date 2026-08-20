import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLock, FiUnlock, FiX, FiDownload } from 'react-icons/fi';
import styled from 'styled-components';

const OWNER_PASSWORD = 'password@6789';

const Fab = styled(motion.button)`
  position: fixed;
  bottom: 28px;
  left: 28px;
  z-index: 1000;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: ${({ owner }) => (owner ? 'var(--highlight)' : 'var(--text-muted)')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background: var(--gradient);
    border-color: transparent;
    box-shadow: 0 8px 22px var(--shadow-color);
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
  z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Modal = styled(motion.div)`
  width: 100%;
  max-width: 380px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 30px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);

  h3 {
    font-size: 1.2rem;
    margin-bottom: 6px;
  }

  .sub {
    color: var(--text-muted);
    font-size: 0.86rem;
    margin-bottom: 24px;
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  color: var(--text);
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
  margin-bottom: 14px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(91, 140, 255, 0.2);
  }
`;

const PrimaryButton = styled(motion.button)`
  width: 100%;
  padding: 13px;
  border-radius: 12px;
  border: none;
  background: var(--gradient);
  color: #fff;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 8px 20px var(--shadow-color);

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: #f87171;
  font-size: 0.82rem;
  margin-bottom: 12px;
`;

const DownloadList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 6px;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 12px;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      color: var(--primary);
      border-color: var(--primary);
      transform: translateX(4px);
    }

    svg {
      font-size: 1.05rem;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--text);
    background: var(--surface-hover);
  }
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: var(--primary);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  padding: 0;
  font-family: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const originals = [
  { name: 'Hero Photo (daya.png)', href: '/daya.png' },
  { name: 'About Photo (daya1.png)', href: '/daya1.png' },
  { name: 'Project: Contact List', href: '/contactlist.png' },
  { name: 'Project: Portfolio', href: '/Portfolio.png' },
  { name: 'Resume (PDF)', href: '/Daya.pdf' },
];

function OwnerAccess({ ownerMode, setOwnerMode }) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [granted, setGranted] = useState(ownerMode);

  const handleUnlock = () => {
    if (password.trim() === OWNER_PASSWORD) {
      setGranted(true);
      setOwnerMode(true);
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password. Access denied.');
    }
  };

  const handleLock = () => {
    setGranted(false);
    setOwnerMode(false);
    setPassword('');
    setError('');
    setOpen(false);
  };

  const close = () => {
    setOpen(false);
    setError('');
  };

  return (
    <>
      <Fab
        owner={granted}
        onClick={() => setOpen(true)}
        aria-label="Owner access"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        {granted ? <FiUnlock /> : <FiLock />}
      </Fab>

      <AnimatePresence>
        {open && (
          <Backdrop
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <Modal
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative' }}
            >
              <CloseButton onClick={close} aria-label="Close">
                <FiX />
              </CloseButton>

              {!granted ? (
                <>
                  <h3>
                    <span className="gradient-text">Owner Access</span>
                  </h3>
                  <p className="sub">
                    Protected area. Enter the owner password to manage &amp; download
                    original media.
                  </p>
                  <PasswordInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                  />
                  {error && <ErrorText>{error}</ErrorText>}
                  <PrimaryButton
                    type="button"
                    onClick={handleUnlock}
                    disabled={!password}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FiUnlock /> Unlock
                  </PrimaryButton>
                </>
              ) : (
                <>
                  <h3>
                    <span className="gradient-text">Owner Mode</span>
                  </h3>
                  <p className="sub">
                    Media protection is off. You can right-click save any image or
                    download the originals below.
                  </p>
                  <DownloadList>
                    {originals.map((file) => (
                      <a key={file.href} href={file.href} download>
                        <span>{file.name}</span>
                        <FiDownload />
                      </a>
                    ))}
                  </DownloadList>
                  <LinkButton type="button" onClick={handleLock}>
                    Lock site again
                  </LinkButton>
                </>
              )}
            </Modal>
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
}

export default OwnerAccess;