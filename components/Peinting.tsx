import { Vector3, extend, useFrame, useLoader } from "@react-three/fiber";
import { peintureInterface } from "@/interface/peintureInterface";
import { useState, useEffect, useContext } from "react";
import {
  Box,
  Html,
  Plane,
  useNormalTexture,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { CharacterContext } from "@/context/CharacterContext";
import { peitureData } from "@/assets/peintureData";
import CadreMap from "@/assets/cadre/VeneerWhiteOakRandomMatched001_COL_2K_METALNESS.png";

interface props extends peintureInterface {
  index: number;
}

const Painting: React.FC<props> = ({
  position,
  rotation,
  img,
  text,
  index,
}) => {
  const { setActive } = useContext(CharacterContext);
  const [showLabel, setShowLabel] = useState(false);
  const [_active, set_Active] = useState(false);
  const [cameraPos, setCameraPosition] = useState<Vector3>();

  const paintingPos = [
    position[2] != 0
      ? position[0]
      : position[0] > 0
      ? position[0] - 0.2
      : position[0] + 0.2,
    position[1],
    position[0] != 0
      ? position[2]
      : position[2] < 0
      ? position[2] + 0.2
      : position[2] - 0.15,
  ];
  const texture = useTexture({ map: img });
  const cadreTexture = useTexture({ map: CadreMap.src });
  const vecRotation = new THREE.Euler().fromArray(rotation);
  const vecPosition = new THREE.Vector3().fromArray(position);
  const vecPeinting = new THREE.Vector3().fromArray(paintingPos);

  const navigateOnOtherPage = (key: KeyboardEvent) => {
    if ((_active && key.key === "e") || key.key === "E")
      window.location.href = `/gallerie/${index}`;
  };

  useFrame(({ camera }) => {
    const cameraPosition = camera.position.clone();
    const paintingPosition = new THREE.Vector3().fromArray(position);
    const distance = cameraPosition.distanceTo(paintingPosition);

    setCameraPosition(cameraPosition);
    setShowLabel(distance < 15);
  });

  useEffect(() => {
    setActive(!_active);
    set_Active(!_active);

    document.addEventListener("keypress", navigateOnOtherPage);

    return () => {
      document.removeEventListener("keypress", navigateOnOtherPage);
    };
  }, [showLabel]);

  return (
    <group>
      <Plane position={vecPeinting} rotation={vecRotation} args={[10, 10]}>
        <meshStandardMaterial side={THREE.DoubleSide} {...texture} />
      </Plane>
      <Box
        args={[10.2, 10.2, 0.2]}
        position={vecPosition}
        rotation={vecRotation}
        scale={[1.01, 1.01, 1]}
        castShadow
      >
        <meshStandardMaterial {...cadreTexture} />
      </Box>
      {showLabel && (
        <>
          <Html position={[position[0] + 6, position[1], position[2]]}>
            <div
              style={{
                width: "200px",
                height: "auto",
                padding: "20px",
                background: "#c5e0cd",
                border: "1px solid black",
              }}
            >
              <p>Titre : {text.titre}</p>
              <p>Peintre : {text.peintre}</p>
              <p>Date : {text.date}</p>
            </div>
          </Html>
        </>
      )}
    </group>
  );
};

export default Painting;
