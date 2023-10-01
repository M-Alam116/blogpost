"use client";
import React, { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Waveform } from "@uiball/loaders";

const LoginPage = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return (
      <div className="flex justify-center items-center">
        <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
      </div>
    );
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[20px] py-[50px]">
      <h1 className="text-[24px] font-[600]">
        {success ? success : "Welcome Back"}
      </h1>
      <h2 className="text-[16px] font-[500]">
        Please sign in to see the dashboard.
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-[400px] w-full flex flex-col gap-[20px]"
      >
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
          Login
        </button>
        {error && error}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className="max-w-[400px] w-full p-[12px] cursor-pointer bg-[#444] border-none rounded-[5px] text-[14px] text-[#eee] font-[600]"
      >
        Login with Google
      </button>
      <span className="text-[18px] font-[600]">- OR -</span>
      <Link
        className="text-[16px] font-[500] hover:text-[#53c28b]"
        href="/dashboard/register"
      >
        Create new account
      </Link>
      {/* <button
        onClick={() => {
          signIn("github");
        }}
        className="max-w-[400px] w-full p-[12px] cursor-pointer bg-[#444] border-none rounded-[5px] text-[14px] text-[#eee] font-[600]"
      >
        Login with Github
      </button> */}
    </div>
  );
};

export default LoginPage;
