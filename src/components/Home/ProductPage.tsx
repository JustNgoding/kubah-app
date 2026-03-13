import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/assets/images/product/nabawi.jpeg",
    title: "Kubah Nabawi",
    description:
      "Desain kubah terinspirasi dari Masjid Nabawi di Madinah dengan bentuk elegan dan proporsi megah. Cocok untuk masjid yang ingin menghadirkan nuansa klasik Timur Tengah.",
  },
  {
    image: "/assets/images/product/madina.jpeg",
    title: "Kubah Madina",
    description:
      "Model kubah dengan karakter lembut dan proporsi seimbang. Memberikan kesan tenang, elegan, dan sangat cocok untuk desain masjid modern maupun klasik.",
  },
  {
    image: "/assets/images/product/pinang.jpeg",
    title: "Kubah Pinang",
    description:
      "Bentuk kubah yang ramping dan menjulang tinggi sehingga menciptakan siluet masjid yang lebih tegas dan elegan dari kejauhan.",
  },
  {
    image: "/assets/images/product/bawang.jpeg",
    title: "Kubah Bawang",
    description:
      "Bentuk kubah khas Timur Tengah dengan lengkungan yang lebih penuh di bagian tengah. Memberikan karakter arsitektur yang kuat dan ikonik.",
  },
  {
    image: "/assets/images/dome-shape/shape3.jpg",
    title: "Kubah Setengah Bola",
    description:
      "Desain kubah klasik berbentuk setengah bola yang banyak digunakan pada berbagai masjid karena tampilannya yang simetris dan megah.",
  },
  {
    image: "/assets/images/dome-type/type4.jpg",
    title: "Kubah Stainless Gold",
    description:
      "Menggunakan material stainless steel dengan finishing warna emas yang mewah. Tahan karat, kuat terhadap cuaca ekstrem, dan memberikan tampilan premium.",
  },
  {
    image: "/assets/images/dome-type/type3.png",
    title: "Kubah GRC",
    description:
      "Material GRC (Glassfiber Reinforced Cement) yang kuat, ringan, dan mudah dibentuk. Cocok untuk desain kubah dengan detail ornamen yang kompleks.",
  },
  {
    image: "/assets/images/dome-type/type2.png",
    title: "Kubah Galvalum",
    description:
      "Terbuat dari baja ringan berlapis aluminium dan seng yang tahan terhadap korosi serta memiliki bobot ringan untuk struktur bangunan yang lebih efisien.",
  },
  {
    image: "/assets/images/dome-type/type1.png",
    title: "Kubah Enamel",
    description:
      "Menggunakan lapisan enamel porselen berkualitas tinggi yang diproses dengan pembakaran suhu tinggi sehingga warna lebih tahan lama dan tidak mudah pudar.",
  },
];

const ProductPage = () => {
  const totalProducts = products.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setItemsPerPage(1.15);
      } else if (width < 768) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const maxIndex = Math.max(0, totalProducts - Math.floor(itemsPerPage));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
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

    if (distance > minSwipeDistance) {
      nextSlide();
    }

    if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerPage]);

  return (
    <section
      id="produk"
      className="py-12 md:py-24 bg-secondary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Pilihan Desain <span className="text-primary">Kubah Terbaik</span>
            </h2>

            <p className="mt-4 text-gray-600 hidden md:block">
              Kami menyediakan berbagai pilihan jenis dan bentuk kubah dengan
              material premium untuk keindahan masjid Anda.
            </p>
          </div>

          <div className="flex gap-3 md:gap-4 self-end md:self-auto">
            <button
              onClick={prevSlide}
              className="p-3 md:p-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition cursor-pointer"
              aria-label="Previous Slide"
            >
              <FaChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 md:p-4 rounded-full bg-primary text-white hover:bg-primary/80 transition cursor-pointer shadow-lg shadow-primary/40"
              aria-label="Next Slide"
            >
              <FaChevronRight size={18} />
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
                className="flex-shrink-0 px-2 md:px-3"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex justify-center gap-2 md:gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-10 bg-primary"
                  : "w-2 bg-gray-300 hover:bg-primary/40"
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
