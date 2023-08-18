import { Canvas, useFrame } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Loader, useProgress } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { peitureData } from "@/assets/peintureData";
import * as THREE from "three";
import Wall from "@/components/Wall";
import Plane from "@/components/Plane";
import Painting from "@/components/Peinting";
import UIContainer from "@/components/UiContainer";
import Controls from "../../components/Controls";
import Floor from "@/components/Plane";
import { Spinner } from "@chakra-ui/react";

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
  const [load, setLoad] = useState(false);
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const { progress } = useProgress();

  return (
    <>
      <div
        style={
          progress === 100
            ? { visibility: "hidden", height: "0" }
            : {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                visibility: "visible",
                height: "100vh",
                width: "100%",
              }
        }
      >
        <Spinner />
      </div>
      <div style={{ visibility: progress === 100 ? "visible" : "hidden" }}>
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
          <spotLight
            args={["#ffffff", 1.5, 7, (Math.PI / 180) * 45, 0.4]}
            position={[-3, 1, 0]}
            castShadow
          />
          <Physics>
            <Controls />
            <Zoom cameraRef={cameraRef} zoom={zoom} />
            <Floor />
            <Wall
              rotation={[0, 0, 0]}
              position={[0, 0, -25]}
              color={"#565c73"}
            />
            {peitureData &&
              peitureData.map((peinture, i) => (
                <group key={i}>
                  <spotLight
                    intensity={150}
                    color={"#e3d2ca"}
                    position={new THREE.Vector3().fromArray(peinture.position)}
                    angle={Math.PI}
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
      </div>
    </>
  );
};

export default App;
