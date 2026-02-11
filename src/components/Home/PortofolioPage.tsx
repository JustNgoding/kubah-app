const PortofolioPage = () => {
  const portfolioImages = [
    {
      id: 1,
      title: "Proses Pemasangan Kubah ",
      image: "./assets/images/portfolio/portfolio1.jpeg",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      title: "Proses Pemasangan Kubah ",
      image: "./assets/images/portfolio/portfolio2.jpeg",
      span: "md:col-span-1",
    },
    {
      id: 3,
      title: "Kubah Madina",
      image: "./assets/images/portfolio/portfolio3.jpeg",
      span: "md:col-span-1",
    },
    {
      id: 4,
      title: "Proses Penghiasan Plafon",
      image: "./assets/images/portfolio/portfolio4.jpeg",
      span: "md:col-span-1",
    },
    {
      id: 5,
      title: "Kubah Stanless Gold",
      image: "./assets/images/portfolio/portfolio5.jpeg",
      span: "md:col-span-1",
    },
    {
      id: 6,
      title: "kubah Madina",
      image: "./assets/images/portfolio/portfolio6.jpeg",
      span: "md:col-span-1",
    },
    {
      title: "",
      id: 7,
      image: "./assets/images/portfolio/portfolio7.jpeg",
      span: "md:col-span-1",
    },
    {
      title: "",
      id: 8,
      image: "./assets/images/portfolio/portfolio8.jpeg",
      span: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Project Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Koleksi proyek sukses kubah masjid terbaik kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max">
          {portfolioImages.map((item, index) => (
            <div
              key={index}
              className={`relative ${item.span} rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end">
                <h2 className="text-white text-lg font-semibold p-4">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortofolioPage;
