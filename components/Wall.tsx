import { useBox } from "@react-three/cannon";
import wallAO from "@/assets/wall2/StoneBricksSplitface001_AO_2K.jpg";
import wallCOL from "@/assets/wall2/StoneBricksSplitface001_COL_2K.jpg";
import wallDISP from "@/assets/wall2/StoneBricksSplitface001_DISP_2K.png";
import wallNORMAL from "@/assets/wall2/StoneBricksSplitface001_NRM_2K.png";
import wallROUGH from "@/assets/wall2/StoneBricksSplitface001_BUMP_2K.jpg";
import wallMetal from "@/assets/wall2/StoneBricksSplitface001_REFL_2K.jpg";
import { Plane, useNormalTexture, useTexture } from "@react-three/drei";

const Wall = (props: any) => {
  const colTexture = useTexture(wallCOL.src);
  const dispTexture = useTexture(wallDISP.src);
  const aoTexture = useTexture(wallAO.src);
  const metalTexture = useTexture(wallMetal.src);
  const roughnessTexture = useTexture(wallROUGH.src);
  const normalTexture = useTexture(wallNORMAL.src);

  return (
    <>
      <Plane
        args={[50, 50, 128, 128]}
        rotation={props.rotation}
        position={props.position}
      >
        <meshStandardMaterial
          roughness={2}
          map={colTexture}
          displacementMap={dispTexture}
          aoMap={aoTexture}
          metalnessMap={metalTexture}
          roughnessMap={roughnessTexture}
          normalMap={normalTexture}
        />
      </Plane>
    </>
  );
};

export default Wall;
