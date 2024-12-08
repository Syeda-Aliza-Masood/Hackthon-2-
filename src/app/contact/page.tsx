"use client";
import Image from "next/image"; // Import Image for optimized images

// Make sure the paths are correct for your images
import ShopImage from "@/Pictures/shophero.png"; // Check the path to your image
// Import the BlowHero component if needed (this import is unused in the code)
import BlowHero from "@/components/ShopBlowHero"; 

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
          <h2 className="text-3xl font-bold text-black font-poppins">Contact</h2>
          <p className="mt-2 text-black">Home {">"} Contact</p>
        </div>
      </div>

      {/* New Div with Size 1440px x 1144px */}
      <div className="w-full max-w-screen-xl mx-auto bg-white px-4 sm:px-8 md:px-16 lg:px-20">
        {/* Content goes here */}
        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold font-poppins">Get In Touch With Us</h1>
          <p className="mt-2 text-gray-600 text-sm max-w-2xl mx-auto">
            For more information about our products and services, please feel free to drop us
            an email. Our staff will always be there to help you out. Do not hesitate!
          </p>
        </div>

        {/* Contact Section - Flexbox with 2 centered columns */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 py-12">
          {/* Left Column */}
          <div className="w-full sm:w-1/2 max-w-md space-y-6">
            {/* Contact details */}
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

          {/* Right Column */}
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

        {/* Full-Width Image Below Pagination */}
        <div className="mt-8">
          <Image
            src="/Frame.png" // Ensure the image path is correct in the public folder
            alt="Additional Banner"
            width={1440}
            height={270}
            className="w-[1440]" // Make the image span the full width of the screen
          />
        </div>
      </div>
    </div>
  );
}
