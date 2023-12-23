"use client";

import TextareaAutosize from "react-textarea-autosize";

const Form = () => {
  return (
    <form className="mt-6 flex w-full flex-col gap-3 sm:gap-6">
      <label>
        <span className="sr-only">Name:</span>
        <input
          type="text"
          placeholder="Name:"
          required
          className="w-full border-b-2 border-neutral-500 bg-transparent py-1.5 placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none sm:text-lg"
        />
      </label>

      <label>
        <span className="sr-only">Email:</span>
        <input
          type="email"
          placeholder="Email:"
          required
          className="w-full border-b-2 border-neutral-500 bg-transparent py-1.5 placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none sm:text-lg"
        />
      </label>

      <label>
        <span className="sr-only">Message:</span>
        <TextareaAutosize
          minRows={1}
          maxRows={12}
          placeholder="Message:"
          className="w-full resize-none overflow-y-scroll border-b-2 border-neutral-500 bg-transparent py-1.5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-400 placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none sm:text-lg"
        />
      </label>
    </form>
  );
};

export default Form;
