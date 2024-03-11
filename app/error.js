"use client";

import { useEffect } from "react";
import { ImSad2 } from "react-icons/im";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid place-content-center h-[90] w-screen gap-4 md:h-screen md:w-full">
      <ImSad2 size={100} color="#FACD66" className="m-auto" />
      <h2 className="text-2xl text-textWhite text-center">
        Something went wrong!
      </h2>
      <p
        className="text-center uppercase text-accentGold font-bold text-[1rem] tracking-wider"
        onClick={() => reset()}
        role="button"
      >
        try again
      </p>
    </div>
  );
}
