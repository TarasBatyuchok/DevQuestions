"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "sonner";
import ROUTES from "@/constants/routes";
import { signIn } from "next-auth/react";

const SocialAuthForm = () => {
  const buttonContainer =
    "group relative flex-1 min-h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none transition-all border-none bg-transparent shadow-none";
  const innerClass =
    "background-dark400_light900 body-medium text-dark200_light800 relative flex h-full w-full items-center justify-center gap-3 rounded-[14px] px-4 py-3.5 z-10 border border-white/5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      // throw new Error("Not implemented");
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true,
      });
    } catch (error) {
      toast.error("Sign-in Failed", {
        description: error instanceof Error ? error.message : "An error occurred during sign-in.",
        position: "top-center",
        duration: 3000,
      });
    }
  };
  return (
    <div className="flex w-full gap-4 mt-[40px]">
      <Button variant="ghost" className={buttonContainer} onClick={() => handleSignIn("github")}>
        <div className="bg-orange-beam group-hover:animate-star-movement-bottom absolute right-[-250%] bottom-[-10px] z-0 h-[70%] w-[300%] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
        <div className="bg-orange-beam group-hover:animate-star-movement-top absolute top-[-10px] left-[-250%] z-0 h-[70%] w-[300%] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-90" />

        <span className={innerClass}>
          <Image src="/icons/github.svg" alt="Github" width={20} height={20} className="invert-colors" />
          <span>Log in with GitHub</span>
        </span>
      </Button>

      <Button variant="ghost" className={buttonContainer} onClick={() => handleSignIn("google")}>
        <div className="bg-orange-beam group-hover:animate-star-movement-bottom absolute right-[-250%] bottom-[-10px] z-0 h-[70%] w-[300%] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
        <div className="bg-orange-beam group-hover:animate-star-movement-top absolute top-[-10px] left-[-250%] z-0 h-[70%] w-[300%] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-90" />

        <span className={innerClass}>
          <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
          <span>Log in with Google</span>
        </span>
      </Button>
    </div>
  );
};
export default SocialAuthForm;
