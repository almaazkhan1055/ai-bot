"use client";

import React, { useEffect, useState } from "react";
import AuthModal from "../authModal";
import { tokenCheck } from "@/app/utils/tokenCheck";

const Wrapper = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const verifyToken = async () => {
    const tokenExists = await tokenCheck();
    if (!tokenExists) {
      setShowModal(true);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <>
      <div
        className={`w-full h-screen relative ${showModal ? "blur-[2px]" : ""}`}
        onClick={() => setShowModal(false)}
      >
        {children}
      </div>
      {showModal && <AuthModal setShowModal={setShowModal} />}
    </>
  );
};

export default Wrapper;
