"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      // console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[20px] py-[50px]">
      <h1 className="text-[24px] font-[600]">Create an Account</h1>
      <h2 className="text-[16px] font-[500]">Please sign up to see the dashboard.</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-[400px] w-full flex flex-col gap-[20px]"
      >
        <input
          type="text"
          placeholder="Username"
          required
          className="p-[12px] bg-transparent border-[1.5px] outline-none border-[#bbb] rounded-[5px] text-[18px] font-[600]"
        />
        <input
          type="text"
          placeholder="Email"
          required
          className="p-[12px] bg-transparent border-[1.5px] outline-none border-[#bbb] rounded-[5px] text-[18px] font-[600]"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-[12px] bg-transparent border-[1.5px] outline-none border-[#bbb] rounded-[5px] text-[18px] font-[600]"
        />
        <button className="w-full p-[12px] cursor-pointer bg-btnBg border-none rounded-[5px] text-[14px] text-[#eee] font-[600]">
          Register
        </button>
        {error && <span className="text-[16px] font-[500] text-red-600">Something went wrong!</span>}
      </form>
      <span className="text-[18px] font-[600]">- OR -</span>
      <Link className="text-[16px] font-[500] hover:text-[#53c28b]" href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default RegisterPage;
