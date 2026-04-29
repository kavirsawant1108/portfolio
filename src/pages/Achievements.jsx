import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <Layout>

      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Achievements
      </motion.h1>


      <div className="grid md:grid-cols-2 gap-8 mt-10">


        <Card
          title="Full Stack Development Certificate"
          desc="Certified in Full Stack Development using Python and Web Technologies."
        />


        <Card
          title="Web Development Certificate"
          desc="Completed Web Development training with HTML, CSS, JavaScript."
        />


        <Card
          title="Python Training"
          desc="Training at Softmusk Info Pvt Ltd Belgaum on Python and Web Development."
        />


        <Card
          title="Diploma Percentage"
          desc="Completed Diploma in Computer Engineering with 78.80%."
        />


        <Card
          title="Current SGPA"
          desc="B.E Computer Engineering SGPA: 7.4"
        />


        <Card
          title="Major Project"
          desc="Biometric Election System using Flask, SQLite, Raspberry Pi."
        />


      </div>


      {/* Extra Section */}

      <div className="mt-16">

        <h2 className="text-2xl text-purple-400 font-bold">
          Highlights
        </h2>

        <ul className="mt-4 space-y-2 text-gray-300">

          <li>✔ Strong Programming Skills</li>
          <li>✔ Web Development Experience</li>
          <li>✔ Database Knowledge</li>
          <li>✔ Linux & Raspberry Pi</li>
          <li>✔ Teamwork & Leadership</li>

        </ul>

      </div>


    </Layout>
  );
}



function Card({ title, desc }) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:scale-105 transition"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <h2 className="text-xl text-blue-400 font-bold">
        {title}
      </h2>

      <p className="text-gray-300 mt-3">
        {desc}
      </p>

    </motion.div>
  );
}