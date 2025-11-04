"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

// Project Type
interface Project {
  title: string;
  client: string;
  category: string;
  imageUrl: string;
  description: string;
  link?: string;
}

// Testimonial Type
interface Testimonial {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  avatar?: string;
}

// --- Data ---
const projects: Project[] = [
  {
    title: "Minimal Logo Rebrand",
    client: "Nova Agency",
    category: "Branding & Identity",
    imageUrl: "https://images.unsplash.com/photo-1669217541257-f46f1d24712a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWluaW1hbCUyMExvZ28lMjBSZWJyYW5kfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    description:
      "Designed a new minimalist logo and full brand kit for Nova Agency, improving brand recall by 35%.",
    link: "https://dribbble.com/",
  },
  {
    title: "E-commerce Landing Page",
    client: "Shopora",
    category: "Web Design",
    imageUrl: "https://cdn.dribbble.com/userupload/22999427/file/original-8069b8733c2dd3151a782b40e27a53e5.png?resize=1504x1128&vertical=center",
    description:
      "Developed a sleek, conversion-optimized landing page for Shopora’s e-commerce platform.",
    link: "https://behance.net/",
  },
  {
    title: "Animated Explainer Video",
    client: "TechLeap",
    category: "Motion Graphics",
    imageUrl: "https://cdn.dribbble.com/userupload/12868749/file/still-fb60ca3033f7abeab227df2aa61303e7.png?format=webp&resize=400x300&vertical=center",
    description:
      "Produced a 90-second animated video explaining TechLeap’s SaaS features with motion typography.",
  },
  {
    title: "Social Media Campaign",
    client: "Bloom Cosmetics",
    category: "Digital Marketing",
    imageUrl: "https://cdn.dribbble.com/userupload/45539692/file/1ac8a71bfe85d47f187e54e19bad4a3f.jpg?crop=0x19-1080x829&format=webp&resize=400x300&vertical=center",
    description:
      "Created a full Instagram ad series, reaching over 200K impressions organically.",
  },
  {
    title: "Custom Illustration Series",
    client: "PixelCraft",
    category: "Illustration",
    imageUrl: "https://cdn.dribbble.com/userupload/45394051/file/38b92b7e393e97e08c31cdb55f76ee31.png?format=webp&resize=400x300&vertical=center",
    description:
      "Designed a character illustration pack and icon set for a product launch.",
  },
  {
    title: "Product Packaging Design",
    client: "EcoFit",
    category: "Print Design",
    imageUrl: "https://cdn.dribbble.com/userupload/45411039/file/cf88e772e4be35107c02969c85bbe893.png?crop=286x0-1726x1080&format=webp&resize=400x300&vertical=center",
    description:
      "Created sustainable product packaging designs using eco-friendly print concepts.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Sarah Ahmed",
    role: "Marketing Head",
    company: "Bloom Cosmetics",
    review:
      "Absolutely loved working with them! The campaign visuals were fresh, on-brand, and boosted our engagement massively.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1698181842513-2179d5f8bc65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2FyYWglMjBBaG1lZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Ali Khan",
    role: "Founder",
    company: "Nova Agency",
    review:
      "Their branding work completely redefined our image. Professional, fast, and incredibly creative.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Emily Zhang",
    role: "Creative Director",
    company: "TechLeap",
    review:
      "The explainer video was beyond expectations — storytelling, animation, everything was perfect.",
    rating: 4,
    avatar: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
];

export default function PortfolioPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6 md:px-12">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          My Portfolio
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A curated selection of projects designed to help brands tell their
          stories beautifully.
        </p>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="overflow-hidden">
              <motion.img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-56 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {proj.title}
              </h3>
              <p className="text-sm text-blue-600 mb-2 font-medium">
                {proj.client} — {proj.category}
              </p>
              <p className="text-gray-600 mb-4 text-sm">{proj.description}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Clients Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          What Clients Say
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Hear from the brands and people I’ve had the pleasure of collaborating with.
        </p>
      </motion.div>

      {/* Testimonials */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 text-left hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-600">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              “{t.review}”
            </p>

            <div className="flex gap-1 text-yellow-400">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
