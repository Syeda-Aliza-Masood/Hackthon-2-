import Image from "next/image";

interface Card {
  name: string;
  description: string;
  image: string;
  price: string;
}

const data: Card[] = [
  {
    name: 'Syltherine',
    price: "Rp 2.500.000",
    image: "/1.png",
    description: 'Stylish cafe chair',
  },
  {
    name: 'Leviosa',
    price: "Rp 2.500.000",
    image: "/2.png",
    description: 'Stylish cafe chair',
  },
  {
    name: 'Lolito',
    price: "Rp 7.000.000",
    image: '/3.png',
    description: 'Luxury big sofa',
  },
  {
    name: 'Respira',
    price: "Rp 500.000",
    image: '/4.png',
    description: 'Minimalist fan',
  },
  {
    name: 'Grifo',
    price: "Rp 1.500.000",
    image: '/5.png',
    description: 'Night lamp',
  },
  {
    name: 'Muggo',
    price: "Rp 150.000",
    image: '/6.png',
    description: 'Small mug',
  },
  {
    name: 'Pingky',
    price: "Rp 7.000.000",
    image: '/7.png',
    description: 'Cute bed set',
  },
  {
    name: 'Potty',
    price: "Rp 500.000",
    image: '/8.png',
    description: 'Minimalist flower pot',
  },
];

export default function Products() {
  return (
    <section className="container mx-auto px-4 py-8 mt-20">
      <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-48 sm:h-56 md:h-64">
              <Image
                src={card.image}
                alt={card.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{card.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{card.description}</p>
              <p className="font-bold text-lg text-[#B88E2F]">{card.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="text-[#B88E2F] border-2 border-[#B88E2F] px-6 py-2 rounded-md hover:bg-[#B88E2F] hover:text-white transition duration-300">
          Show More
        </button>
      </div>
    </section>
  );
}

