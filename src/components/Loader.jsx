import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">

      <ClipLoader
        color="#22d3ee"
        size={80}
      />

    </div>
  );
}