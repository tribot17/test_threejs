import { Canvas, useFrame } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { SpotLight } from "@react-three/drei";
import { useRef, useState } from "react";
import { peitureData } from "@/assets/peintureData";
import * as THREE from "three";
import Wall from "@/components/Wall";
import Plane from "@/components/Plane";
import Painting from "@/components/Peinting";
import UIContainer from "@/components/UiContainer";
import Controls from "./Controls";
import Floor from "@/components/Plane";

//Opti avoir 1 seul useFrame dans le projet
const Zoom: React.FC<any> = ({ cameraRef, zoom }) => {
  useFrame((state: any) => {
    // state.fov;
    const step = 0.1;
    state.camera.fov = THREE.MathUtils.lerp(
      state.camera.fov,
      zoom ? 15 : 35,
      step
    );

    state.camera.updateProjectionMatrix();
  });

  return null;
};

const App = () => {
  const [zoom, setZoom] = useState(false);
  const cameraRef = useRef<THREE.PerspectiveCamera>();

  return (
    <>
      <UIContainer />
      <Canvas
        style={{ width: "100%", height: "100vh" }}
        shadows
        camera={{ fov: zoom ? 15 : 35 }}
        dpr={[1, 2]}
        onClick={() => setZoom(!zoom)}
      >
        <ambientLight intensity={1} />
        <fog attach={"fog"} args={["black", 60, 100]} />
        {/* <directionalLight intensity={0.9} position={[10, 0, 0]} /> */}
        <spotLight
          args={["#ffffff", 1.5, 7, (Math.PI / 180) * 45, 0.4]}
          position={[-3, 1, 0]}
          castShadow
        />
        <Physics>
          <Controls />
          <Zoom cameraRef={cameraRef} zoom={zoom} />
          <Floor />
          <Wall rotation={[0, 0, 0]} position={[0, 0, -25]} color={"#565c73"} />
          {peitureData &&
            peitureData.map((peinture, i) => (
              <group key={i}>
                <spotLight
                  intensity={50}
                  color={"red"}
                  position={new THREE.Vector3().fromArray(peinture.position)}
                  angle={Math.PI}
                  // rotation={[Math.PI / 2, 0, 0]}
                  // position={new THREE.Vector3().fromArray(peinture.position)}
                />

                <Painting
                  position={peinture.position}
                  rotation={peinture.rotation}
                  img={peinture.img}
                  text={peinture.text}
                  link={peinture.link}
                  index={i}
                />
              </group>
            ))}
          <Wall
            rotation={[-Math.PI, 0, 0]}
            position={[0, 0, 25]}
            color={"#565c73"}
          />
          <Wall
            rotation={[0, Math.PI / 2, 0]}
            position={[-25, 0, 0]}
            color={"#565c73"}
          />
          <Wall
            rotation={[0, -Math.PI / 2, 0]}
            position={[25, 0, 0]}
            color={"#565c73"}
          />
          <Wall
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 25, 0]}
            color={"#565c73"}
          />
        </Physics>
      </Canvas>
    </>
  );
};

export default App;
