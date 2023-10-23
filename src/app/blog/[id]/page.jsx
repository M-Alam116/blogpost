import Image from "next/image";
import { notFound } from "next/navigation";
async function getData(id) {
  const res = await fetch(`${process.env.HOST}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPostPage = async ({params}) => {
  const data = await getData(params.id);
  return (
    <div className="flex flex-col gap-[2rem] py-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <div className="w-full flex flex-col gap-[1rem]">
          <h1 className="text-[24px] font-[700] leading-[30px]">
            {data.title}
          </h1>
          <p className="text-[16px] font-[500]">{data.desc}</p>
          <div className="flex items-center gap-[10px]">
            <Image
              src={data.img}
              width={30}
              height={30}
              alt=""
              className="rounded-full w-[30px] h-[30px]"
            />
            <span className="text-[16px] font-[500]">{data.username}</span>
          </div>
        </div>
        <div className="w-full h-[250px] relative">
          <Image src={data.img} fill={true} alt="" className="bg-center" />
        </div>
      </div>
      <div className="">
        <p className="text-[16px] font-[500] text-justify">{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPostPage;
