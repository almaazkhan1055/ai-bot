"use client";
import Navbar from "./components/navbar";
import Wrapper from "./components/contentWrapper";
import Prompt from "./components/prompt";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { tokenCheck } from "./utils/tokenCheck";

const Home = () => {
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
    <Wrapper>
      <Navbar />
      <div className="min-h-full flex flex-col md:gap-10 items-center justify-center">
        <h1 className="text-3xl font-semibold">ChatGPT</h1>
        <Prompt />
      </div>
    </Wrapper>
  );
};

export default Home;
