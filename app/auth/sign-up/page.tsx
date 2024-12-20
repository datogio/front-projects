"use client";

import { signUp } from "@/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (
      !inputs.email ||
      !inputs.confirmEmail ||
      !inputs.password ||
      !inputs.confirmPassword
    ) {
      return alert("All fields are requreid");
    }
    if (inputs.email !== inputs.confirmEmail) {
      return alert("Emails don't match");
    }
    if (inputs.password !== inputs.confirmPassword) {
      return alert("Passwords don't match");
    }

    signUp(inputs.email, inputs.password)
      .then(() => {
        router.push("/");
      })
      .catch(() => {
        alert("User already registered");
      })
      .finally(() => {
        setInputs({
          email: "",
          confirmEmail: "",
          password: "",
          confirmPassword: "",
        });
      });
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className="bg-gray-800 w-[30vw] flex flex-col items-center p-10 rounded-xl gap-10">
      <h1 className="text-5xl">Sign Up</h1>
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
          type="email"
          name="confirmEmail"
          placeholder="Enter your email"
          value={inputs.confirmEmail}
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
        <input
          className="p-2 rounded-lg text-lg text-black outline-none"
          autoComplete="off"
          type="password"
          name="confirmPassword"
          placeholder="Enter your password"
          value={inputs.confirmPassword}
          onChange={handleInputChange}
        />
        <button className="bg-black p-3 rounded-lg text-lg font-bold transition hover:scale-105">
          Sign Up
        </button>
        <div className="flex justify-between">
          <span>{"Already have an account?"}</span>
          <Link
            href="/auth/sign-in"
            className="cursor-pointer transition hover:text-gray-300"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
