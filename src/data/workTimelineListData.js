import sunLifeLogoImg from "@assets/images/timeline/sun-life-logo.png";
import nuanceLogoImg from "@assets/images/timeline/nuance-logo.png";
import gokooLogoImg from "@assets/images/timeline/gokoo-logo.png";

const workTimelineListData = [
  {
    id: 3,
    title: {
      position: "Website Developer",
      company: "Gokoo",
      type: "Contract",
    },
    logo: gokooLogoImg,
    date: "Jul 2023 — Present (1 year 1 month)",
    location: "Remote",
    description:
      "Led the design and development of responsive websites using Webflow and Framer, \
      enhanced with custom JavaScript and React for API integration, animations, and dynamic content. \
      Worked for national and international clients across industries like real estate and financial planning, \
      tailoring each project to their goals.",
    tools: ["React", "JavaScript (ES6+)", "Framer", "Webflow", "Figma", "jQuery"],
  },
  {
    id: 2,
    title: {
      position: "Frontend Developer - Enterprise Solutions Team",
      company: "Nuance Communications Inc.",
      type: "Internship",
    },
    logo: nuanceLogoImg,
    date: "Jan 2022 — Apr 2022 (4 months)",
    location: "Remote",
    description:
      "Collaborated with a UI designer to build reusable UI components and design tokens, \
      integrating them into the company’s UI component hub (Storybook) to streamline collaboration and improve the frontend development workflow.",
    tools: ["React (v17)", "Javascript (ES6+)", "Typescript", "Storybook", "material-ui"],
  },
  {
    id: 1,
    title: {
      position: "Mobile Application Developer - R&D Team",
      company: "Sun Life Canada",
      type: "Internship",
    },
    logo: sunLifeLogoImg,
    date: "May 2021 — Aug 2021 (4 months)",
    location: "Remote",
    description:
      'Developed 7+ proof-of-concept projects, including creation and improvement of features in "my Sun Life" mobile App. \
      Worked on cross-platform development for both Android and iOS, while also conducting research on enhancing mobile security, APIs, and architecture. \
      Additionally, performed UI/unit testing for the app using Espresso and JUnit.',
    tools: [
      "Java",
      "Kotlin",
      "Android SDK",
      "Swift",
      "iOS SDK",
      "Espresso",
      "JUnit",
      "XML"
    ],
  },
  {
    id: 0,
    title: {
      position: "Android Application Developer",
      company: "Sun Life Canada",
      type: "Internship",
    },
    logo: sunLifeLogoImg,
    date: "Sep 2020 — Dec 2020 (4 months)",
    location: "Remote",
    description:
      'Worked within the production team to implement new UI features on the "Lumino Health" mobile app. \
      Later, joined the R&D team to develop two proof-of-concept projects for the "My Sun Life" mobile app \
      and conducted UI/unit testing using Espresso and JUnit.',
    tools: ["Java", "Kotlin", "Android SDK", "Espresso", "JUnit", "XML"],
  },
];

export default workTimelineListData;
