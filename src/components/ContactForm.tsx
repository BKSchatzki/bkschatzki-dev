import TextareaAutosize from "react-textarea-autosize";

import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="mt-6 flex w-full flex-col items-center justify-center"
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
          placeholder="Name:"
          required
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
          placeholder="Email:"
          required
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
          placeholder="Message:"
          required
          className="w-full resize-none overflow-y-scroll border-b-2 border-neutral-500 bg-transparent py-1.5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-400 placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none sm:text-lg"
        />
      </motion.label>

      <motion.button
        type="submit"
        className="mt-6 rounded-md bg-neutral-300 px-4 py-2 text-xl font-bold text-black sm:mt-10 sm:px-6 sm:py-3 sm:text-3xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5 + 0.15 },
        }}
        exit={{ opacity: 0 }}
      >
        Send
      </motion.button>
    </form>
  );
};

export default ContactForm;
