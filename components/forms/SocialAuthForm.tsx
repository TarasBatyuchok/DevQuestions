"use client";

import Image from "next/image";
import { Button } from "../ui/button";

const SocialAuthForm = () => {
const buttonContainer = "group relative flex-1 min-h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none transition-all border-none bg-transparent shadow-none";
const innerClass = "background-dark400_light900 body-medium text-dark200_light800 relative flex h-full w-full items-center justify-center gap-3 rounded-[14px] px-4 py-3.5 z-10 border border-white/5";

return (
  <div className="flex w-full gap-4">
<Button variant="ghost" className={buttonContainer}>
   <div className="absolute bottom-[-10px] right-[-250%] h-[70%] w-[300%] rounded-full bg-orange-beam opacity-0 transition-opacity duration-500 group-hover:animate-star-movement-bottom group-hover:opacity-90 z-0" />
      <div className="absolute top-[-10px] left-[-250%] h-[70%] w-[300%] rounded-full bg-orange-beam opacity-0 transition-opacity duration-500 group-hover:animate-star-movement-top group-hover:opacity-90 z-0" />
  
  <span className={innerClass}>
    <Image src="/icons/github.svg" alt="Github" width={20} height={20} className="invert-colors" />
    <span>Log in with GitHub</span>
  </span>
</Button>

    <Button variant="ghost" className={buttonContainer}>
      <div className="absolute bottom-[-10px] right-[-250%] h-[70%] w-[300%] rounded-full bg-orange-beam opacity-0 transition-opacity duration-500 group-hover:animate-star-movement-bottom group-hover:opacity-90 z-0" />
      <div className="absolute top-[-10px] left-[-250%] h-[70%] w-[300%] rounded-full bg-orange-beam opacity-0 transition-opacity duration-500 group-hover:animate-star-movement-top group-hover:opacity-90 z-0" />
      
      <span className={innerClass}>
        <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
        <span>Log in with Google</span>
      </span>
    </Button>
  </div>
);
};

export default SocialAuthForm;
