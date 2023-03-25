import React from "react";

const GetStarted = ({styles}) => {
  return (
    <>
      <a
        href="#"
        className={`py-3 px-6  text-brightRed bg-brightRed rounded-full shadow-md transition hover:opacity-80 hover:shadow-xl ${styles}`}
      >
        Get Started
      </a>
    </>
  );
};

export default GetStarted;
