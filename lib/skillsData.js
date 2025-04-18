import CIcon from "@/public/icons/C.svg";
import JavaScriptIcon from "@/public/icons/JavaScript.svg";
import PythonIcon from "@/public/icons/Python.svg";
import CppIcon from "@/public/icons/C++ (CPlusPlus).svg";
import TypescriptIcon from "@/public/icons/TypeScript.svg";
import SqlIcon from "@/public/icons/SQL Developer.svg";
import BashIcon from "@/public/icons/Bash.svg";
console.log(CIcon.src);
export const Data = {
  languages: [
    {
      title: "JavaScript",
      link: JavaScriptIcon.src,
    },
    {
      title: "C",
      link: CIcon.src,
    },
    {
      title: "C++",
      link: CppIcon.src,
    },
    {
      title: "Python",
      link: PythonIcon.src,
    },
    {
      title: "TypeScript",
      link: TypescriptIcon.src,
    },
    {
      title: "SQL",
      link: SqlIcon.src,
    },
    {
      title: "Bash",
      link: BashIcon.src,
    },
  ],
  frameworks: [
    {
      title: "React",
      link: "https://reactjs.org/",
    },
    {
      title: "Next.js",
      link: "https://nextjs.org/",
    },
    {
      title: "Django",
      link: "https://www.djangoproject.com/",
    },
  ],
  tools: [
    {
      title: "Git",
      link: "https://git-scm.com/",
    },
    {
      title: "Webpack",
      link: "https://webpack.js.org/",
    },
    {
      title: "VS Code",
      link: "https://code.visualstudio.com/",
    },
  ],
};
