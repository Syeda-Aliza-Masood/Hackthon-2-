"use client";
import Image from "next/image"; // Import Image for optimized images
import ShopImage from "@/Pictures/shophero.png"; // Import the shop hero image (check the path)

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
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
          <h1 className="text-3xl font-bold font-poppins">Get In Touch With Us</h1>
          <p className="mt-2 text-gray-600 text-sm max-w-2xl mx-auto">
            For more information about our products and services, please feel free to drop us
            an email. Our staff will always be there to help you out. Do not hesitate!
          </p>
        </div>

        {/* Contact Details and Form */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 py-12">
          {/* Left Column: Contact Details */}
          <div className="w-full sm:w-1/2 max-w-md space-y-6">
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>236 5th SE Avenue</p>
              <p>New York, NY 10000</p>
              <p>United States</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
            <div>
              <h3 className="font-semibold">Working Hours</h3>
              <p>Monday - Friday: 9:00 - 22:00</p>
              <p>Saturday - Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full sm:w-1/2 max-w-md space-y-6">
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-semibold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-semibold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter the subject"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-semibold">Message</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 h-32"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#b88e2f] text-white text-sm py-2 px-6 rounded-md hover:bg-[#9a7734]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Image Section */}
      <div className="mt-8">
        <Image
          src="/Frame.png"
          alt="Additional Banner"
          width={1440}
          height={270}
          className="w-full"
        />
      </div>
    </div>
  );
}
