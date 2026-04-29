import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

function Box() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
}

export default function Cube3D() {
  return (
    <div className="w-full h-[300px]">

      <Canvas>

        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />

        <Box />

        <OrbitControls enableZoom={false} />

      </Canvas>

    </div>
  );
}