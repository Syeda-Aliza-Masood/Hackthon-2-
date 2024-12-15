'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { useRouter } from "next/navigation";  // Import useRouter hook
import ShopImage from "@/Pictures/shophero.png";
import Subfooter from "@/components/Subfooter";
import { IoIosArrowForward } from "react-icons/io";

export default function CartPage() {
  const router = useRouter();  // Initialize the router

  const handleCheckout = () => {
    // Trigger checkout process and navigate to the View Orders page
    router.push("/vieworders");
  };

  return (
    <div>
    {/* Hero Section */}
    <div className="relative">
      <Image src={ShopImage} alt="Contact Hero" layout="responsive" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h3 className="font-bold text-[1.5rem] text-black">Cart</h3>
        <div className="flex items-center space-x-2 text-Black">
          <h3>Home</h3>
          <IoIosArrowForward />
          <h3>Cart</h3>
        </div>
      </div>
    </div>

      {/* Cart Content */}
      <div className="container py-12 ">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 bg-[#F9F1E7]">
            <Table>
              <TableHeader>
                <TableRow >
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Subtotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/sofa.png"
                        alt="Product"
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                      <span>Asgaard sofa</span>
                    </div>
                  </TableCell>
                  <TableCell>Rs. 250,000.00</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      defaultValue="1"
                      className="w-20"
                      min="1"
                    />
                  </TableCell>
                  <TableCell>Rs. 250,000.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <div className=" p-6 rounded-lg bg-[#F9F1E7]">
              <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>Rs. 250,000.00</span>
                </div>
              </div>
              {/* Update button to trigger the checkout function */}
              <Button className="w-full" onClick={handleCheckout}>Check Out</Button>
            </div>
          </div>
        </div>
      </div>
      
      <Subfooter />
    </div>
  );
}
