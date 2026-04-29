import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout>

      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Contact
      </motion.h1>



      <div className="grid md:grid-cols-2 gap-10 mt-10">


        {/* LEFT INFO */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >

          <Info title="Phone" value="+91 9699442157" />

          <Info title="Email" value="kavirsawant@gmail.com" />

          <Info
            title="Address"
            value="Verna, Cortalim, Goa, India"
          />

          <Info
            title="GitHub"
            value="github.com/kavirsawant1108"
          />

          <Info
            title="LinkedIn"
            value="linkedin.com"
          />

        </motion.div>



        {/* RIGHT FORM */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 p-6 rounded-xl"
        >

          <h2 className="text-xl text-blue-400 mb-4">
            Send Message
          </h2>

          <input
            placeholder="Your Name"
            className="w-full p-2 mb-3 bg-black/40 border border-white/10 rounded"
          />

          <input
            placeholder="Email"
            className="w-full p-2 mb-3 bg-black/40 border border-white/10 rounded"
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-2 mb-3 bg-black/40 border border-white/10 rounded"
          />

          <button
            className="px-5 py-2 bg-blue-500 hover:bg-purple-500 rounded-lg shadow-lg"
          >
            Send
          </button>

        </motion.div>


      </div>


      {/* Social buttons */}

      <div className="mt-16 flex gap-4">

        <a
          href="https://github.com/kavirsawant1108"
          target="_blank"
          className="px-4 py-2 bg-white/10 rounded-lg hover:bg-blue-500/20"
        >
          GitHub
        </a>

        <a
          href="#"
          className="px-4 py-2 bg-white/10 rounded-lg hover:bg-blue-500/20"
        >
          LinkedIn
        </a>

      </div>


    </Layout>
  );
}



function Info({ title, value }) {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">

      <p className="text-blue-400">{title}</p>

      <p className="text-gray-300">{value}</p>

    </div>
  );
}