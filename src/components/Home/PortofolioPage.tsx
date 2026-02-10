const PortofolioPage = () => {
  const portfolioImages = [
    {
      id: 1,
      image: "./assets/images/portfolio/portfolio1.jpeg",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      image: "./assets/images/portfolio/portfolio2.jpeg",
      span: "md:col-span-1",
    },
    {
      id: 3,
      image: "./assets/images/portfolio/portfolio3.jpeg",
      span: "md:col-span-1",
    },
    {
      id: 4,
      image: "./assets/images/portfolio/portfolio4.jpeg",
      span: "md:col-span-1",
    },
    {
      id: 5,
      image: "./assets/images/portfolio/portfolio5.jpeg",
      span: "md:col-span-1",
    },
    {
      id: 6,
      image: "./assets/images/portfolio/portfolio6.jpeg",
      span: "md:col-span-1",
    },
    {
      id: 7,
      image: "./assets/images/portfolio/portfolio7.jpeg",
      span: "md:col-span-1",
    },
    {
      id: 8,
      image: "./assets/images/portfolio/portfolio8.jpeg",
      span: "md:col-span-2 md:row-span-2",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Project Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Koleksi proyek sukses kubah masjid terbaik kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max">
          {portfolioImages.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <img
                src={item.image}
                alt={`Portfolio ${item.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortofolioPage;
