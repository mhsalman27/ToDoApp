import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./../pages/Home/HomePage";
import Signup from "./../pages/Auth/Signup";
import LandingPage from "./../pages/Landing/LandingPage";
import Login from "./../pages/Auth/Login";
import ToDoList from "./../pages/Todo/ToDoList";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/register", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <HomePage /> },
  { path: "/todolist", element: <ToDoList /> },
]);

export default router;
