import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail, FiCheckCircle, FiAlertCircle, FiCopy } from 'react-icons/fi';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { launchConfetti } from '../../utils/confetti';

const ContactSection = styled.section`
  padding: 110px 0;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  padding: 34px;
  border-radius: 24px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.12);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 28px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 0.9rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 13px 16px;
    border: 1px solid var(--border);
    border-radius: 13px;
    background: var(--surface);
    color: var(--text);
    font-family: inherit;
    font-size: 0.95rem;
    outline: none;
    transition: all 0.3s ease;

    &::placeholder {
      color: var(--text-muted);
      opacity: 0.6;
    }

    &:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(91, 140, 255, 0.22);
      background: var(--surface-hover);
    }
  }

  span {
    color: #f87171;
    font-size: 0.78rem;
    display: block;
    margin-top: 6px;
  }
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: var(--gradient);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  box-shadow: 0 8px 24px var(--shadow-color);
  width: 100%;
  justify-content: center;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 14px;
  }

  .info-sub {
    color: var(--text-muted);
    margin-bottom: 34px;
    font-size: 0.98rem;
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 20px;
  margin-bottom: 16px;
  border-radius: 16px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    transform: translateX(6px);
  }

  .icon {
    width: 48px;
    height: 48px;
    border-radius: 13px;
    background: var(--gradient);
    color: #fff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 8px 18px var(--shadow-color);
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 2px;
  }

  p,
  a {
    color: var(--text-muted);
    font-size: 0.92rem;
    word-break: break-word;
  }

  a:hover {
    color: var(--primary);
  }
`;

const Toast = styled(motion.div)`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  border-radius: 14px;
  font-weight: 600;
  font-size: 0.92rem;
  color: #fff;
  background: ${({ type }) => (type === 'success' ? '#10b981' : '#ef4444')};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);

  svg {
    font-size: 1.3rem;
  }
`;

const CopyButton = styled(motion.button)`
  margin-left: auto;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 11px;
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
    color: #fff;
    background: var(--gradient);
    border-color: transparent;
  }
`;

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const form = useRef();
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText('dayashankaradhikari@gmail.com')
        .then(() => showToast('success', 'Email copied to clipboard!'))
        .catch(() => {});
    }
  };

  const onSubmit = (data) => {
    emailjs
      .send('service_m6r29e8', 'template_qovcriv', data, '9-pjF8yDJMKh5GWBX')
      .then(() => {
        showToast('success', 'Message sent successfully!');
        launchConfetti();
        reset();
      })
      .catch(() => {
        showToast('error', 'Failed to send. Please try again.');
      });
  };

  return (
    <ContactSection id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Let&apos;s Work Together</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Have a project in mind or just want to say hi? Drop me a message.
        </motion.p>

        <ContactContainer>
          <ContactForm
            onSubmit={handleSubmit(onSubmit)}
            ref={form}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Send a Message</h3>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell me about your project..."
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && <span>{errors.message.message}</span>}
            </FormGroup>
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiSend />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>

          <ContactInfo>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contact Details
            </motion.h3>
            <motion.p
              className="info-sub"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I usually respond within 24 hours. Let&apos;s build something great.
            </motion.p>

            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FiMapPin />
              </div>
              <div>
                <h4>Location</h4>
                <p>Narephat, Kathmandu-32, Nepal</p>
              </div>
            </ContactItem>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FiPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+9779844330051">+977-9844330051</a>
              </div>
            </ContactItem>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FiMail />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:dayashankaradhikari@gmail.com">
                  dayashankaradhikari@gmail.com
                </a>
              </div>
              <CopyButton
                onClick={copyEmail}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Copy email"
              >
                <FiCopy />
              </CopyButton>
            </ContactItem>
          </ContactInfo>
        </ContactContainer>
      </div>

      <AnimatePresence>
        {toast && (
          <Toast
            key={toast.message}
            type={toast.type}
            initial={{ opacity: 0, y: -24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.9 }}
          >
            {toast.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
            {toast.message}
          </Toast>
        )}
      </AnimatePresence>
    </ContactSection>
  );
}

export default Contact;