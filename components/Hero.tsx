import React from "react";
import ColourfulText from "./ui/colourful-text";
import Link from "next/link";

const Hero = () => {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "I",
    },
    {
      text: "Am",
    },
    {
      text: "Aman 👋🏻",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="">
      <div className="p-10 text-center">
        <h1 className="text-2xl leading-[-3] md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans ">
          Hi I Am{" "}
          <span className=" underline underline-offset-8 decoration-main-blue -rotate-10">
            {""}
            Aman ,
          </span>
          <br /> I'm <ColourfulText text="Software Developer" /> with a
          background in Full stack development, Devops, and{" "}
          <ColourfulText text="Web3" />
        </h1>

        <Link href={"mailto:amankushwaha933@gmail.com"}>
          <button className="relative mt-5 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Contact Me
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
