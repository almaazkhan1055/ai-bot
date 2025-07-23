"use client";
import React, { useState } from "react";
import Button from "../components/button";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { useRouter } from "next/navigation";

const RegisterationForm = () => {
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
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setFormData({ email: "", password: "" });
      setLoading(false);
      router.push("/login");
    } catch (error) {
      setError(error.message);
      console.log("Error creating user:", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="text-center flex flex-col gap-5">
      <h2 className="text-2xl">Welcome</h2>
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
        Have an account?{" "}
        <Link href={"/login"} className="underline text-green-900">
          Login now
        </Link>
      </p>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default RegisterationForm;
