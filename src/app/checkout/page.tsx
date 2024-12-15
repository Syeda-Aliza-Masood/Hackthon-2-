"use client"

import { useRouter } from "next/navigation" // Correct import for Next.js 13+
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import ShopImage from "@/Pictures/shophero.png";
import Subfooter from "@/components/Subfooter";
import { IoIosArrowForward } from "react-icons/io";

export default function CheckoutPage() {
  const router = useRouter();  // Correct usage of useRouter

  const handlePlaceOrder = () => {
    // Navigate to confirmation page
    router.push("/confirmation");
  };

  return (
    
    <div>
    {/* Hero Section */}
    <div className="relative">
      <Image src={ShopImage} alt="Contact Hero" layout="responsive" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h3 className="font-bold text-[1.5rem] text-black">Checkout</h3>
        <div className="flex items-center space-x-2 text-Black">
          <h3>Home</h3>
          <IoIosArrowForward />
          <h3>Checkout</h3>
        </div>
      </div>
    </div>
  
        {/* Checkout Content */}
        <div className="container py-12 px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Billing Details */}
            <div className="space-y-6">
              <div className="border-2 border- p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-6">Billing details</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name (Optional)</Label>
                    <Input id="companyName" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country / Region</Label>
                    <Select defaultValue="Pakistan">
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                        <SelectItem value="Pakistan">Pakistan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="streetAddress">Street address</Label>
                    <Input id="streetAddress" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="townCity">Town / City</Label>
                    <Input id="townCity" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="province">Province</Label>
                    <Select defaultValue="western">
                      <SelectTrigger>
                        <SelectValue placeholder="Select province" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="western">Western Province</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP code</Label>
                    <Input id="zipCode" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional information</Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Notes about your order, e.g. special notes for delivery"
                    />
                  </div>
                </form>
              </div>
            </div>
  
            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">Product</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span>Asgaard sofa</span>
                      <span className="text-muted-foreground">x 1</span>
                    </div>
                    <span>Rs. 250,000.00</span>
                  </div>
                  <div className="flex justify-between border-t pt-4">
                    <span>Subtotal</span>
                    <span>Rs. 250,000.00</span>
                  </div>
                  <div className="flex justify-between border-t pt-4 font-bold">
                    <span>Total</span>
                    <span className="text-yellow-600">Rs. 250,000.00</span>
                  </div>
  
                  <RadioGroup defaultValue="bank-transfer" className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="bank-transfer" id="bank-transfer" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="bank-transfer">Direct Bank Transfer</Label>
                        <p className="text-sm text-muted-foreground">
                          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="cash" id="cash" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="cash">Cash on Delivery</Label>
                      </div>
                    </div>
                  </RadioGroup>
  
                  <div className="text-sm text-muted-foreground">
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline">
                      privacy policy
                    </Link>
                    .
                  </div>
  
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" onClick={handlePlaceOrder}>"
                    Place order
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <Subfooter />
      </div>
  );
}
