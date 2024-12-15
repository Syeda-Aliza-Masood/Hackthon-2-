import Image from "next/image"; // Import Image for optimized images
import ShopImage from "@/Pictures/shophero.png"; // Import the shop hero image (check the path)
import Subfooter from "@/components/Subfooter";
import { Star, Heart, Search, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

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
          <h2 className="text-3xl font-bold text-black font-poppins">Product Comparison</h2>
          <p className="mt-2 text-black">Home {">"} Product Comparison</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Go to Product page for more Products
            </Button>
            <Button variant="link" size="sm">View More</Button>
          </div>
          <Button variant="secondary">Add A Product</Button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Product Headers */}
          <div className="col-span-1" />
          <div className="text-center space-y-4">
            <Image
              src="/sofa5.png"
              alt="Asgaard Sofa"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="font-semibold">Asgaard Sofa</h3>
            <p className="text-lg font-medium">Rs. 250,000.00</p>
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="text-center space-y-4">
            <Image
              src="/sofa7.png"
              alt="Outdoor Sofa Set"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="font-semibold">Outdoor Sofa Set</h3>
            <p className="text-lg font-medium">Rs. 224,000.00</p>
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="col-span-3">
            <div className="border rounded-lg">
              {/* General Section */}
              <div className="border-b p-4 bg-muted/30">
                <h2 className="font-semibold">General</h2>
              </div>

              {[ 
                {
                  label: 'Sales Package',
                  value1: '1 sectional sofa',
                  value2: '1 Three Seater, 2 Single Seater'
                },
                {
                  label: 'Model Number',
                  value1: 'DTCELR8BKBGE',
                  value2: 'DTCELR8BKBGE'
                },
                {
                  label: 'Secondary Material',
                  value1: 'Solid Wood',
                  value2: 'Solid Wood'
                },
                {
                  label: 'Configuration',
                  value1: 'L-shaped',
                  value2: 'L-shaped'
                },
                {
                  label: 'Upholstery Material',
                  value1: 'Fabric + Cotton',
                  value2: 'Fabric + Cotton'
                },
                {
                  label: 'Upholstery Color',
                  value1: 'Bright Grey & Lion',
                  value2: 'Bright Grey & Lion'
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-3 border-b last:border-b-0">
                  <div className="p-4 font-medium">{item.label}</div>
                  <div className="p-4 text-center border-x">{item.value1}</div>
                  <div className="p-4 text-center">{item.value2}</div>
                </div>
              ))}
            </div>

            {/* Dimensions Section */}
            <div className="border rounded-lg mt-8">
              <div className="border-b p-4 bg-muted/30">
                <h2 className="font-semibold">Dimensions</h2>
              </div>

              {[ 
                {
                  label: 'Width',
                  value1: '265.32 cm',
                  value2: '265.32 cm'
                },
                {
                  label: 'Height',
                  value1: '76 cm',
                  value2: '76 cm'
                },
                {
                  label: 'Depth',
                  value1: '167.76 cm',
                  value2: '167.76 cm'
                },
                {
                  label: 'Weight',
                  value1: '45 kg',
                  value2: '65 kg'
                },
                {
                  label: 'Seat Height',
                  value1: '41.52 cm',
                  value2: '41.52 cm'
                },
                {
                  label: 'Leg Height',
                  value1: '5.46 cm',
                  value2: '5.46 cm'
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-3 border-b last:border-b-0">
                  <div className="p-4 font-medium">{item.label}</div>
                  <div className="p-4 text-center border-x">{item.value1}</div>
                  <div className="p-4 text-center">{item.value2}</div>
                </div>
              ))}
            </div>

            {/* Warranty Section */}
            <div className="border rounded-lg mt-8">
              <div className="border-b p-4 bg-muted/30">
                <h2 className="font-semibold">Warranty</h2>
              </div>

              {[ 
                {
                  label: 'Warranty Summary',
                  value1: '1 Year Manufacturing Warranty',
                  value2: '1.5 Year Manufacturing Warranty'
                },
                {
                  label: 'Warranty Service Type',
                  value1: 'For Warranty Claims or Any Product Related Issues Please Email at care@furniro.com',
                  value2: 'For Warranty Claims or Any Product Related Issues Please Email at care@furniro.com'
                },
                {
                  label: 'Covered in Warranty',
                  value1: 'Warranty Against Manufacturing Defect',
                  value2: 'Warranty of the product is limited to manufacturing defects only'
                },
                {
                  label: 'Not Covered in Warranty',
                  value1: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage',
                  value2: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage'
                },
                {
                  label: 'Domestic Warranty',
                  value1: '1 Year',
                  value2: '3 Months'
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-3 border-b last:border-b-0">
                  <div className="p-4 font-medium">{item.label}</div>
                  <div className="p-4 text-center border-x">{item.value1}</div>
                  <div className="p-4 text-center">{item.value2}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart Buttons */}
          <div className="col-span-1" />
          <div className="text-center">
            <Button className="w-full" variant="secondary">Add To Cart</Button>
          </div>
        </div>
      </main>

      {/* Add margin-top for spacing above Subfooter */}
      <div className="mt-12">
        <Subfooter />
      </div>
    </div>
  );
}
