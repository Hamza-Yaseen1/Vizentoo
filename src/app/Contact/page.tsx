"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "f91ea6dc-6fef-4530-b6b9-af672844db4b");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.success) {
      setIsSubmitted(true);
      //   form.reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-lg mt-2 mx-auto p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-bold text-center text-black mb-4"
        >
          Let&apos;s Work Together
        </motion.h2>
        {isSubmitted ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-green-600 text-center text-lg"
          >
            Thank you! We&apos;ll be in touch soon.
          </motion.p>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.select
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              name="service"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a Service</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Brand Identity">Brand Identity</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Print Design">Print Design</option>
              <option value="Print Design">Other</option>
            </motion.select>
            <motion.textarea
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              name="message"
              placeholder="Tell us more about your project..."
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></motion.textarea>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              type="submit"
              className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        )}
      </motion.div>
      <br />
    </>
  );
}
