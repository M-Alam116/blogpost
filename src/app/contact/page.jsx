import Image from "next/image";

export const metadata = {
  title: "M Alam Contact",
  description: "This is contact page.",
};
const ContactPage = () => {
  return (
    <div className="py-[50px]">
      <h1 className="text-[50px] font-[500] mb-[50px] text-center leading-[50px]">
        Lets Keep in Touch
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px]">
        <div className="relative w-full h-[450px] hidden md:flex">
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className="object-contain animate"
          />
        </div>
        <form className="flex w-full flex-col gap-[20px] mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-[12px] bg-transparent outline-none text-[#bbb] border-[1.5px] border-[#bbb] text-[18px] font-[500] rounded-[5px]"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="p-[12px] bg-transparent outline-none text-[#bbb] border-[1.5px] border-[#bbb] text-[18px] font-[500] rounded-[5px]"
          />
          <textarea
            className="p-[12px] bg-transparent outline-none text-[#bbb] border-[1.5px] border-[#bbb] text-[18px] font-[500] rounded-[5px] resize-none"
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <button className="w-fit text-white px-[30px] py-[10px] font-[500] text-[14px] bg-btnBg rounded-[5px]">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
