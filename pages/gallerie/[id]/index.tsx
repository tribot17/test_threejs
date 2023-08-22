import { peintureInterface } from "@/interface/peintureInterface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { peitureData } from "@/assets/peintureData";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import styles from "./idPage.module.scss";
import { Box, OrbitControls, Plane, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Peinture: React.FC<{ img: string }> = ({ img }) => {
  const texture = useTexture({ map: img });
  return (
    <Plane args={[7, 7]}>
      <meshStandardMaterial side={THREE.DoubleSide} {...texture} />
    </Plane>
  );
};

const PeitingDetailPage = () => {
  const router = useRouter();
  const [data, setData] = useState<peintureInterface>();
  const id = router.asPath;

  useEffect(() => {
    if (id.charAt(id.length - 1) != "]") {
      setData(peitureData[parseInt(id.charAt(id.length - 1))]);
    }
  }, [id]);

  return (
    <div>
      {/* <Navbar /> */}
      <div className={styles.peint_container}>
        <Link href={"/gallerie"}>
          <Button colorScheme="teal" size="lg">
            RETOUR DANS LA GALLERIE
          </Button>
        </Link>
        <div className={styles.peint_divider}>
          <Card width={"50%"} height={"auto"}>
            <CardHeader>
              <Heading size="md">La peinture en détail</Heading>
            </CardHeader>
            <CardBody display={"flex"} flexDirection={"column"}>
              <Stack>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Peintre
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {data?.text.peintre}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Titre
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {data?.text.titre}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Date
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {data?.text.date}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Description
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {data?.text.description}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      En savoir plus
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      <a
                        href="data?.link"
                        target="_blank"
                        style={{ color: "blue", textDecoration: "underline" }}
                      >
                        {data?.link}
                      </a>
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </CardBody>
          </Card>
          <Canvas
            style={{
              width: "100%",
              minHeight: "50vh",
              maxHeight: "80vh",
              height: "auto",
              background: "lightblue",
            }}
            shadows
            dpr={[1, 2]}
          >
            <ambientLight />
            <OrbitControls />
            <Peinture img={data?.img!} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default PeitingDetailPage;
