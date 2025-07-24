"use client";
import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import LoginForm from "../components/loginForm";
import { useRouter } from "next/navigation";
import { tokenCheck } from "../utils/tokenCheck";

export const dynamic = "force-dynamic";

const Login = () => {
  const router = useRouter();

  const verifyToken = async () => {
    const tokenExists = await tokenCheck();
    if (tokenExists) {
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <div className="p-4 min-h-screen flex flex-col gap-10">
      <Navbar />
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
