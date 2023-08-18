import antiqueRoomImg from "@assets/images/works/antique-room.png";
import foodbookImg from "@assets/images/works/foodbook.jpg";
import gokooImg from "@assets/images/works/gokoo.jpg";

const projectsListData = [
  {
    title: "Gokoo Company Website",
    description:
      "A complete Startup website crafted from scratch, handling everything from design and development to deployment. \
      This website is geared towards helping individuals establish income-generating side hustles. \
      It provides an all-in-one solution that includes designers, developers, and marketers, streamlining the process for clients starting side ventures. \
      Rather than searching for multiple talents, clients can find everything they need in one place. \
      The textual content and <a href='https://wejoy-template.webflow.io/' target='_blank' rel='noopener noreferrer' class='underline'>reference website design</a> \
      were supplied by the Gokoo company to convey their desired atmosphere of the website. \
      Subsequently, I undertook the design and development process to ensure that the website harmoniously aligned with their values.",
    tools: ["Framer", "React", "Figma"],
    category: "Web Development",
    sourceCode: "",
    website: "https://www.gokoo.ca/",
    thumbnails: [gokooImg],
    new: true,
  },
  {
    title: "3D Room Design",
    description:
      'Step into a captivating world of 3D room design, meticulously crafted using \
      <a href="https://spline.design/" target="_blank" rel="noopener noreferrer" class="underline">Spline</a> (3D design software). \
      Immerse yourself in the exquisite details that bring this virtual room to life, showcasing the essence of creative design. \
      While this project may not be directly linked to Web Design and Development, it serves as a vibrant showcase of my unwavering passion for creativity, and my eagerness to master new skills. \
      Explore this mesmerizing 3D room and witness firsthand the seamless blend of artistry and technology.',
    tools: ["Spline"],
    category: "3D Design",
    website:
      "https://my.spline.design/antiqueroomfinaloptimized-180cf5511cd98b73d490caf76f61ad16/",
    thumbnails: [antiqueRoomImg],
  },
  {
    title: "Foodbook",
    description:
      "The award-winning project at ConUHacks V (hackathon), is a web application that identifies dishes from uploaded pictures, providing names and confidence levels. It suggests recipes and ingredients related to the dish, utilizing Google Cloud Vision API and Spoonacular's food API. Within just 24 hours, our team created a fully functional and hosted product, available for use by anyone, anywhere.",
    tools: [
      "Python",
      "Flask",
      "Google Computer Vision API",
      "Spoonacular API",
      "Docker",
      "Bootstrap",
    ],
    category: "Software Development",
    sourceCode: "https://github.com/chihiroanihr/Foodbook",
    website: "https://devpost.com/software/foodbook-124ebm",
    thumbnails: [foodbookImg],
  },
];

export default projectsListData;
