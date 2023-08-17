import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { Plane, useTexture } from "@react-three/drei";
import * as THREE from "three";
import floor from "@/assets/floor/historical-parquet-01-diffuse.png";
import floorDisplace from "@/assets/floor/historical-parquet-01-displacement.jpg";
import floorNormal from "@/assets/floor/historical-parquet-01-normal.png";

function Floor(props: any) {
  const texture = useTexture({
    map: floor.src,
    displacementMap: floorDisplace.src,
  });

  return (
    <Plane
      args={[50, 50, 16, 16]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3, 0]}
    >
      <meshStandardMaterial {...texture} />
    </Plane>
  );
}

export default Floor;
