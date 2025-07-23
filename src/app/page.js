"use client";
import Navbar from "./components/navbar";
import Wrapper from "./components/contentWrapper";
import Prompt from "./components/prompt";

const Home = () => {
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
