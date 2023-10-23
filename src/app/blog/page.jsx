import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "M Alam Blog",
  description: "This is blog page.",
};
async function getData() {
  const res = await fetch(`${process.env.HOST}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPage = async () => {
  const data = await getData();
  return (
    <div className="pt-[30px] pb-[50px] flex flex-col gap-[3rem]">
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className="grid grid-cols-1 md:grid-cols-4 items-center gap-[1rem] md:gap-[2rem]"
          key={item._id}
        >
          <div className="md:col-span-1 flex justify-center">
            <Image
              src={item.img}
              alt=""
              width={300}
              height={300}
              className="w-[250] h-[180px]"
            />
          </div>
          <div className="md:col-span-3 flex flex-col gap-[10px]">
            <h1 className="text-[24px] font-[700] leading-[30px]">
              {item.title}
            </h1>
            <p className="text-[16px] font-[500]">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPage;
