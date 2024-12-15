'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from 'next/image'
import Link from 'next/link'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export default function ViewOrders() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Asgaard sofa',
      price: 250000.00,
      quantity: 1,
      image: '/sofa.png'
    },
  ])

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100"> {/* Added Flexbox for centering */}
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg">
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="h-[300px] p-4">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-start space-x-4">
                <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-medium leading-none">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.quantity}x Rs. {item.price.toLocaleString()}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Subtotal</span>
            <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link href="/cart">
              <Button variant="outline" className="w-full">
                View Cart
              </Button>
            </Link>
            <Link href="/checkout">
              <Button className="w-full">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
