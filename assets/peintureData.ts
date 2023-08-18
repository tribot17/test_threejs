import { peintureInterface } from "@/interface/peintureInterface";
import painting1 from "@/assets/radeauDeLaMeduse.jpeg";
import painting2 from "@/assets/peinting2.jpg";
import painting3 from "@/assets/mortDeSocrate.jpeg";
import painting4 from "@/assets/Le_Désespere.jpg";

export const peitureData: peintureInterface[] = [
  {
    position: [0, 5, -24.5],
    rotation: [0, 0, 0],
    img: painting2.src,
    text: {
      date: "1489-1490",
      titre: "  ",
      peintre: "Sandro Botticelli",
      description: `L'Annonciation dite du Cestello (en italien Annunciazione di Cestello) est une peinture de Sandro Botticelli réalisée en 1489 et 1490 en tempera sur un panneau de 150
      × 156 cm, restaurée en 1978 et conservée au musée des Offices de
      Florence, œuvre caractéristique par son pavement perspectif,
       son paysage en fond, les poses très étudiées des protagonistes.`,
    },
    link: "https://fr.wikipedia.org/wiki/L%27Annonciation_du_Cestello",
  },
  {
    position: [0, 5, 24.5],
    rotation: [0, -Math.PI, 0],
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
    link: "https://fr.wikipedia.org/wiki/Le_Radeau_de_La_M%C3%A9duse",
  },
  {
    position: [24.5, 5, 0],
    rotation: [0, Math.PI / 2, 0],
    img: painting3.src,
    text: {
      date: "1843-1845",
      titre: "La Mort de Socrate",
      peintre: "Jacques-Louis David",
      description: `La Mort de Socrate est un tableau réalisé par le peintre français Jacques-Louis David en 1787. 
      Il représente la mort du philosophe grec Socrate, condamné par les Athéniens à boire la ciguë.
      Le tableau avait été commandé à David par Charles-Michel Trudaine de la Sablière. 
      Il a été présenté la première fois au Salon de peinture et de sculpture de l'année 1787,
      en compagnie d'une autre peinture sur le même sujet de Pierre Peyron. Il est actuellement 
      conservé au Metropolitan Museum of Art, à New York1.`,
    },
    link: "https://fr.wikipedia.org/wiki/Le_D%C3%A9sesp%C3%A9r%C3%A9",
  },

  {
    position: [-24.5, 5, 0],
    rotation: [0, Math.PI / 2, 0],
    img: painting4.src,
    text: {
      date: "1843-1845",
      titre: "Le Désespéré",
      peintre: "Gustave Courbet",
      description: `L'œuvre est un autoportrait de Gustave Courbet qui se représente 
      de face, en gros plan, la bouche entrouverte et le regard plongeant dans celui 
      du spectateur. Ses yeux sont écarquillés et ses deux mains semblent lui arracher 
      les cheveux. La pâleur du visage contraste avec la noirceur des cheveux et de la barbe, 
      le tout renforcé par la blancheur de la chemise.
      La source lumineuse vient d'en haut, sur la gauche, et accentue les contrastes.`,
    },
    link: "https://fr.wikipedia.org/wiki/Le_D%C3%A9sesp%C3%A9r%C3%A9",
  },
];
