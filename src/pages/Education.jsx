import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <Layout>

      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Education
      </motion.h1>


      {/* Timeline */}

      <div className="mt-10 space-y-10">


        {/* BE */}

        <Card
          year="2025 – 2028"
          title="B.E. in Computer Engineering"
          college="Metropolitan Institute of Technology and Management"
          score="SGPA: 7.4"
        />


        {/* Diploma */}

        <Card
          year="2022 – 2025"
          title="Diploma in Computer Engineering"
          college="Yashwantrao Bhonsale Institute Of Technology"
          score="Percentage: 78.80%"
        />


      </div>


      {/* Skills Learned */}

      <div className="mt-16">

        <h2 className="text-2xl text-blue-400 font-bold">
          Subjects & Technologies Learned
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-6">

          <Skill name="Python" />
          <Skill name="Java" />
          <Skill name="HTML / CSS / JS" />
          <Skill name="MySQL / SQLite" />
          <Skill name="Git & GitHub" />
          <Skill name="AWS Basics" />
          <Skill name="Linux / Raspberry Pi" />
          <Skill name="Web Development" />
          <Skill name="Database Management" />

        </div>

      </div>


    </Layout>
  );
}



function Card({ year, title, college, score }) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >

      <p className="text-purple-400">{year}</p>

      <h2 className="text-2xl text-blue-400 font-bold mt-2">
        {title}
      </h2>

      <p className="text-gray-300 mt-2">
        {college}
      </p>

      <p className="text-green-400 mt-2">
        {score}
      </p>

    </motion.div>
  );
}



function Skill({ name }) {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded-lg text-center hover:bg-blue-500/20 transition">
      {name}
    </div>
  );
}