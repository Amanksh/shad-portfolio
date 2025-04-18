"use client";
import Title from "./ui/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CIcon from "@/public/icons/C.svg"; // Import SVG icons
import JavaScriptIcon from "@/public/icons/JavaScript.svg"; // Example
import PythonIcon from "@/public/icons/Python.svg"; // Example
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { LayoutGrid } from "lucide-react";
import { Data } from "../lib/skillsData";

const Skills = () => {
  return (
    <div>
      <Title
        title="Skills🔭"
        classname="flex flex-col justify-center items-center"
      />
      <div className="mx-auto flex justify-center mt-10">
        <Tabs defaultValue="languages" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          <div className="mt-10">
            <TabsContent value="languages">
              <HoverEffect items={Data.languages} />
            </TabsContent>
            <TabsContent value="frameworks">
              {/* <HoverEffect items={Data.frameworks} /> */}
            </TabsContent>
            <TabsContent value="tools">
              {/* <HoverEffect items={Data.tools} /> */}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Skills;
