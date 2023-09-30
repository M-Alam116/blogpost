import Image from "next/image";
import Link from "next/link";
const AboutPage = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="relative w-[100%] h-[300px]">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className="object-cover"
        />
        <div className="absolute bottom-[20px] sm:left-[20px] bg-[#53c28b] p-[5px] text-white rounded-md">
          <h1 className="text-[24px] font-[700]">Digital Storytellers</h1>
          <h2 className="text-[20px] font-[600]">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem]">
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[26px] font-[700]">Who Are We?</h1>
          <p className="text-[16px] font-[500] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[26px] font-[700]">What We Do?</h1>
          <p className="text-[16px] font-[500] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Link href="/contact">
            <button className="bg-[#53c28b] w-fit px-[15px] py-[10px] rounded-[5px] text-white text-[14px] font-[500]">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
