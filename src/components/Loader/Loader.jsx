import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: fixed;
  inset: 0;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LoaderLogo = styled(motion.div)`
  font-family: 'Sora', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;

  span {
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const LoaderBar = styled.div`
  width: 200px;
  height: 4px;
  border-radius: 999px;
  background: var(--surface);
  overflow: hidden;
  margin-top: 28px;

  .fill {
    height: 100%;
    border-radius: 999px;
    background: var(--gradient);
  }
`;

const LoaderText = styled(motion.p)`
  color: var(--text-muted);
  font-size: 0.92rem;
  margin-top: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

function Loader() {
  return (
    <LoaderContainer>
      <LoaderLogo
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        D<span>.</span>
      </LoaderLogo>
      <LoaderBar>
        <motion.div
          className="fill"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </LoaderBar>
      <LoaderText
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, times: [0, 0.2, 0.8, 1] }}
      >
        Loading Portfolio
      </LoaderText>
    </LoaderContainer>
  );
}

export default Loader;