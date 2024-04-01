export type Experience = {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
    techs: string[];
    };

const experiences: Experience[] = [
  {
    title: "Junior Software Engineer",
    company: "Planview, Inc.",
    location: "Vancouver BC",
    startDate: "Mar 2022",
    endDate: "Apr 2023",
    description:
      "Worked in the Tasktop Viz team to develop Viz, a Value Stream Analytics platform that focusing on streamlining analytics delivery.",
    techs: [
      "Scala",
      "React",
      "Typescript",
      "SpringBoot",
      "Kubernetes",
      "Kafka",
      "Terraform",
      "Datadog",
      "AWS",
    ],
    achievements: [
      "Engineered React/TypeScript front end and Scala/Java Spring Boot back end for platform services.",
      "Developed multi-service features on Kubernetes with Kafka integration.",
      "Migrated build images to Amazon ECR with Terraform lifecycle policies, optimizing Jenkins builds.",
      "Implemented Gzip compression, reducing page load times by up to 30%.",
      "Configured EU service's data tracking with Pendo for user engagement analysis.",
      "Designed a monitoring dashboard cooprating datadog for service health check.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Public Services and Procurement Canada",
    location: "Vancouver BC",
    startDate: "Mar 2022",
    endDate: "Apr 2023",
    description:
      "Worked in Public Services and Procurement Canada digital service branch (DSB) that responsible for the development and the maintenance of various government sites and resolve technical difficulties.",
    techs: ["ASP.NET", "C#", "Drupal", "Python"],
    achievements: [
      "Engineered React/TypeScript front end and Scala/Java Spring Boot back end for platform services.",
      "Developed multi-service features on Kubernetes with Kafka integration.",
      "Migrated build images to Amazon ECR with Terraform lifecycle policies, optimizing Jenkins builds.",
      "Implemented Gzip compression, reducing page load times by up to 30%.",
      "Configured EU service's data tracking with Pendo for user engagement analysis.",
      "Designed a monitoring dashboard cooprating datadog for service health check.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Nexus Media",
    location: "Vancouver BC",
    startDate: "Sep 2019",
    endDate: "Dec 2019",
    description:
      "Participated in developing a mobile 2D roguelike shooting game named Monster Warrior: Adventure.",
    techs: ["Unity", "C#"],
    achievements: [
      "Responsible for implementing UI components for the main menu, in-gameHUD, store items display, etc., using Unity and C# framework",
      "Communicated and collaborated with colleagues in art departments to accomplish tasks.",
    ],
  },
];

export default experiences;