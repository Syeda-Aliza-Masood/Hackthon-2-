
"use client"
import { useState } from "react"; // Import useState for state management
import Image from "next/image"; // Import Image for optimized images
import ShopImage from "@/Pictures/shophero.png"; // Import the shop hero image (check the path)
import BlowHero from "@/components/ShopBlowHero"; // Import the BlowHero component

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
  // Add more data if needed
];

export default function ShopHero() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // Number of items per page
  const totalPages = Math.ceil(data.length / itemsPerPage); // Total number of pages

  // Logic for pagination
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Get items for the current page
  const displayedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <div className="shopsect">
        <Image src={ShopImage} alt="Shop" />
        <h3 className="font-bold text-[1.5rem]">Shop</h3>
        <h5 className="shopPara">
        <p className="mt-2 text-black">Home {">"} Contact</p>
        </h5>
      </div>

      <BlowHero />
      <div className="cardsContainer">
        {displayedData.map((card, index) => (
          <div className="card" key={index} style={{ width: "15rem" }}>
            <img
              src={card.image}
              style={{ width: "18rem", height: "18rem" }}
              className="card-img-top"
              alt={card.name}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.name}
              </h5>
              <p className="card-text">{card.description}</p>
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.price}
              </h5>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination flex justify-center space-x-4 mt-4">
        <button
          onClick={goToPrevPage}
          className="px-4 py-2 bg-[#F9F1E7] rounded-md hover:bg-[#B88E2F]"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          className="px-4 py-2 bg-[#F9F1E7] rounded-md hover:bg-[#B88E2F]"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Image Below Pagination */}
      <div className="mt-8">
        <Image
          src="/Frame.png" // Make sure this is the correct path to your image in the public folder
          alt="Additional Banner"
          width={1440}
          height={270}
        />
      </div>
    </>
  );
}
