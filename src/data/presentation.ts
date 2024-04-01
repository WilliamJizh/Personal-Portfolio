type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "william.jzh@gmail.com",
  title: "William Ji",
  // profile: "/profile.webp",
  description: "Student at UBC",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/WilliamJizh/",
    },
    {
      label: "Github",
      link: "https://github.com/WilliamJizh",
    },
  ],
};

export default presentation;
