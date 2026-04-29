import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Layout>

      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Skills
      </motion.h1>


      {/* Frontend */}

      <Section
        title="Frontend Development"
        skills={[
          {
            name: "React.js",
            desc: "Building modern UI, components, routing, animations, and responsive websites using React."
          },
          {
            name: "JavaScript",
            desc: "Good knowledge of ES6, DOM, API calls, async programming, and logic building."
          },
          {
            name: "HTML & CSS",
            desc: "Strong understanding of layouts, flexbox, grid, responsive design, and UI styling."
          },
          {
            name: "Tailwind CSS",
            desc: "Used for modern UI, glassmorphism, gradients, animations, and responsive design."
          }
        ]}
      />


      {/* Backend */}

      <Section
        title="Backend & Programming"
        skills={[
          {
            name: "Python",
            desc: "Used in ML project, logic building, and backend scripting."
          },
          {
            name: "C Programming",
            desc: "Good understanding of basic programming concepts and problem solving."
          },
          {
            name: "Java",
            desc: "Basic OOP concepts, classes, objects, and simple programs."
          }
        ]}
      />


      {/* Tools */}

      <Section
        title="Tools & Technologies"
        skills={[
          {
            name: "Git & GitHub",
            desc: "Version control, pushing projects, hosting portfolio, collaboration."
          },
          {
            name: "VS Code",
            desc: "Main editor used for web development and coding."
          },
          {
            name: "Supabase",
            desc: "Used for backend API, database, and authentication in projects."
          },
          {
            name: "Vite",
            desc: "Used for fast React project setup and build."
          }
        ]}
      />


      {/* Special */}

      <Section
        title="Special Skills"
        skills={[
          {
            name: "Fake News Detection Project",
            desc: "Built ML based system to detect fake news using Python and API."
          },
          {
            name: "Portfolio Development",
            desc: "Created advanced portfolio with animations, routing, and modern UI."
          },
          {
            name: "Problem Solving",
            desc: "Good at logic building and debugging errors."
          }
        ]}
      />

    </Layout>
  );
}



function Section({ title, skills }) {
  return (
    <div className="mt-10">

      <h2 className="text-2xl text-blue-400 mb-6">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 p-5 rounded-xl shadow-lg"
          >

            <h3 className="text-xl text-purple-400">
              {s.name}
            </h3>

            <p className="text-gray-300 mt-2">
              {s.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </div>
  );
}