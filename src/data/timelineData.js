import sunLifeLogoImg from "@assets/images/sun-life-logo.png";
import nuanceLogoImg from "@assets/images/nuance-logo.png";
import concordiaLogoImg from "@assets/images/concordia-logo.png";

export const workTimelineData = [
  {
    id: 0,
    position: "Front-end Developer",
    company: "Nuance Communications Inc.",
    type: "Internship",
    logo: nuanceLogoImg,
    date: "Jan 2022 — Apr 2022",
    location: "Remote",
    description:
      "Built and customized reusable front-end components, contributed to the UI component library, implemented interactive React components using lifecycle methods and other features, and created a design library using Storybook to match the company's brand colors... thanks to my supportive teams and the fuel provided by caffeine ☕",
    tools: ["React", "Javascript", "Typescript", "Storybook"],
  },
  {
    id: 1,
    position: "Mobile Application Developer",
    company: "Sun Life Financial",
    type: "Internship",
    logo: sunLifeLogoImg,
    date: "May 2021 — Aug 2021",
    location: "Remote",
    description:
      'Assisted multiple POC developments, improved "my Sun Life" mobile App\'s UI/UX, experimented with Carplay support, engaged in R&D on mobile security and mobile API as a part of digital strategy, conducted Adaptive Authentication research, and ensured code reliability on "my Sun Life" mobile app using the Espresso☕ testing framework.',
    tools: ["Java", "Kotlin", "Swift", "Android SDK", "Espresso"],
  },
  {
    id: 2,
    position: "Android Application Developer",
    company: "Sun Life Financial",
    type: "Internship",
    logo: sunLifeLogoImg,
    date: "Sep 2020 — Dec 2020",
    location: "Remote",
    description:
      'Worked with the production team to build new UI features on the "Lumino Health" mobile application, led two POC developments on the "my Sun Life" mobile application, and performed UI testing using the Espresso testing framework.',
    tools: ["Java", "Kotlin", "Android SDK", "Espresso"],
  },
];

export const lifeTimelineData = [
  {
    id: 0,
    date: "Mar 1999",
    title: ". . . Hailing from SOUTH KOREA 🕊️",
    location: "Gwangju",
    description: "Never have to worry about running out of spicy food.",
  },
  {
    id: 1,
    date: "Jul 1999",
    title: "Migrate to JAPAN 🗼",
    location: "Tokyo",
    description:
      "Public transportations are too punctual that you really cannot make up an excuse for being late.",
  },
  {
    id: 2,
    date: "Jul 2015",
    title: "🍁 Study Abroad to CANADA",
    location: "Montreal, QC",
    description:
      "Came to improve my English skills...\nAttends, why is everything in French?",
  },
  {
    id: 3,
    date: "Sep 2019",
    title: "Begins Studies @ Concordia University",
    logo: concordiaLogoImg,
    location: "Montreal, QC",
    description:
      "Object Oriented Programming, System Hardware, Operation System, Data Structure & Algorithms, Computer Networks, Artificial Intelligence, Web Programming, etc...\
      \nHome of the endless coding marathons and the land of the 2 a.m. caffeine runs :)",
  },
  {
    id: 4,
    date: "Dec 2022",
    title:
      "🎓 Graduates Concordia University — Bachelor of Computer Science (co-op)",
    location: "Montreal, QC",
    description: "YEEHAW",
  },
];
