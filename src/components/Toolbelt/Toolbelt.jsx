import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaDocker,
  FaAws,
  FaFigma,
} from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const scrollX = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const ToolbeltSection = styled.section`
  padding: 8px 0 110px;
  overflow: hidden;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 30px;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-muted);

  &::before,
  &::after {
    content: '';
    height: 1px;
    width: 56px;
    background: var(--border);
  }
`;

const Viewport = styled.div`
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  gap: 18px;
  animation: ${scrollX} 32s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 26px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: 'Sora', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s ease;

  svg {
    color: var(--primary);
    font-size: 1.15rem;
  }

  &:hover {
    background: var(--gradient);
    color: #fff;
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 12px 28px var(--shadow-color);

    svg {
      color: #fff;
    }
  }
`;

const tools = [
  { icon: <FaReact />, label: 'React' },
  { icon: <FaJs />, label: 'JavaScript' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <FaDatabase />, label: 'MySQL' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <FaHtml5 />, label: 'HTML5' },
  { icon: <FaCss3Alt />, label: 'CSS3' },
  { icon: <FaBootstrap />, label: 'Bootstrap' },
  { icon: <FaGitAlt />, label: 'Git' },
  { icon: <FaGithub />, label: 'GitHub' },
  { icon: <FaNpm />, label: 'npm' },
  { icon: <FaDocker />, label: 'Docker' },
  { icon: <FaAws />, label: 'AWS' },
  { icon: <FaFigma />, label: 'Figma' },
];

function Toolbelt() {
  return (
    <ToolbeltSection>
      <div className="container">
        <Label>Toolbox</Label>
        <Viewport>
          <Track>
            {[...tools, ...tools].map((tool, index) => (
              <Chip key={index}>
                {tool.icon}
                {tool.label}
              </Chip>
            ))}
          </Track>
        </Viewport>
      </div>
    </ToolbeltSection>
  );
}

export default Toolbelt;