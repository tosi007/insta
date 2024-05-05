"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const login = async () => {
    const res = await fetch("http://localhost:5000/api/auth/createinsta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await res.json();
    console.log(json);
  };

  const [email, setEmail] = useState(""); // Use setEmail instead of setemail
  const [password, setPassword] = useState("");
  return (
    <div className="w-11/12 mt-10 md:w-2/3 lg:w-1/3">
      <img
        className="mx-auto mb-6"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="Instagram Logo"
      />
      <div className="bg-white p-6 ">
        <div className="mb-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none border rounded-md w-full py-2 px-3 bg-[#FAFAFA] leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none border rounded-md w-full py-2 px-3 bg-[#FAFAFA] mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={login}
          className="bg-[#4CB5F9] text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log In
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Forgot your password?{" "}
        <a className="text-blue-500 hover:text-blue-700" href="#">
          Reset it here
        </a>
        .
      </p>
      <p className="mt-4 text-sm text-gray-600">
        Dont have an account?{" "}
        <a className="text-blue-500 hover:text-blue-700" href="#">
          Sign up
        </a>
        .
      </p>
    </div>
  );
}
