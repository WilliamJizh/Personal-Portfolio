export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "ONTO TaleAI",
    techs: [
      "Typescript",
      "Tailwind",
      "Next.js",
      "MySQL",
      "Redis",
      "Python",
      "LLM",
    ],
    link: "https://www.taleai.io/",
  },
  {
    title: "Spotify Explorer",
    techs: ["React", "D3"],
    link: "https://github.com/WilliamJizh/spotify-explorer",
  },
  {
    title: "Tarot Reading",
    techs: ["React","Tailwind", "Flask","GPT-3.5"],
    link: "https://github.com/WilliamJizh/TarotReading",
  },
];

export default projects;
