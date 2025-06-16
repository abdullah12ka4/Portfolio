"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import { useRef, useEffect } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("meokobvr");
  const formRef = useRef();

  const hasShownSuccessToast = useRef(false);
  const hasShownErrorToast = useRef(false);

  useEffect(() => {
    if (state.succeeded && !hasShownSuccessToast.current) {
      toast.success("Your form is successfully submitted!");
      formRef.current?.reset();
      hasShownSuccessToast.current = true;
      hasShownErrorToast.current = false; // reset error flag for next submission
    }

    if (!state.submitting && state.errors?.formErrors?.length > 0 && !hasShownErrorToast.current) {
      toast.error(state.errors.formErrors[0].message);
      hasShownErrorToast.current = true;
      hasShownSuccessToast.current = false; // reset success flag for next attempt
    }
  }, [state]);

  return (
    <div className="h-screen flex items-center justify-center text-white px-4 py-12">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        pauseOnHover
        theme="light"
      />
      <motion.div
        className="max-w-2xl w-full space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Have a project or question? Let’s connect.
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <label className="block mb-1 text-sm">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <label className="block mb-1 text-sm">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <ValidationError prefix="email" field="email" errors={state.errors} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <ValidationError prefix="message" field="message" errors={state.errors} />
          </motion.div>

          <motion.button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
