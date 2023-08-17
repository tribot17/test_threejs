import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import wallAO from "@/assets/wall/ConcretePrecastPlates004_AO_1K_METALNESS.png";
import wallCOL from "@/assets/wall/ConcretePrecastPlates004_COL_1K_METALNESS.png";
import wallDISP from "@/assets/wall/ConcretePrecastPlates004_DISP16_1K_METALNESS.png";
import wallNORMAL from "@/assets/wall/ConcretePrecastPlates004_NRM_1K_METALNESS.png";
import wallROUGH from "@/assets/wall/ConcretePrecastPlates004_ROUGHNESS_1K_METALNESS.png";
import wallMetal from "@/assets/wall/ConcretePrecastPlates004_METALNESS_1K_METALNESS.png";
import { Plane, useNormalTexture, useTexture } from "@react-three/drei";

const Wall = (props: any) => {
  const [normalMap, url] = useNormalTexture(1, {
    offset: [0, 0],
    repeat: [1, 1],
    anisotropy: 8,
  });
  const texture = useTexture({
    map: wallCOL.src,
    displacementMap: wallDISP.src,
    aoMap: wallAO.src,
    metalnessMap: wallMetal.src,
    roughnessMap: wallROUGH.src,
    normalMap: wallNORMAL.src,
  });

  return (
    <Plane
      args={[50, 50, 64, 64]}
      rotation={props.rotation}
      position={props.position}
    >
      <meshStandardMaterial {...texture} normalMap={normalMap} />
    </Plane>
    // <mesh ref={ref} receiveShadow>
    //   <planeGeometry attach="geometry" args={[50, 50, 3]} />
    //   <meshBasicMaterial attach="material" {...texture} map={} />
    // </mesh>
  );
};

export default Wall;
