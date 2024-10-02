"use client";

import { Download } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        // Scrolling up
        setShowHeader(true);
      } else {
        // Scrolling down
        setShowHeader(false);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-5 left-14 right-14 z-30 transition-transform duration-300 ease-in-out ${
        showHeader
          ? "transform translate-y-0"
          : "transform -translate-y-[calc(100%+1.25rem)]"
      }`}
    >
      <div className="w-full bg-gray-800 rounded-md flex flex-wrap pr-8">
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <h1 className="text-4xl font-bold tracking-tighter text-white md:text-4xl lg:text-3xl">
              WEART
            </h1>
          </a>
        </div>
        <div className="md:flex flex-grow items-center">
          <nav className="flex-col flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  className="inline-flex items-center px-4 py-2 mt-2 font-medium text-gray-900 transition duration-500 ease-in-out transform rounded-lg text-md md:mt-0 md:ml-4 bg-white hover:bg-gray-200"
                  href="/"
                >
                  <span className="justify-center">Download</span>
                  <Download className="w-5 h-5 ml-2" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
