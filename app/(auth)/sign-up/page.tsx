"use client";

import React from "react";

import AuthForm from "@/components/forms/AuthForm";

import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {

  const handleSignIn = async (data: unknown) => {
  console.log(data);
  
  // Ти маєш повернути результат успіху чи помилки
  return { success: true }; 
}
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={handleSignIn}
    />
  );
};

export default SignUp;