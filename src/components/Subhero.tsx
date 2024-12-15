import Image from "next/image";
import Dining from "@/Pictures/dining.png";
import Living from "@/Pictures/living.png";
import Bedroom from "@/Pictures/bedroom.png";

export default function SubHero() {
  return (
    <>
      {/* Section Heading */}
      <div className="text-center mt-10 md:mt-20">
        <h3 className="text-2xl md:text-3xl font-bold text-[#333333]">
          Browse The Range
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-screen-lg mx-auto px-4">
        {/* Dining Section */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={Dining}
            width={282}
            height={200}
            alt="Dining"
            className="rounded-lg shadow-lg"
          />
          <h6 className="text-lg font-semibold mt-4 text-[#333333]">Dining</h6>
        </div>

        {/* Living Section */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={Living}
            width={282}
            height={200}
            alt="Living"
            className="rounded-lg shadow-lg"
          />
          <h6 className="text-lg font-semibold mt-4 text-[#333333]">Living</h6>
        </div>

        {/* Bedroom Section */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={Bedroom}
            width={282}
            height={200}
            alt="Bedroom"
            className="rounded-lg shadow-lg"
          />
          <h6 className="text-lg font-semibold mt-4 text-[#333333]">Bedroom</h6>
        </div>
      </div>
    </>
  );
}
