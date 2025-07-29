"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { tokenCheck } from "../utils/tokenCheck";
import { logout } from "../utils/logout";
import Wrapper from "../components/contentWrapper";
import Navbar from "../components/navbar";
import Prompt from "../components/prompt";
import Sidebar from "../components/sidebar";

const Dashboard = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const router = useRouter();
  const params = useParams();

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
    <div className="flex overflow-hidden">
      <Sidebar />
      <Wrapper>
        <Navbar handleLogout={handleLogout} loading />
        <div className="min-h-screen flex flex-col md:gap-10 items-center justify-around p-4">
          {children}
          <Prompt />
        </div>
      </Wrapper>
    </div>
  );
};

export default Dashboard;
