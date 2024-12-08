"use client";
import Image from "next/image"; // Import Image for optimized images
import ShopImage from "@/Pictures/shophero.png"; // Import the shop hero image (check the path)

export default function Contact() {
  return (
    <div>
      {/* Heading and Line Below the Image */}
      <div className="relative">
        <Image 
          src={ShopImage} 
          alt="Shop Hero" 
          width={1440} 
          height={400} 
          className="w-full h-auto" 
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center px-4">
          <h2 className="text-3xl font-bold text-black font-poppins">Blog</h2>
          <p className="mt-2 text-black">Home {">"} Blog</p>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="flex justify-center px-[10%] py-8 bg-white">
        {/* Left Section (65%) with Image */}
        <div className="w-[65%] bg-white p-4 shadow-lg">
          <div className="relative w-full h-[2490px] overflow-hidden">
            <Image
              src="/blog.png" // Replace with the correct image path
              alt="Blog Left Image"
              width={820} // Set an appropriate width for the image
              height={2490} // Set the height to 2490px
              className="w-full h-auto object-cover rounded-md" // Adjust the image to fit the container
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
              {["post1.png", "post2.png", "post3.png", "post4.png", "post5.png"].map((post, index) => (
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

      {/* Image Below Pagination */}
      <div className="mt-8">
        <Image
          src="/Frame.png" // Ensure the image path is correct in the public folder
          alt="Additional Banner"
          width={1440}
          height={270}
          className="w-full" // Make the image span the full width of the screen
        />
      </div>
    </div>
  );
}
