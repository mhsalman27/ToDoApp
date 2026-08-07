import React from "react";
import { Form, Link } from "react-router-dom";
import { register } from './../../../node_modules/@vitejs/plugin-react/dist/refresh-runtime';

const Login = () => {

  return (
    <div className=" container w-full h-screen mx-auto flex justify-center items-center ">
      <Form className=" max-w-120 w-full h-[65%] p-7.5 space-y-9 m-8  border-2 border-gray-300 text-center rounded-xl shadow-lg ">
        <div className="w-full mt-6 flex flex-col gap-3">
          <h2 className=" font-semibold tracking-wide text-5xl ">
            Welcome Back
          </h2>
          <p className="text-mauve-500 font-semibold text-[14px]">
            Happy To see again !
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="Email"
              className="flex tracking-wider font-semibold"
            >
              Email <sup className="font-semibold text-xl mt-0.5 ml-0.5">*</sup>
            </label>
            <input
              type="email"
              id="email"
              // value={email}
              placeholder="Enter email"
              className="w-full mt-1.5 h-10 p-3 border-gray-300 border-2 rounded-md tracking-tighter"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Password"
              className="flex tracking-wider font-semibold "
            >
              Password{" "}
              <sup className="font-semibold text-xl mt-0.5 ml-0.5">*</sup>
            </label>
            <input
              type="password"
              id="password"
              // value={password}
              placeholder="Enter password"
              className="w-full mt-1.5 h-10 p-3 border-gray-300 border-2 rounded-md tracking-tighter"
              required
            />
          </div>
          <div className="mt-5">
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-black w-full h-10 rounded-2xl"
              >
                Login
              </button>
            </Link>
            <p>Or </p>
            <Link to='/register'>
              <button
                type="button"
                className="text-white bg-black w-full h-10 rounded-2xl"
              >
                Create New Account
              </button>
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
