import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
}) => {
  const waNumber = "6285117605188";
  const waMessage = `Halo Admin, saya ingin membeli ${title}. Mohon info harga dan spesifikasinya.`;
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>
      <div className="p-6 flex flex-col ">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-xl font-bold hover:bg-primary/90 hover:gap-3 transition-all cursor-pointer shadow-lg shadow-primary/20"
        >
          Beli Sekarang <FaArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
