import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] py-[50px]">
      <div className="flex flex-col justify-center gap-[2rem]">
        <h1 className="title leading-none text-[55px] lg:text-[72px] font-[700]">
          Better design for your digital products.
        </h1>
        <p className="text-[20px] lg:text-[24px] font-[400] leading-7">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Link href="/portfolio">
          <button className="p-[12px] text-[14px] font-[500] rounded-[5px] border-none text-white w-fit bg-[#53c28b] cursor-pointer">
            See Our Works
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/hero.png" width={370} height={300} alt="" />
      </div>
    </div>
  );
}
