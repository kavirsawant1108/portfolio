import Sidebar from "./Sidebar";
import ThreeBg from "./ThreeBg";
import MouseLight from "./MouseLight";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      <ThreeBg />
      <MouseLight />

      <div className="absolute w-[500px] h-[500px] bg-blue-500 blur-[150px] opacity-20 top-0 left-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-[150px] opacity-20 bottom-0 right-0"></div>

      <Sidebar />

      <div className="ml-60 p-10 relative z-10">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">

          {children}

        </div>

      </div>

    </div>
  );
}