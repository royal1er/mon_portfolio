import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  ipeos,
  belair,
  geoworld,
  kermadec,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  projetmeteo,
  drep,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Mes réalisations",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur Flutter",
    icon: mobile,
  },
  {
    title: "Développeur Salesforce",
    icon: backend,
  },
  {
    title: "Créateur de contenu",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Développeur Web",
    company_name: "IPEOS",
    icon: ipeos,
    iconBg: "#383E56",
    date: "Mai 2019 - Juin 2019",
    points: [
      "Développement web avec les CMS : Wordpress, Prestashop, Spip",
      "Conception d’interfaces utilisateur responsive (mobile, PC)",
      "Accompagnement sur la structuration des sites conçus, assistance au service client de l’entreprise.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "LYCÉE PRIVÉ BELAIR",
    icon: belair,
    iconBg: "#4169E1",
    date: "Déc 2019 - Jan 2020",
    points: [
      "Conception d’un site internet scolaire sur-mesure administrable et modulaire déploiement du site en ligne et référencement sur Google.",
      "Conception d’un interface utilisateur responsive (mobile, PC).",
    ],
  },
  {
    title: "Assistant informatique",
    company_name: "COLLÈGE NESTOR DE KERMADEC",
    icon: kermadec,
    iconBg: "#ffffff",
    date: "Oct 2021  - Mai 2022",
    points: [
      "Maintenance et support technique, gestion de Réseau.",
      "Mise à jour et installation de logiciels ainsi que support aux projets informatiques au sein de l'école.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GEOWORLD",
    description:
      "Application destinée à des professeurs d'histoire et de géographie.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "HEROKU",
        color: "pink-text-gradient",
      },
    ],
    image: geoworld,
    source_code_link: "https://github.com/",
  },
  {
    name: "Drep'Agir",
    description:
      "Application de quiz destinée à informer ces utilisateurs sur cette maladie parfois méconnue du grand public.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Django(Api Rest)",
        color: "green-text-gradient",
      },
    ],
    image: drep,
    source_code_link: "https://github.com/",
  },
  {
    name: "Site météo",
    description: "Prévisions météo à 3 jours sur le monde.",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: projetmeteo,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
