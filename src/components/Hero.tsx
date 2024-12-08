import Image from "next/image";
import HeroImage from "@/Pictures/Hero.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
          layout="fill"
          objectFit="cover"
          alt="Hero background"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-end min-h-screen bg-black bg-opacity-40">
        <div className="w-full md:w-1/2 p-6 md:p-12 bg-[#FFF3E3] bg-opacity-90">
          <h6 className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-4 text-[#333333]">
            New Arrival
          </h6>
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-[#B88E2F]">
            Discover Our <br /> New Collection
          </h3>
          <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-md text-[#333333]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolore
          </p>
          <button className="bg-[#B88E2F] text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-semibold rounded-md hover:bg-gray-800 transition duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
