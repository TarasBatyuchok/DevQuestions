import { ReactNode } from "react";
import FloatingShape from "@/components/FloatingShape/FloatingShape";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat dark:bg-auth-dark">
      <div className="blob-container" aria-hidden="true">
        <FloatingShape size="w-64 h-64" top="-5%" left="10%" delay={0} />
        <FloatingShape size="w-48 h-48" top="70%" left="80%" delay={5} />
        <FloatingShape size="w-32 h-32" top="40%" left="10%" delay={10} />
      </div>
      {children}
    </main>
  );
};

export default AuthLayout;
