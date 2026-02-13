type DomeItem = {
  title: string;
  description: string;
  image: string;
};

const DomeShape = () => {
  const data: DomeItem[] = [
    {
      title: "Kubah Madina",
      description:
        "Memiliki ciri khas bentuk oval yang elegan, terinspirasi dari arsitektur klasik yang memberikan kesan kedamaian.",
      image: "./assets/images/dome-shape/shape1.jpeg",
    },
    {
      title: "Kubah Bawang",
      description:
        "Bentuk melengkung eksotis yang melebar di tengah, memberikan tampilan arsitektur ikonik khas Timur Tengah.",
      image: "./assets/images/dome-shape/shape2.jpeg",
    },
    {
      title: "Kubah Setengah Bola",
      description:
        "Desain simetris yang memberikan kesan megah and proporsional, sangat populer karena ketahanannya.",
      image: "./assets/images/dome-shape/shape3.jpg",
    },
    {
      title: "Kubah Pinang",
      description:
        "Bentuk tirus yang menjulang tinggi, memberikan kesan ramping dan elegan pada tampilan siluet masjid.",
      image: "./assets/images/dome-shape/shape4.jpg",
    },
    {
      title: "Kubah Nabawi",
      description:
        "Replika desain agung Masjid Nabawi, mengombinasikan seni islami tradisional dengan kemegahan modern.",
      image: "./assets/images/dome-shape/shape5.jpeg",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-auto mb-4 text-gray-900">
            Berbagai Bentuk Kubah
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-8"></div>
          <p className="max-w-3xl text-gray-600 text-lg leading-relaxed">
            Setiap bentuk kubah mamiliki filosofi dan estetika yang unik. Kami memudahkan Anda memilih bentuk yang paling sesuai dengan karakteristik masjid Anda.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-80 md:h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomeShape;
