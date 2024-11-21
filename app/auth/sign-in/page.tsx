"use client";

import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function SignInPage() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!inputs.email || !inputs.password) {
      return alert("Both fields are required");
    }

    alert(`email: ${inputs.email}\npassword: ${inputs.password}`);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className="bg-gray-800 w-[30vw] flex flex-col items-center p-10 rounded-xl gap-10">
      <h1 className="text-5xl">Sign In</h1>
      <form className="w-full flex flex-col gap-5" onSubmit={handleFormSubmit}>
        <input
          className="p-2 rounded-lg text-lg text-black outline-none"
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={inputs.email}
          onChange={handleInputChange}
        />
        <input
          className="p-2 rounded-lg text-lg text-black outline-none"
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={inputs.password}
          onChange={handleInputChange}
        />
        <div>
          <Link
            href="/auth/reset-password"
            className="cursor-pointer transition hover:text-gray-300"
          >
            Forgot password?
          </Link>
        </div>
        <button className="bg-black p-3 rounded-lg text-lg font-bold transition hover:scale-105">
          Sign In
        </button>
        <div className="flex justify-between">
          <span>{"Don't have an account?"}</span>
          <Link
            href="/auth/sign-up"
            className="cursor-pointer transition hover:text-gray-300"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
