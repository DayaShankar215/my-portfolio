import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const FAQSection = styled.section`
  padding: 0 0 110px;
`;

const FAQList = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: 14px;
  border-radius: 18px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &.open {
    border-color: var(--primary);
    box-shadow: 0 14px 34px rgba(91, 140, 255, 0.14);
  }
`;

const Question = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 20px 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;

  .q-icon {
    color: ${({ open }) => (open ? 'var(--primary)' : 'var(--text-muted)')};
    flex-shrink: 0;
    transition: color 0.3s ease;
  }

  .chev {
    flex-shrink: 0;
    color: ${({ open }) => (open ? 'var(--primary)' : 'var(--text-muted)')};
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'none')};
    transition: transform 0.3s ease, color 0.3s ease;
  }
`;

const Answer = styled(motion.div)`
  padding: 0 24px;
`;

const AnswerInner = styled.p`
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  padding: 0 0 22px 30px;
  margin: 0;
`;

const faqs = [
  {
    q: 'Are you currently available for work?',
    a: "Yes! I've just completed my B.E. in Computer Engineering at NCIT and I'm actively looking for frontend / full-stack roles, internships and collaborations where I can build and solve real problems.",
  },
  {
    q: 'What technologies do you work with?',
    a: 'Daily: React, JavaScript, Node.js, Express, MySQL and Tailwind CSS. Also comfortable with Python, Java, C/C++, Firebase, React Native, Git/GitHub, Docker and AWS.',
  },
  {
    q: 'Can you build mobile apps too?',
    a: "Yes — I build cross-platform mobile apps with React Native. I've worked on the Secure Shield mobile app alongside its web dashboard and backend integration.",
  },
  {
    q: 'How fast can I expect a reply?',
    a: 'I usually respond within 24 hours. The fastest way to reach me is the contact form below — it lands straight in my inbox.',
  },
  {
    q: 'Where can I see your resume?',
    a: 'The Resume button in the header and hero downloads my latest CV as a PDF. You can also email me at dayashankaradhikari@gmail.com for the most up-to-date version.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <FAQSection id="faq">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Frequently Asked Questions</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Quick answers to the things people usually ask.
        </motion.p>

        <FAQList>
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <FAQItem
                key={item.q}
                className={open ? 'open' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <Question onClick={() => setOpenIndex(open ? -1 : index)} open={open}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span className="q-icon">
                      <FiHelpCircle />
                    </span>
                    {item.q}
                  </span>
                  <span className="chev">
                    <FiChevronDown />
                  </span>
                </Question>
                <AnimatePresence initial={false}>
                  {open && (
                    <Answer
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <AnswerInner>{item.a}</AnswerInner>
                    </Answer>
                  )}
                </AnimatePresence>
              </FAQItem>
            );
          })}
        </FAQList>
      </div>
    </FAQSection>
  );
}

export default FAQ;