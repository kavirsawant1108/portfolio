import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Layout>

      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Projects
      </motion.h1>


      <div className="grid md:grid-cols-2 gap-8 mt-10">


        <ProjectCard
          title="Biometric Election System"
          desc="Secure election system using Flask, SQLite, Raspberry Pi biometric verification with authentication and role-based access."
          tech="Python, Flask, SQLite, Raspberry Pi, Linux"
        />


        <ProjectCard
          title="Fake News Detection"
          desc="AI-based fake news detection web app using API, frontend UI, and backend verification system."
          tech="React, API, JavaScript, HTML, CSS"
        />


        <ProjectCard
          title="Portfolio Website"
          desc="Modern cinematic portfolio with 3D background, animations, router, and glass UI."
          tech="React, Tailwind, Three.js, Framer Motion"
        />


        <ProjectCard
          title="Web Development Projects"
          desc="Multiple web apps using HTML, CSS, JavaScript, Python, and database integration."
          tech="HTML, CSS, JS, Python, MySQL"
        />


      </div>

    </Layout>
  );
}



function ProjectCard({ title, desc, tech }) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <h2 className="text-2xl text-blue-400 font-bold">
        {title}
      </h2>

      <p className="text-gray-300 mt-3">
        {desc}
      </p>

      <p className="text-purple-400 mt-3">
        {tech}
      </p>


      <div className="mt-4 flex gap-3">

        <button className="px-4 py-2 bg-blue-500 hover:bg-purple-500 rounded-lg">
          GitHub
        </button>

        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg">
          Demo
        </button>

      </div>

    </motion.div>
  );
}