import { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitIsFailed, setSubmitIsFailed] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name,
          email,
          message,
        }).toString(),
      });
      if (res.ok) {
        navigate("/success");
      } else {
        setSubmitIsFailed(true);
        console.error("Form submission failed:", res.statusText);
        setTimeout(() => setSubmitIsFailed(false), 5000);
      }
    } catch (error) {
      setSubmitIsFailed(true);
      console.error("Form submission error:", error);
      setTimeout(() => setSubmitIsFailed(false), 5000);
    }
  };

  return (
    <motion.form
      name="contact"
      onSubmit={handleSubmit}
      className="mt-6 flex w-full flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 + 0.15 } }}
      exit={{ opacity: 0 }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <motion.label
        className="w-full"
        initial={{ opacity: 0, y: -25, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { delay: 0.2 + 0.15 },
        }}
        exit={{ opacity: 0, y: -25, scale: 0.8 }}
      >
        <span className="sr-only">Name:</span>
        <input
          type="text"
          name="name"
          placeholder="Name:"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-b-2 border-neutral-500 bg-transparent py-1.5 placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none sm:text-lg"
        />
      </motion.label>

      <motion.label
        className="mt-3 w-full sm:mt-6"
        initial={{ opacity: 0, y: -25, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { delay: 0.3 + 0.15 },
        }}
        exit={{ opacity: 0, y: -25, scale: 0.8 }}
      >
        <span className="sr-only">Email:</span>
        <input
          type="email"
          name="email"
          placeholder="Email:"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-b-2 border-neutral-500 bg-transparent py-1.5 placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none sm:text-lg"
        />
      </motion.label>

      <motion.label
        className="-mb-1.5 mt-3 w-full sm:mt-6"
        initial={{ opacity: 0, y: -25, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { delay: 0.4 + 0.15 },
        }}
        exit={{ opacity: 0, y: -25, scale: 0.8 }}
      >
        <span className="sr-only">Message:</span>
        <TextareaAutosize
          minRows={1}
          maxRows={12}
          name="message"
          placeholder="Message:"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none overflow-y-scroll border-b-2 border-neutral-500 bg-transparent py-1.5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-400 placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none sm:text-lg"
        />
      </motion.label>

      <motion.button
        type="submit"
        disabled={submitIsFailed}
        className={`mt-6 w-1/3 rounded-md px-4 py-2 text-xl font-bold text-black transition sm:mt-10 sm:px-6 sm:py-3 sm:text-3xl ${
          submitIsFailed ? "rotate-6 scale-95 bg-neutral-600" : "bg-neutral-300"
        }`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5 + 0.15 },
        }}
        exit={{ opacity: 0 }}
      >
        {submitIsFailed ? "Oops" : "Send"}
      </motion.button>
      <AnimatePresence mode="wait">
        {submitIsFailed && (
          <motion.span
            className="fixed bottom-0 flex h-16 items-center justify-center text-base font-semibold text-red-500 sm:h-24 sm:text-xl"
            initial={{ opacity: 0, x: -250, scale: 0.8 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: { delay: 0.15 },
            }}
            exit={{
              opacity: 0,
              x: 500,
              scale: 0.8,
              transition: { ease: "anticipate" },
            }}
          >
            We have a problem. Please try again.
          </motion.span>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

export default ContactForm;
