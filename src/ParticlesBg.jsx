import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        background: { color: "#000000" },

        particles: {
          number: { value: 60 },

          color: { value: "#3b82f6" },

          links: {
            enable: true,
            color: "#3b82f6",
          },

          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
}