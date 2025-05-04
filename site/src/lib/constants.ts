export type Project = {
  name: string;
  url?: string;
  repository?: string;
  image?: string;
  description: string;
  technologies: string[];
};

export const projectsConfig: Project[] = [
  {
    name: "la.likenoother",
    url: "https://www.likenother.shop",
    description:
      "An ecommerce website for the LA Like No Other clothing line. Complete with Shopify integration for CMS, Shopping Cart Management, and Payments.",
    technologies: [
      "TypeScript",
      "Shopify Storefront API",
      "NextJS",
      "Shopify Admin API",
      "Vercel",
      "React",
      "Tailwind",
    ],
  },
  {
    name: "Got2Go",
    repository: "https://github.com/cpscg2g/cpsc491_g2g",
    image:
      "https://raw.githubusercontent.com/oscisn93/dev-blog/refs/heads/main/public/g2g-logo.png",
    description:
      "An Android mobile app that helps users find the nearest public restroom. Users can find information such as accessibility, cleanliness, and more.",
    technologies: ["Kotlin", "Mapbox API", "Firebase"],
  },
  {
    name: "Pokemon Egg Hunt",
    repository: "https://github.com/oscisn93/pokemon-egg-hunt",
    image:
      "https://raw.githubusercontent.com/oscisn93/dev-blog/refs/heads/main/public/pokemon-egg-hunt.png",
    description:
      "A Pokemon themed browser game where the user can find Pokemon eggs and hatch them.",
    technologies: ["Deno", "TypeScript", "DenoDeploy", "Firebase Realtime DB"],
  },
  {
    name: "Starred",
    repository: "https://github.com/oscisn93/starred",
    image:
      "https://raw.githubusercontent.com/oscisn93/dev-blog/refs/heads/main/public/loginImage.jpg",
    description:
      "An reward system app that allows users to earn points and redeem them for rewards. Made for parents and other role models to encourage positive behavior in children.",
    technologies: ["React", "TypeScript", "Firebase"],
  },
  {
    name: "Transcend Care",
    repository: "https://github.com/AmazonSWCollab/transcendCare",
    image:
      "https://raw.githubusercontent.com/oscisn93/dev-blog/43cddc7ace3e9a1bec03756dc07ff5b6f77545fa/public/logo.svg",
    description:
      "A web application that connects transgender and transitioning users with healthcare providers and allows users to give feedback about specific treatments received.",
    technologies: ["TypeScript", "Next.js", "Mapbox API", "PostrgreSQL"],
  },
  {
    name: "Focal",
    repository: "https://github.com/mfmorikawa/FoCal",
    image:
      "https://raw.githubusercontent.com/oscisn93/dev-blog/43cddc7ace3e9a1bec03756dc07ff5b6f77545fa/public/favicon.svg",
    description:
      "A productivity web application that allows users to create tasks, organized with projects and represented as events on a calendar. Events can then be completed and moved around.",
    technologies: ["React", "TypeScript", "Redux", "Flask"],
  },
];

export const SITE_TITLE = "Big O's Website";
export const SITE_DESCRIPTION =
  "Welcome to my online Software Developer portfolio!";
