import Image from "next/image";
import Filter from "@/Pictures/filter.png";

export default function BlowHero() {
  return (
    <>
      <div className="showBlowBar w-[100%] h-[4rem] bg-[#F9F1E7] flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 flex justify-center items-center space-x-8">
          {/* Filter and Sort Controls */}
          <div className="flex items-center space-x-4">
            <select className="border rounded-md px-3 py-2 bg-white">
              <option>All Products</option>
              <option>New Arrivals</option>
              <option>Featured</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <select className="border rounded-md px-3 py-2 bg-white">
              <option>Sort by Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
