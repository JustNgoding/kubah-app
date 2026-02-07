const WelcomePage = () => {
  return (
    <div className="bg-secondary">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-20 py-12 md:py-24 ">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Solusi Kubah <span className="text-primary">Terpercaya</span> Untuk
            Rumah & Bisnis Anda
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Kami menyediakan berbagai jenis kubah berkualitas tinggi dengan
            desain modern dan tahan lama. Tingkatkan nilai estetika bangunan
            Anda dengan produk unggulan kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Jelajahi Produk
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-blue-50 transition">
              Hubungi Kami
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <div className="w-full max-w-sm">
            <img
              src="/src/assets/images/banner1.jpeg"
              alt="Banner Kubah"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
