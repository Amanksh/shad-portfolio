"use client";
import Title from "./ui/Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Data } from "../lib/skillsData";

const Skills = () => {
  return (
    <div>
      <Title
        title="Skills🔭"
        classname="flex flex-col justify-center items-center"
      />
      <HoverEffect items={Data.languages} />
    </div>
  );
};

export default Skills;
