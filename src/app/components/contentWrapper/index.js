"use client";

import React, { useEffect, useState } from "react";
import AuthModal from "../authModal";

const Wrapper = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      setShowModal(true);
    }
  }, []);

  return (
    <>
      <div
        className={`p-4 h-screen relative ${showModal ? "blur-[2px]" : ""}`}
        onClick={() => setShowModal(false)}
      >
        {children}
      </div>
      {showModal && <AuthModal setShowModal={setShowModal} />}
    </>
  );
};

export default Wrapper;
