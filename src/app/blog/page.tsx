"use client";
import Image from "next/image"; // Import Image for optimized images
import ShopImage from "@/Pictures/shophero.png"; // Import the shop hero image (check the path)
import Subfooter from "@/components/Subfooter";
import { IoIosArrowForward } from "react-icons/io";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <Image src={ShopImage} alt="Contact Hero" layout="responsive" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h3 className="font-bold text-[1.5rem] text-black">Blog</h3>
          <div className="flex items-center space-x-2 text-Black">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Blog</h3>
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="flex justify-center px-[10%] py-8 bg-white">
        {/* Left Section (65%) with Image */}
        <div className="w-[65%] bg-white p-4 shadow-lg">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/blog.png" // Replace with the correct image path
              alt="Blog Left Image"
              width={820} // Set an appropriate width for the image
              height={0} // Automatically calculate height based on the image's aspect ratio
              className="w-full h-auto object-cover rounded-md" // Automatically adjust height to maintain aspect ratio
            />
          </div>
        </div>

        {/* Right Section (25%) */}
        <div className="w-[25%] bg-white p-4 ml-8 ">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categories Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Craft
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Handmade
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Interior
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Wood
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
            <ul className="space-y-4">
              {[
                "post1.png",
                "post2.png",
                "post3.png",
                "post4.png",
                "post5.png",
              ].map((post, index) => (
                <li
                  key={index}
                  className="relative overflow-hidden rounded-md group"
                >
                  <Image
                    src={`/${post}`} // Replace with the correct image path
                    alt={`Post ${index + 1}`}
                    width={211}
                    height={80}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Add margin-top for spacing above Subfooter */}
      <div className="mt-12">
        <Subfooter />
      </div>
    </div>
  );
}
