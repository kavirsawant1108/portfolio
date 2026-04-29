import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function ThreeBg() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars radius={100} depth={50} count={3000} factor={4} fade />
      </Canvas>
    </div>
  );
}