import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import ShopImage from "@/Pictures/shophero.png";
import Subfooter from "@/components/Subfooter"; // Ensure Subfooter component is correctly imported
import { IoIosArrowForward } from "react-icons/io";

export default function Confirmation() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <Image src={ShopImage} alt="Contact Hero" layout="responsive" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h3 className="font-bold text-[1.5rem] text-black">Confirmation</h3>
          <div className="flex items-center space-x-2 text-Black">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Confirmation</h3>
          </div>
        </div>
      </div>
    
      {/* Confirmation Content */}
      <div className="container py-12 px-6">
        <h3 className="text-2xl font-bold text-center">Thank you for your order!</h3>
        <p className="text-center mt-4 text-lg">Your order has been successfully placed. We will notify you once it's on its way.</p>

        <div className="mt-8">
          {/* You can display order details here */}
          <Table className="mt-6">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Asgaard sofa</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Rs. 250,000.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Action buttons */}
          <div className="mt-6 text-center">
         

            <Link href="/comparison" className="ml-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Comparison</Button>
            </Link>
          </div>
        </div>
      </div>
    
      <Subfooter />
    </div>
  );
}
