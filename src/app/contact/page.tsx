"use client";
<<<<<<< HEAD
import Image from "next/image";
import ShopImage from "@/Pictures/shophero.png"; // Ensure this is in the public directory
import { IoIosArrowForward } from "react-icons/io";
import Subfooter from "@/components/Subfooter"; // Confirm this component exists
=======
import Image from "next/image"; // Import Image for optimized images
import ShopImage from "@/Pictures/shophero.png"; // Import the shop hero image (check the path)
>>>>>>> 601b600d9ce0297b408109dab650eb12e282045b

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
<<<<<<< HEAD
        <Image src={ShopImage} alt="Contact Hero" layout="responsive" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h3 className="font-bold text-[1.5rem] text-black">Contact</h3>
          <div className="flex items-center space-x-2 text-Black">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Contact</h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-screen-xl mx-auto bg-white px-6 sm:px-12 lg:px-20">
        {/* Title Section */}
        <div className="text-center mt-12">
=======
        <Image
          src={ShopImage}
          alt="Shop Hero"
          width={1440}
          height={400}
          className="w-full h-auto"
          priority
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center px-4">
          <h2 className="text-3xl font-bold text-black font-poppins">Blog</h2>
          <p className="mt-2 text-black">Home {">"} Blog</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-screen-xl mx-auto bg-white px-4 sm:px-8 md:px-16 lg:px-20">
        {/* Introduction */}
        <div className="text-center mt-6">
>>>>>>> 601b600d9ce0297b408109dab650eb12e282045b
          <h1 className="text-3xl font-bold font-poppins">Get In Touch With Us</h1>
          <p className="mt-4 text-gray-600 text-sm max-w-2xl mx-auto">
            For more information about our products and services, please feel free to drop us
            an email. Our staff will always be there to help you out. Do not hesitate!
          </p>
        </div>

<<<<<<< HEAD
        {/* Contact Information and Form */}
        <div className="flex flex-col sm:flex-row justify-between gap-12 py-12">
          {/* Contact Details */}
=======
        {/* Contact Details and Form */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 py-12">
          {/* Left Column: Contact Details */}
>>>>>>> 601b600d9ce0297b408109dab650eb12e282045b
          <div className="w-full sm:w-1/2 max-w-md space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p>236 5th SE Avenue</p>
              <p>New York, NY 10000</p>
              <p>United States</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 9:00 AM - 9:00 PM</p>
            </div>
          </div>

<<<<<<< HEAD
          {/* Contact Form */}
          <div className="w-full sm:w-1/2 max-w-md">
            <form className="space-y-6">
=======
          {/* Right Column: Contact Form */}
          <div className="w-full sm:w-1/2 max-w-md space-y-6">
            <form className="space-y-4">
              {/* Name */}
>>>>>>> 601b600d9ce0297b408109dab650eb12e282045b
              <div>
                <label htmlFor="name" className="block font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300 h-32"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#b88e2f] text-white py-3 px-6 rounded-lg hover:bg-[#9a7734] transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Subfooter Section */}
      <div className="w-full py-8 bg-gray-100">
        <Subfooter />
=======
      {/* Footer Image Section */}
      <div className="mt-8">
        <Image
          src="/Frame.png"
          alt="Additional Banner"
          width={1440}
          height={270}
          className="w-full"
        />
>>>>>>> 601b600d9ce0297b408109dab650eb12e282045b
      </div>
    </div>
  );
}
