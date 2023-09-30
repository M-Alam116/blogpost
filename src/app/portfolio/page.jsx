import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "M Alam Portfolio",
  description: "This is portfolio page.",
};
const PortfolioPage = () => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <h1 className="text-center text-[20px] font-[600]">Choose a gallery</h1>
      <div className="flex flex-wrap gap-[30px] justify-center">
        <Link
          href="/portfolio/illustrations"
          className="border-[2px] border-[#bbb] rounded-[5px] w-[280px] h-[350px] relative bg-cover"
        >
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[10px] text-[24px] font-[700] z-[1] text-[#53c28b]">
            Illustrations
          </span>
          <Image
            src="/illustration.png"
            fill={true}
            alt=""
            className="object-cover"
          />
        </Link>
        <Link
          href="/portfolio/websites"
          className="border-[2px] border-[#bbb] rounded-[5px] w-[280px] h-[350px] relative bg-cover"
        >
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[10px] text-[24px] font-[700] z-[1] text-[#53c28b]">
            Websites
          </span>
          <Image
            src="/websites.jpg"
            fill={true}
            alt=""
            className="object-cover"
          />
        </Link>
        <Link
          href="/portfolio/applications"
          className="border-[2px] border-[#bbb] rounded-[5px] w-[280px] h-[350px] relative bg-cover"
        >
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[10px] text-[24px] font-[700] z-[1] text-[#53c28b]">
            Application
          </span>
          <Image src="/apps.jpg" fill={true} alt="" className="object-cover" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPage;
