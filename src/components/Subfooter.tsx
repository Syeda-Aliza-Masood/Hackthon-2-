import { ShoppingCart, Shield, Truck, Headphones } from 'lucide-react'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import ShopImage from "@/Pictures/shophero.png"; // Import the shop hero image (check the path)

export default function Subfooter() { 
  return (
    <div className="border-t">
      <div className="w-full py-12 bg-[#F9F1E7]"> {/* Changed container to w-full for full width */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">High Quality</h3>
            <p className="text-sm text-muted-foreground">Crafted from top materials</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Warranty Protection</h3>
            <p className="text-sm text-muted-foreground">Over 2 years</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Free Shipping</h3>
            <p className="text-sm text-muted-foreground">Order over Rs. 150</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <Headphones className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">24 / 7 Support</h3>
            <p className="text-sm text-muted-foreground">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
