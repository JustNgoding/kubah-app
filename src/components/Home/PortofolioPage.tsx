const PortofolioPage = () => {
  const portfolioImages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=600&fit=crop",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1577720643272-265f434880b3?w=400&h=400&fit=crop",
      span: "md:col-span-1",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1578926314433-f06522ff265f?w=400&h=400&fit=crop",
      span: "md:col-span-1",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1573506313671-a8e61fec67e5?w=400&h=400&fit=crop",
      span: "md:col-span-1",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1577720643272-265f434880b3?w=600&h=600&fit=crop",
      span: "md:col-span-2",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=400&fit=crop",
      span: "md:col-span-1",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1578926314433-f06522ff265f?w=400&h=400&fit=crop",
      span: "md:col-span-1",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1573506313671-a8e61fec67e5?w=600&h=600&fit=crop",
      span: "md:col-span-2 md:row-span-2",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Portfolio Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Koleksi proyek kubah masjid terbaik kami di seluruh Indonesia
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
