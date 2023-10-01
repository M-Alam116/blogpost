"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DashboardPage = () => {
  //OLD WAY TO FETCH DATA

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json()

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData()
  // }, []);

  const session = useSession();

  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[5rem] py-[50px]">
        <div className="flex flex-col gap-[1rem] order-2 md:order-1">
          <h1 className="text-[22px] font-[700]">Previous Posts</h1>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div
                  className="flex justify-between gap-[1rem] items-center"
                  key={post._id}
                >
                  <div className="flex gap-[20px] items-center">
                    <div className="">
                      <Image
                        src={post.img}
                        alt=""
                        width={150}
                        height={100}
                        className="w-[150px] h-[100px]"
                      />
                    </div>
                    <h2 className="text-[18px] font-[600]">{post.title}</h2>
                  </div>
                  <span
                    className="cursor-pointer text-red-600 text-[18px] font-[700]"
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className="flex flex-col gap-[1rem] order-1 md:order-2" onSubmit={handleSubmit}>
          <h1 className="text-[22px] font-[700]">Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className="p-[10px] bg-transparent border-[1.5px] outline-none border-[#bbb] rounded-[3px] text-[#bbb] text-[18px] font-[500]"
          />
          <input
            type="text"
            placeholder="Desc"
            className="p-[10px] bg-transparent border-[1.5px] outline-none border-[#bbb] rounded-[3px] text-[#bbb] text-[18px] font-[500]"
          />
          <input
            type="text"
            placeholder="Image"
            className="p-[10px] bg-transparent border-[1.5px] outline-none border-[#bbb] rounded-[3px] text-[#bbb] text-[18px] font-[500]"
          />
          <textarea
            placeholder="Content"
            className="p-[10px] bg-transparent border-[1.5px] outline-none border-[#bbb] rounded-[3px] text-[#bbb] text-[18px] font-[500] resize-none"
            cols="30"
            rows="10"
          ></textarea>
          <button className="w-full p-[12px] cursor-pointer bg-btnBg border-none rounded-[5px] text-[14px] text-[#eee] font-[600]">
            Send
          </button>
        </form>
      </div>
    );
  }
};

export default DashboardPage;
