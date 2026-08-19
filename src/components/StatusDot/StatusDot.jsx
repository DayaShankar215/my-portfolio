import styled from 'styled-components';

const Dot = styled.span`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--highlight);

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: var(--highlight);
    opacity: 0.4;
    animation: pulse-ring 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse-ring {
    0% {
      transform: scale(0.6);
      opacity: 0.5;
    }
    70% {
      transform: scale(1.6);
      opacity: 0;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
`;

function StatusDot() {
  return <Dot />;
}

export default StatusDot;