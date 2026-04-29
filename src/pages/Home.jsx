import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import myPhoto from "../assets/me.jpeg";

export default function Home() {
  return (
    <Layout>


      {/* HERO SECTION */}

      <div className="grid md:grid-cols-2 gap-10 items-center mt-10">


        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >

          <h1 className="text-5xl font-bold">

            Hi, I'm

            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Kavir Sawant
            </span>

          </h1>


          <h2 className="text-xl mt-4 text-gray-300">

            <ReactTyped
              strings={[
                "Computer Engineering Student",
                "React Developer",
                "Python Programmer",
                "Full Stack Learner"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />

          </h2>


          <p className="mt-6 text-gray-400">

            Passionate Computer Engineering student skilled in
            React, Python, and Web Development.
            Interested in building modern applications.

          </p>


          {/* Buttons */}

          <div className="flex gap-4 mt-6">

            <a
              href="/portfolio/resume.jpg"
              target="_blank"
              className="px-5 py-2 bg-purple-500 rounded-lg"
            >
              Resume
            </a>

            <a
              href="https://github.com/kavirsawant1108"
              target="_blank"
              className="px-5 py-2 bg-purple-500 rounded-lg"
            >
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/kavirsawant/"
              target="_blank"
              className="px-5 py-2 bg-purple-500 rounded-lg"
            >
              Linkdin
            </a>

          </div>

        </motion.div>



        {/* RIGHT IMAGE */}

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



      {/* STATS SECTION */}

      <div className="grid md:grid-cols-3 gap-6 mt-20">


        <Card title="Projects" value="5+" />

        <Card title="Skills" value="10+" />

        <Card title="Experience" value="Fresher" />


      </div>



      {/* ABOUT SHORT */}

      <motion.div
        className="mt-20 bg-white/5 border border-white/10 p-6 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <h2 className="text-2xl text-blue-400 mb-3">
          About Me
        </h2>

        <p className="text-gray-300">

          I am a Computer Engineering student with strong interest in
          software development, machine learning, and web technologies.
          I enjoy building real projects and learning new technologies.
          My goal is to become a skilled engineer and serve the nation.

        </p>

      </motion.div>


    </Layout>
  );
}



function Card({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-white/5 border border-white/10 p-6 rounded-xl text-center"
    >

      <h2 className="text-3xl text-purple-400">
        {value}
      </h2>

      <p className="text-gray-300">
        {title}
      </p>

    </motion.div>
  );
}