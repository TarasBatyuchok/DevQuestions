import { ReactNode } from "react";
import Image from "next/image";
import FloatingShape from "@/components/FloatingShape/FloatingShape";
import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-auth-light dark:bg-auth-dark dark:bg-auth-dark flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10">
      <div className="blob-container" aria-hidden="true">
        <FloatingShape size="w-64 h-64" top="-5%" left="10%" delay={0} />
        <FloatingShape size="w-48 h-48" top="70%" left="80%" delay={5} />
        <FloatingShape size="w-32 h-32" top="40%" left="10%" delay={10} />
      </div>
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold font-space-grotesk text-dark100_light900">Join DevQuestion</h1>
            <p className="paragraph-regular text-dark500_light400">To get your questions answered</p>
          </div>
          <Image src="images/site-logo.svg" alt="DevFlow Logo" width={50} height={50} className="object-contain" />
        </div>
        {children}

        <SocialAuthForm />

      </section>
    </main>
  );
};

export default AuthLayout;
