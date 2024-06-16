import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Analyse des données et reporting",
    des:"Reporting automatisé : Création de tableaux de bord et de rapports automatisés pour surveiller les KPI.",
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "Analyse prédictive",
    des: "Utilisation de modèles statistiques pour prévoir les tendances futures et Développement de modèles prédictifs (ML)."
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "Analyse des réseaux sociaux",
    des: "Étude des données de navigation et d'utilisation des produits pour améliorer l'expérience utilisateur.",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Infrastructure de données",
    des: " Implémentation de solutions de stockage de données, incluant des data lakes et des data warehouses.",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "Pipeline de données",
    des: " Mise en place de pipelines de données en temps réel utilisant des technologies comme Apache Kafka ou Apache Flink.",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Conception et gestion de bases de données",
    des:"Gestion de bases de données, y compris la configuration.",
  },
];
