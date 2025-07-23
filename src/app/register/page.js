"use client";
import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import RegisterationForm from "../registerationForm";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div className="p-4 min-h-screen flex flex-col gap-10">
      <Navbar />
      <div className="flex items-center justify-center">
        <RegisterationForm />
      </div>
    </div>
  );
};

export default Register;
