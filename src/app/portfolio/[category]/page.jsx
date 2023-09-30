import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation.js";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const PortfolioCategoryPage = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className="">
      <h1 className="text-[18px] font-[700] text-[#53c28b] uppercase text-center">
        {params.category}
      </h1>

      {data.map((item) => (
        <div className="item flex flex-col md:flex-row justify-between items-center gap-[50px] mt-[50px] mb-[20px] md:mb-[100px]" key={item.id}>
          <div className="w-full flex flex-col gap-[10px]">
            <h1 className="text-[28px] font-[700] text">{item.title}</h1>
            <p className="text-[16px] font-[500]">{item.desc}</p>
            <button className="bg-btnBg w-fit text-white px-[20px] py-[10px] rounded-[5px]">
              See More
            </button>
          </div>
          <div className="relative w-full flex justify-center rounded-[10px] group overflow-hidden">
            <Image
              className="rounded-[10px] group-hover:scale-105 transition-all duration-500"
              width={350}
              height={350}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCategoryPage;
