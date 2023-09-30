import Image from "next/image";
const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="flex flex-wrap justify-between items-center gap-[1rem] py-[20px]">
      <div className="text-[16px] font-[400]">©{date} M. Alam. All rights reserved.</div>
      <div className="flex gap-[15px]">
        <Image src="/1.png" width={30} height={30} alt="" className="cursor-pointer"/>
        <Image src="/2.png" width={30} height={30} alt="" className="cursor-pointer"/>
        <Image src="/3.png" width={30} height={30} alt="" className="cursor-pointer"/>
        <Image src="/4.png" width={30} height={30} alt="" className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Footer;
