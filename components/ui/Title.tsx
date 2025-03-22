import React from "react";

interface TitleProps {
  title: string;
  classname?: string;
}

const Title = (props: TitleProps) => {
  return (
    <div className={props.classname}>
      <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">
        {props.title}
      </h1>
      <div className="w-30 h-2 bg-green-500 rounded-full -rotate-3"></div>
      <div className="w-30 h-2 bg-indigo-500 rounded-full x-2"></div>
    </div>
  );
};

export default Title;
