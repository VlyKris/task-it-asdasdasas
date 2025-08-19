import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, Mesh } from "three";

export function HeroGlobe() {
  const mesh = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if(mesh.current) {
      mesh.current.rotation.y += delta * 0.1;
      mesh.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
        color={new Color(0xff00ff)} 
      />
      <directionalLight 
        position={[-5, -5, -5]} 
        intensity={1} 
        color={new Color(0x00ffff)}
      />
      <mesh ref={mesh} scale={2.5}>
        <icosahedronGeometry args={[1, 6]} />
        <meshStandardMaterial 
          wireframe={true} 
          color={new Color(0x8A2BE2)}
          emissive={new Color(0x8A2BE2)}
          emissiveIntensity={0.5}
        />
      </mesh>
    </>
  );
}