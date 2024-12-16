"use client";

import { useState } from "react"; // Import useState for state management
import Image from "next/image"; // Import Image for optimized images
import ShopImage from "@/Pictures/shophero.png"; // Import the shop hero image (check the path)
import BlowHero from "@/components/ShopBlowHero"; // Import the BlowHero component
import Link from "next/link"; // Import Link for client-side routing
import Subfooter from "@/components/Subfooter"; // Import Subfooter component
import { IoIosArrowForward } from "react-icons/io"; // Import arrow icon

interface Card {
  name: string;
  age: number;
  description: string;
  image: string;
  price: string;
}

const data: Card[] = [
  { name: "Syltherine", price: "Rp 2.500.000", age: 30, image: "1.png", description: "Stylish cafe chair" },
  { name: "Jane Smith", price: "Rp 2.500.000", age: 25, image: "2.png", description: "A creative designer" },
  { name: "Sam Wilson", price: "Rp 2.500.000", age: 28, image: "3.png", description: "Software engineer" },
  { name: "Alex Walker", price: "Rp 2.500.000", age: 35, image: "4.png", description: "Project Manager" },
  { name: "Syltherine", price: "Rp 2.500.000", age: 30, image: "1.png", description: "Stylish cafe chair" },
  { name: "Jane Smith", price: "Rp 2.500.000", age: 25, image: "2.png", description: "A creative designer" },
  { name: "Sam Wilson", price: "Rp 2.500.000", age: 28, image: "3.png", description: "Software engineer" },
  { name: "Alex Walker", price: "Rp 2.500.000", age: 35, image: "4.png", description: "Project Manager" },
  { name: "Syltherine", price: "Rp 2.500.000", age: 30, image: "1.png", description: "Stylish cafe chair" },
  { name: "Jane Smith", price: "Rp 2.500.000", age: 25, image: "2.png", description: "A creative designer" },
  { name: "Sam Wilson", price: "Rp 2.500.000", age: 28, image: "3.png", description: "Software engineer" },
  { name: "Alex Walker", price: "Rp 2.500.000", age: 35, image: "4.png", description: "Project Manager" },
  { name: "Syltherine", price: "Rp 2.500.000", age: 30, image: "1.png", description: "Stylish cafe chair" },
  { name: "Jane Smith", price: "Rp 2.500.000", age: 25, image: "2.png", description: "A creative designer" },
  { name: "Sam Wilson", price: "Rp 2.500.000", age: 28, image: "3.png", description: "Software engineer" },
  { name: "Alex Walker", price: "Rp 2.500.000", age: 35, image: "4.png", description: "Project Manager" },
  { name: "Syltherine", price: "Rp 2.500.000", age: 30, image: "1.png", description: "Stylish cafe chair" },
  { name: "Jane Smith", price: "Rp 2.500.000", age: 25, image: "2.png", description: "A creative designer" },
  { name: "Sam Wilson", price: "Rp 2.500.000", age: 28, image: "3.png", description: "Software engineer" },
  { name: "Alex Walker", price: "Rp 2.500.000", age: 35, image: "4.png", description: "Project Manager" },
  { name: "Syltherine", price: "Rp 2.500.000", age: 30, image: "1.png", description: "Stylish cafe chair" },
  { name: "Jane Smith", price: "Rp 2.500.000", age: 25, image: "2.png", description: "A creative designer" },
  { name: "Sam Wilson", price: "Rp 2.500.000", age: 28, image: "3.png", description: "Software engineer" },
  { name: "Alex Walker", price: "Rp 2.500.000", age: 35, image: "4.png", description: "Project Manager" },
  { name: "Syltherine", price: "Rp 2.500.000", age: 30, image: "1.png", description: "Stylish cafe chair" },
  { name: "Jane Smith", price: "Rp 2.500.000", age: 25, image: "2.png", description: "A creative designer" },
  { name: "Sam Wilson", price: "Rp 2.500.000", age: 28, image: "3.png", description: "Software engineer" },
  { name: "Alex Walker", price: "Rp 2.500.000", age: 35, image: "4.png", description: "Project Manager" },
  // Add more items as needed
];

export default function ShopHero() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const displayedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative">
          <Image src={ShopImage} alt="Shop Hero" layout="responsive" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <h3 className="font-bold text-[1.5rem] text-black">Shop</h3>
            <div className="flex items-center space-x-2 text-black">
              <h3>Home</h3>
              <IoIosArrowForward />
              <h3>Shop</h3>
            </div>
          </div>
        </div>

        <BlowHero />

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {displayedData.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link
                href={{
                  pathname: "/productpage",
                  query: {
                    name: card.name,
                    price: card.price,
                    description: card.description,
                    image: card.image,
                  },
                }}
              >
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                  <Image
                    src={`/${card.image}`}
                    alt={card.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h5 className="font-bold text-lg mb-2">{card.name}</h5>
                <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                <h5 className="font-bold text-lg">{card.price}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-8 mb-12">
          <button
            onClick={goToPrevPage}
            className="px-4 py-2 bg-[#F9F1E7] rounded-md hover:bg-[#B88E2F] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            className="px-4 py-2 bg-[#F9F1E7] rounded-md hover:bg-[#B88E2F] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12">
          <Subfooter />
        </div>
      </div>
    </>
  );
}
