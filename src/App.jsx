import { ReactTyped } from "react-typed";
import myPhoto from "./assets/me.jpeg";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex">

      {/* Sidebar */}
      <div className="w-60 bg-black p-5 hidden md:block">

        <h1 className="text-2xl font-bold mb-10">
          Kavir Sawant
        </h1>

        <ul className="space-y-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

      </div>


      {/* Main */}
      <div className="flex-1 p-10">


        {/* Hero */}
        <section className="text-center mt-10">

          <img
            src={myPhoto}
            className="mx-auto rounded-full w-40 h-40 border-4 border-white"
          />

          <h1 className="text-5xl font-bold mt-5">
            Kavir Sawant
          </h1>


          <ReactTyped
            strings={[
              "Computer Engineering Student",
              "React Developer",
              "Web Developer",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="text-gray-400 text-lg"
          />


          {/* Buttons */}
          <div className="mt-5 space-x-4">

            <a
              href="/resume.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 px-4 py-2 rounded"
            >
              Resume
            </a>

            <a
              href="https://github.com/kavirsawant1108"
              className="bg-gray-700 px-4 py-2 rounded"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kavirsawant/"
              className="bg-green-600 px-4 py-2 rounded"
            >
              LinkedIn
            </a>

          </div>

        </section>



        {/* Projects */}
        <section className="mt-20">

          <h2 className="text-3xl font-bold text-center">
            Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-8">

            <div className="bg-gray-800 p-6 rounded w-64 hover:scale-105">
              Fake News Detection System
            </div>

            <div className="bg-gray-800 p-6 rounded w-64 hover:scale-105">
              Portfolio Website
            </div>

            <div className="bg-gray-800 p-6 rounded w-64 hover:scale-105">
              React Web App
            </div>

          </div>

        </section>


        {/* Contact */}
        <section className="mt-20 text-center">

          <h2 className="text-3xl font-bold">
            Contact
          </h2>

          <p className="text-gray-400 mt-3">
            kavirsawant@email.com
          </p>

        </section>


      </div>

    </div>
  );
}

export default App;