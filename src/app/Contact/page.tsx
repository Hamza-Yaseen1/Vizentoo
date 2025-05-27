'use client'
import  { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '55eb67a2-2476-43eb-ac66-1a7f6bf40979');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.success) {
      setIsSubmitted(true);
    //   form.reset();
    setTimeout(()=>{
      setIsSubmitted(false);
    },5000)
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-black mb-4">Let&apos;s Work Together</h2>
      {isSubmitted ? (
        <p className="text-green-600 text-center text-lg">Thank you! We&apos;ll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="service"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a Service</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Brand Identity">Brand Identity</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Print Design">Print Design</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell us more about your project..."
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
