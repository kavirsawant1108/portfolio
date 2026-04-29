import Layout from "../components/Layout";
import { motion } from "framer-motion";

import myPhoto from "../assets/me.jpeg";

export default function About() {
  return (
    <Layout>

      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        About Me
      </motion.h1>


      <div className="grid md:grid-cols-2 gap-10 mt-10">


        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >

          <p className="text-gray-300 leading-7">

            I am Kavir Sawant, a Computer Engineering student passionate about
            Web Development, Programming, and modern technologies.

            I have completed Diploma in Computer Engineering and currently
            pursuing B.E in Computer Engineering.

            I enjoy building web applications, AI projects, and modern UI
            portfolios using React, Python, and databases.

            My goal is to become a skilled software developer and work on
            advanced technical projects in future.

          </p>


          {/* Details */}

          <div className="mt-6 space-y-2">

            <p>🎓 B.E Computer Engineering</p>
            <p>💻 Web Developer</p>
            <p>🐍 Python Programmer</p>
            <p>🗄 Database Knowledge</p>
            <p>⚙ Linux / Raspberry Pi</p>
            <p>🌐 AWS Basics</p>

          </div>

        </motion.div>



        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

            <img
              src={myPhoto}
              className="w-60 h-60 rounded-full border-4 border-blue-500 relative"
            />

          </div>

        </motion.div>


      </div>



      {/* EXTRA */}

      <div className="mt-16">

        <h2 className="text-2xl text-purple-400 font-bold">
          Strengths
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-6">

          <Box name="Teamwork" />
          <Box name="Leadership" />
          <Box name="Communication" />
          <Box name="Critical Thinking" />
          <Box name="Time Management" />
          <Box name="Problem Solving" />

        </div>

      </div>


    </Layout>
  );
}



function Box({ name }) {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded-lg text-center hover:bg-blue-500/20 transition">
      {name}
    </div>
  );
}