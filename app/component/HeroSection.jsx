import Link from "next/link";
import React from "react";
import { Spotlight } from "../component/ui/Spotlight";
import { Button } from "../component/ui/moving-border";

const HeroSection = () => {
  return (
    <div className="flex flex-col h-auto md:h-[40rem] w-full rounded-md items-center justify-center relative mx-auto overflow-hidden py-40 md:py-0">
         < Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        
     
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical journey today. Whether you are a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
        <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
       
          <Link href={"/courses"}>Explore courses </Link>
      </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
