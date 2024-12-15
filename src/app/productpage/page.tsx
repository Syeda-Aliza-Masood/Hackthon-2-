'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation' // Import useRouter
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import Image from 'next/image'

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('xl')
  const [selectedColor, setSelectedColor] = useState('purple')
  const router = useRouter() // Initialize the router

  const handleAddToCart = () => {
    // Logic for adding the product to the cart can go here
    // Example: Save product details to local storage or state
    router.push('/cart') // Navigate to the cart page
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li><Link href="/shop">Shop</Link></li>
              <li>/</li>
              <li className="text-muted-foreground">Asgaard sofa</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <Image
                src="/sofa.png"
                alt="Asgaard sofa"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </Card>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden cursor-pointer">
                  <Image
                    src="/sofa1.png"
                    alt={`Asgaard sofa view ${i}`}
                    width={150}
                    height={100}
                    className="w-full object-cover"
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Asgaard sofa</h1>
            <p className="text-2xl">Rs. 250,000.00</p>
            
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">(5 Reviews)</span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex space-x-2">
                  {['xl', 'xs'].map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className="w-12"
                    >
                      {size.toUpperCase()}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex space-x-2">
                  {[{ name: 'purple', class: 'bg-purple-500' }, { name: 'black', class: 'bg-black' }, { name: 'gold', class: 'bg-yellow-600' }]
                    .map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-8 h-8 rounded-full ring-offset-2 ${color.class} ${
                          selectedColor === color.name ? 'ring-2 ring-black' : ''
                        }`}
                      />
                    ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <Button onClick={handleAddToCart} className="flex-1">Add To Cart</Button>
                <Button variant="outline">+ Compare</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
