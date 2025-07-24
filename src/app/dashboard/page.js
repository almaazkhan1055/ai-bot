"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { tokenCheck } from "../utils/tokenCheck";
import { logout } from "../utils/logout";
import Wrapper from "../components/contentWrapper";
import Navbar from "../components/navbar";
import Prompt from "../components/prompt";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      const tokenExists = await tokenCheck();

      if (!tokenExists) {
        router.replace("/");
      } else {
        setTokenValid(true);
        setLoading(false);
      }
    };

    verifyToken();
  }, [router]);

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    router.replace("/");
  };

  if (!tokenValid) return null;

  return (
    <div className="flex">
      <Sidebar />
      <Wrapper>
        <Navbar handleLogout={handleLogout} loading />
        <div className="min-h-full flex flex-col md:gap-10 items-center justify-center">
          <h1 className="text-3xl font-semibold">ChatGPT</h1>
          <Prompt />
        </div>
      </Wrapper>
    </div>
  );
};

export default Dashboard;
