"use client";

import { motion } from "motion/react";
import Title from "./ui/Title";
import { SiGithub, SiVercel } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

const projects = [
  {
    title: "NoteShare",
    description:
      "A modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Amanksh/portfolio",
    live: "https://your-portfolio-url.com",
    image: "/projects/portfolio.png",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with payment integration and admin dashboard",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Amanksh/ecommerce",
    live: "https://ecommerce-demo.com",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates",
    tech: ["React", "Firebase", "Redux"],
    github: "https://github.com/Amanksh/task-manager",
    live: "https://task-manager-demo.com",
    image: "/projects/task-manager.png",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <CardContainer className="inter-var mb-[-100px]">
      <CardBody className="bg-neutral-950 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-400 text-sm max-w-sm mt-2"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={project.github}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            <SiGithub className="w-5 h-5" />
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={project.live}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const Projects = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          title="Projects🚀"
          classname="flex flex-col justify-center items-center mb-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
