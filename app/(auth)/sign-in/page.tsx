"use client";

import React from "react";

import AuthForm from "@/components/forms/AuthForm";

import { SignInSchema } from "@/lib/validations";

const SignIn = () => {
  

    const handleSignIn = async (data: unknown) => {
  console.log(data);
  
  // Ти маєш повернути результат успіху чи помилки
  return { success: true }; 
}
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
     onSubmit={handleSignIn}
    />
  );
};

export default SignIn;