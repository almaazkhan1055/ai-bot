"use client";
import React, { useState } from "react";
import Button from "../button";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase.config";
import { useRouter } from "next/navigation";
import { tokenCheck } from "@/app/utils/tokenCheck";

const LoginForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitFormData = async () => {
    const { email, password } = formData;
    try {
      setLoading(true);

      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      const idToken = user.getIdToken().then((res) => res);

      await fetch("/api/sessionLogin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      setFormData({ email: "", password: "" });
      setLoading(false);

      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
      console.log("Error creating user:", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="text-center flex flex-col gap-5">
      <h2 className="text-2xl">Welcome back</h2>
      <div className="text-sm rounded-full border border-gray-500 p-4 w-[320px]">
        <input
          required
          value={formData.email}
          name="email"
          type="email"
          placeholder="Email address"
          className="w-full outline-0"
          onChange={handleFormData}
        />
      </div>
      <div className="text-sm rounded-full border border-gray-500 p-4 w-[320px]">
        <input
          required
          value={formData.password}
          name="password"
          type="password"
          placeholder="Enter password"
          className="w-full outline-0"
          onChange={handleFormData}
        />
      </div>
      <Button
        text={loading ? "...loading" : "continue"}
        bgColor="transparent"
        onClickFunction={handleSubmitFormData}
      />
      <p>
        Don&apos;t have an account?{" "}
        <Link href={"/register"} className="underline text-blue-900">
          register now
        </Link>
      </p>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default LoginForm;
