"use client";
import Icon from "@/assets/icons";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSkipped(true);
    }, 20000);

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setIsSkipped(true);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleSkip = () => {
    setIsSkipped(true);
  };

  return (
    <main className="w-screen max-h-dvh h-full overflow-hidden">
      <motion.div initial={{ translateY: "0%" }} animate={isSkipped ? { translateY: "-100%" } : { translateY: "0%" }} transition={{ duration: 1 }} className="h-dvh w-full">
        <div className="w-full h-full flex items-center">
          <div className="max-w-xl w-full p-6 mx-auto">
            <TypeAnimation
              className="font-medium"
              sequence={[
                "Hello there, who are you? It's intriguing to see you here. What brought you to this place, and what purpose do you have in mind? Perhaps something special led you here, or maybe it was simply curiosity. Whatever the reason, I'm really curious to hear your story.",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1.4em", display: "inline-block" }}
            />
            <div className="mt-1 w-full flex justify-end">
              <div className="flex mr-2 cursor-pointer text-gray-400 hover:text-gray-50" onClick={handleSkip}>
                <span>Skip</span>
                <Icon name="caret-right" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ translateY: "0%" }} animate={isSkipped ? { translateY: "-100%" } : { translateY: "0%" }} transition={{ duration: 1 }} className="h-dvh w-full">
        <div className="h-dvh w-full bg-red-500 overflow-x-hidden overflow-y-scroll ">{children}</div>
      </motion.div>
    </main>
  );
};
