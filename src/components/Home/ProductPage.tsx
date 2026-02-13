import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "./assets/images/dome-type/type1.png",
    title: "Kubah Enamel",
    description:
      "Kubah dengan lapisan porselen kualitas premium, tahan karat, dan warna yang tidak mudah pudar hingga puluhan tahun.",
  },
  {
    image: "./assets/images/dome-type/type2.png",
    title: "Kubah Galvalum",
    description:
      "Terbuat dari bahan baja ringan berlapis seng dan aluminium, sangat tahan terhadap korosi dan cuaca ekstrem.",
  },
  {
    image: "./assets/images/dome-type/type3.png",
    title: "Kubah GRC",
    description:
      "Memberikan kilau yang elegan dan ketahanan luar biasa terhadap karat, cocok untuk daerah pesisir.",
  },
  {
    image: "./assets/images/dome-type/type4.jpg",
    title: "Kubah Stainless Gold",
    description:
      "Kubah dengan lapisan emas berkualitas premium, tahan karat, dan warna yang tidak mudah pudar hingga puluhan tahun.",
  },
  {
    image: "./assets/images/dome-shape/shape3.jpg",
    title: "Kubah Setengah Bola",
    description:
      "Desain klasik yang memberikan kesan megah dan proporsional untuk bangunan masjid Anda.",
  },
  {
    image: "./assets/images/dome-shape/shape1.jpg",
    title: "Kubah Madina",
    description:
      "Memiliki ciri khas bentuk oval yang elegan, terinspirasi dari arsitektur klasik yang memberikan kesan kedamaian.",
  },
  {
    image: "./assets/images/dome-shape/shape5.jpeg",
    title: "Kubah Nabawi",
    description:
      "Replika desain agung Masjid Nabawi, mengombinasikan seni islami tradisional dengan kemegahan modern.",
  },
];

const ProductPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const totalProducts = products.length;

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      let perPage = 3;
      if (window.innerWidth < 640) {
        perPage = 1.15; // Show a peek of the next card on mobile
      } else if (window.innerWidth < 768) {
        perPage = 1;
      } else if (window.innerWidth < 1024) {
        perPage = 2;
      }
      setItemsPerPage(perPage);

      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, totalProducts - Math.floor(perPage));
        return prev > maxIndex ? maxIndex : prev;
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [totalProducts]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, totalProducts - Math.floor(itemsPerPage));
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, totalProducts - Math.floor(itemsPerPage));
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [itemsPerPage, totalProducts]);

  const maxIndex = Math.max(0, totalProducts - Math.floor(itemsPerPage));

  return (
    <section id="produk" className="py-12 md:py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Pilihan Desain <span className="text-primary">Kubah Terbaik</span>
            </h2>
            <p className="mt-4 text-gray-600 hidden md:block">
              Kami menyediakan berbagai pilihan jenis dan bentuk kubah dengan material premium untuk keindahan masjid Anda.
            </p>
          </div>
          <div className="flex gap-3 md:gap-4 self-end md:self-auto">
            <button
              onClick={prevSlide}
              className="p-3 md:p-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all cursor-pointer group"
              aria-label="Previous Slide"
            >
              <FaChevronLeft
                size={18}
                className="group-hover:scale-110 transiton-transform"
              />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 md:p-4 rounded-full bg-primary text-white hover:bg-primary/80 transition-all cursor-pointer shadow-lg shadow-primary/40 group"
              aria-label="Next Slide"
            >
              <FaChevronRight
                size={18}
                className="group-hover:scale-110 transiton-transform"
              />
            </button>
          </div>
        </div>

        <div
          className="relative cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 px-2 md:px-3 flex-shrink-0"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex justify-center gap-2 md:gap-3">
          {Array.from({ length: maxIndex + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${currentIndex === index
                  ? "w-8 md:w-10 bg-primary"
                  : "w-1.5 md:w-2 bg-gray-300 hover:bg-primary/40"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
