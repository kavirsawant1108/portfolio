import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const link =
    "block py-2 px-3 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition";

  return (
    <div className="fixed left-0 top-0 h-full w-60 bg-black/40 backdrop-blur-xl border-r border-white/10 p-6">

        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Kavir Sawant
        </h1>

        <br></br>

      <NavLink to="/" className={link}>Home</NavLink>
      <NavLink to="/education" className={link}>Education</NavLink>
      <NavLink to="/skills" className={link}>Skills</NavLink>
      <NavLink to="/projects" className={link}>Projects</NavLink>
      <NavLink to="/achievements" className={link}>Achievements</NavLink>
      <NavLink to="/about" className={link}>About</NavLink>
      <NavLink to="/contact" className={link}>Contact</NavLink>

    </div>
  );
}