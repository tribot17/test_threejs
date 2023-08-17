import { peintureInterface } from "@/interface/peintureInterface";
import painting1 from "@/assets/radeau_meduse.jpeg";
import painting2 from "@/assets/potw2138a.jpg";
import painting3 from "@/assets/wall.jpg";
import painting4 from "@/assets/wood_texture.jpg";

export const peitureData: peintureInterface[] = [
  {
    position: [0, 5, -24.5],
    rotation: [0, 0, 0],
    img: painting1.src,
    text: {
      date: "1818 - 1819",
      peintre: "Théodore Géricault",
      titre: "Le radeau de la méduse",
      description: `Le Radeau de La Méduse est une peinture à l'huile sur toile, 
      réalisée entre 1818 et 1819 par le peintre et lithographe 
      romantique français Théodore Géricault (1791-1824). Son titre initial,
       donné par Géricault lors de sa première présentation, est Scène d'un naufrage. 
       Ce tableau, de très grande dimension (491 cm de hauteur et 716 cm de largeur), 
       représente un épisode tragique de l'histoire de la marine coloniale française : 
       le naufrage de la frégate Méduse.`,
    },
    link: "",
  },
  {
    position: [0, 5, 24.5],
    rotation: [0, -Math.PI, 0],
    img: painting2.src,
    text: {
      date: "1585",
      titre: "",
      peintre: "c moi",
      description: "Cette peinture est jolie",
    },
    link: "",
  },
  {
    position: [24.5, 5, 0],
    rotation: [0, Math.PI / 2, 0],
    img: painting3.src,
    text: {
      date: "1585",
      titre: "",
      peintre: "c moi",
      description: "Cette peinture est jolie",
    },
    link: "",
  },

  {
    position: [-24.5, 5, 0],
    rotation: [0, Math.PI / 2, 0],
    img: painting4.src,
    text: {
      date: "1585",
      titre: "",
      peintre: "c moi",
      description: "Cette peinture est jolie",
    },
    link: "",
  },
];
