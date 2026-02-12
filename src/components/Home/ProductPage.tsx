import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const products = [
    {
        image: "./assets/images/dome-type/type1.png",
        title: "Kubah Enamel",
        description: "Kubah dengan lapisan porselen kualitas premium, tahan karat, dan warna yang tidak mudah pudar hingga puluhan tahun.",
    },
    {
        image: "./assets/images/dome-type/type2.png",
        title: "Kubah Galvalum",
        description: "Terbuat dari bahan baja ringan berlapis seng dan aluminium, sangat tahan terhadap korosi dan cuaca ekstrem.",
    },
    {
        image: "./assets/images/dome-type/type3.png",
        title: "Kubah Stainless Steel",
        description: "Memberikan kilau yang elegan dan ketahanan luar biasa terhadap karat, cocok untuk daerah pesisir.",
    },
    {
        image: "./assets/images/dome-type/type4.jpg",
        title: "Kubah Titanium",
        description: "Teknologi terbaru dengan material ringan namun sangat kuat, memberikan perlindungan maksimal dengan estetika modern.",
    },
    {
        image: "./assets/images/dome-shape/shape1.jpg",
        title: "Kubah Setengah Bola",
        description: "Desain klasik yang memberikan kesan megah dan proporsional untuk bangunan masjid Anda.",
    },
    {
        image: "./assets/images/dome-shape/shape2.jpg",
        title: "Kubah Madinah",
        description: "Inspirasi desain dari Masjid Nabawi, memberikan nuansa spiritual yang kental dan indah.",
    },
];

const ProductPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const totalProducts = products.length;

    useEffect(() => {
        const handleResize = () => {
            let perPage = 3;
            if (window.innerWidth < 768) {
                perPage = 1;
            } else if (window.innerWidth < 1024) {
                perPage = 2;
            }
            setItemsPerPage(perPage);

            // Clamp index immediately on resize
            setCurrentIndex(prev => {
                const maxIndex = totalProducts - perPage;
                return prev > maxIndex ? Math.max(0, maxIndex) : prev;
            });
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [totalProducts]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (totalProducts - itemsPerPage + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + (totalProducts - itemsPerPage + 1)) % (totalProducts - itemsPerPage + 1));
    };


    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                const maxIndex = totalProducts - itemsPerPage;
                if (prev >= maxIndex) return 0;
                return prev + 1;
            });
        }, 5000);
        return () => clearInterval(timer);
    }, [itemsPerPage, totalProducts]);

    return (
        <section id="produk" className="py-24 bg-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Pilihan Design <span className="text-primary">Kubah Terbaik</span> Untuk Anda
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all cursor-pointer group"
                            aria-label="Previous Slide"
                        >
                            <FaChevronLeft size={20} className="group-hover:scale-110 transiton-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-4 rounded-full bg-primary text-white hover:bg-primary/80 transition-all cursor-pointer shadow-lg shadow-primary/40 group"
                            aria-label="Next Slide"
                        >
                            <FaChevronRight size={20} className="group-hover:scale-110 transiton-transform" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                        }}
                    >
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                            >
                                <ProductCard {...product} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex justify-center gap-3">
                    {Array.from({ length: totalProducts - itemsPerPage + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "w-10 bg-primary" : "w-2 bg-gray-300 hover:bg-primary/40"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
