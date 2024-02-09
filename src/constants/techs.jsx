import { FaVuejs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

const techs = [
    {
      title: "HTML 5",
      icon: <FaHtml5 />,
      detail:
        "Hypertext Markup Language, used for structuring and presenting content on the World Wide Web.",
    },
    {
      title: "CSS 3",
      icon: <IoLogoCss3 />,
      detail:
        "Cascading Style Sheets, used for describing the look and formatting of a document written in HTML.",
    },
    {
      title: "Sass",
      icon: <SiSass />,
      detail:
        "Preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS)",
    },{
      title: "Tailwind CSS",
      icon: <SiTailwindcss />,
      detail:
        "CSS framework that allows for rapid UI development by providing a set of pre-designed utility classes, enabling developers to build custom designs quickly and efficiently.",
    },{
      title: "React",
      icon: <FaReact />,
      detail:
        "JavaScript library for building user interfaces, particularly single-page applications.",
    },{
      title: "Vue.js",
      icon: <FaVuejs />,
      detail:
        "A progressive JavaScript framework used for building user interfaces, known for its simplicity and flexibility",
    },{
      title: "Next.js",
      icon: <SiNextdotjs />,
      detail:
        "A React framework that enables server-side rendering, automatic code splitting, and simplified routing for building production-ready web applications.",
    },{
      title: "Redux",
      icon: <SiRedux />,
      detail:
        "Predictable state container for JavaScript apps, often used with React.",
    },
    {
      title: "JavaScript",
      icon: <SiJavascript />,
      detail:
        "Programming language that enables interactive web pages and is an essential part of web applications.",
    },
    {
      title: "TypeScript",
      icon: <SiTypescript />,
      detail:
        "TypeScript, a superset of JavaScript that adds static typing abilities to the language.",
    },
    {
      title: "Python",
      icon: <FaPython />,
      detail:
        "high-level programming language known for its simplicity and readability, widely used in various domains such as web development, data science, machine learning, automation, and more.",
    },
    {
      title: "C#",
      icon: <TbBrandCSharp />,
      detail:
        "Programming language widely used for building various types of applications, including desktop, web, mobile, and gaming applications, especially on the .NET platform. C# is known for its simplicity, type safety, and scalability.",
    },
    {
      title: "Node.js",
      icon: <FaNodeJs />,
      detail:
        "A runtime environment that allows execution of JavaScript code outside of a web browser, commonly used for building scalable network applications.",
    },
    {
      title: "Express.js",
      icon: <SiExpress />,
      detail:
        "A web application framework for Node.js, designed for building robust and scalable web applications and APIs with ease.",
    },
    {
      title: "MySQL",
      icon: <SiMysql />,
      detail:
        "A relational database management system known for its performance, reliability, and ease of use, widely used for storing and managing structured data in various applications.",
    },
    {
      title: "MongoDB",
      icon: <BiLogoMongodb />,
      detail:
        "A flexible, scalable, and high-performance NoSQL database that uses a document-oriented data model, ideal for building modern, data-driven applications with ease.",
    },
    
    
  ];

export default techs;