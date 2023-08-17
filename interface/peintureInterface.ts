import { StaticImageData } from "next/image";
import { EulerOrder, Vector3 } from "three";
interface peintureText {
  date: string;
  titre: string;
  peintre: string;
  description: string;
}

export interface peintureInterface {
  position: number[];
  rotation: [number, number, number, (EulerOrder | undefined)?, ...any[]];
  img: string;
  text: peintureText;
  link: string;
}
