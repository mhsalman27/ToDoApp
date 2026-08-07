import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="mx-26">
      <div className="flex justify-between  w-full h-screen p-8">
        <div className=" mt-[8%] p-5  w-1/2">
          <div className="">
            <h1 className="text-5xl   font-sans ">
              Every Great Day Starts with a <br />
              <span className="mt-2 text-olive-500 pt-2 ">Plan ..!</span>
            </h1>
            <p className="mt-10 text-lg leading-8 max-w-2xl font-normal">
              Organize your tasks, track your progress, and stay in control of
              your day. A simple workspace designed to help you focus on what
              truly matters.
            </p>
          </div>
          <div className="mt-10  flex gap-8 items-center">
            <Link
              to="/register"
              className="px-5 py-3 bg-black text-white rounded-xl text-center w-[30%]"
            >
              <button>Register Now !</button>
            </Link>
            <Link
              to="/login"
              className="px-5 py-3 bg-black text-white rounded-xl text-center w-[30%]"
            >
              <button>Login !</button>
            </Link>
          </div>
        </div>
        <div>Div2</div>
      </div>
    </div>
  );
};

export default LandingPage;
