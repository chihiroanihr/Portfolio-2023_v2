import sunLifeLogoImg from "@assets/images/timeline/sun-life-logo.png";
import nuanceLogoImg from "@assets/images/timeline/nuance-logo.png";
import gokooLogoImg from "@assets/images/timeline/gokoo-logo.png"

const workTimelineListData = [
  {
    id: 3,
    title: {
      position: "Website Developer",
      company: "Gokoo",
      type: "Contract / Part-Time",
    },
    logo: gokooLogoImg,
    date: "Jul 2023 — Present",
    location: "Remote",
    description:
      "Led the comprehensive design and development of several websites for a varied clientele, both nationally and internationally. \
      This involved tailoring each project to meet specific goals and requirements. \
      Utilizing CMS platforms such as Webflow, Framer, and Shopify, alongside React, \
      I navigated challenges in customization and rendering to ensure the delivery of high-quality design within tight deadlines. \
      Collaborating closely with clients, I provided valuable insights aligned with contemporary web design standards, \
      resulting in the creation of user-friendly and visually dynamic platforms. \
      The successful launch of these platforms culminated in securing their inaugural customer shortly thereafter.",
    tools: ["Framer", "Webflow", "React", "Figma"],
  },
  {
    id: 2,
    title: {
      position: "Front-end Developer",
      company: "Nuance Communications Inc.",
      type: "Internship",
    },
    logo: nuanceLogoImg,
    date: "Jan 2022 — Apr 2022",
    location: "Remote",
    description:
      "Built and customized reusable front-end components, contributed to the UI component library, \
      implemented interactive React components using lifecycle methods and other features, \
      and created a design library using Storybook to match the company's brand colors... \
      thanks to my supportive teams and the fuel provided by caffeine ☕",
    tools: ["React", "Javascript", "Typescript", "Storybook"],
  },
  {
    id: 1,
    title: {
      position: "Mobile Application Developer",
      company: "Sun Life Financial",
      type: "Internship",
    },
    logo: sunLifeLogoImg,
    date: "May 2021 — Aug 2021",
    location: "Remote",
    description:
      'Assisted multiple POC developments, improved "my Sun Life" mobile App\'s UI/UX, \
      experimented with Carplay support, engaged in R&D on mobile security and mobile API as a part of digital strategy, \
      conducted Adaptive Authentication research, and ensured code reliability on "my Sun Life" mobile app \
      using the Espresso☕ testing framework.',
    tools: ["Java", "Kotlin", "Swift", "Android SDK", "Espresso"],
  },
  {
    id: 0,
    title: {
      position: "Android Application Developer",
      company: "Sun Life Financial",
      type: "Internship",
    },
    logo: sunLifeLogoImg,
    date: "Sep 2020 — Dec 2020",
    location: "Remote",
    description:
      'Worked with the production team to build new UI features on the "Lumino Health" mobile application, \
      led two POC developments on the "my Sun Life" mobile application, \
      and performed UI testing using the Espresso testing framework.',
    tools: ["Java", "Kotlin", "Android SDK", "Espresso"],
  },
];

export default workTimelineListData;
