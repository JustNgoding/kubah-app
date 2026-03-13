type DomeItem = {
  title: string;
  description: string;
  image: string;
};
const domeShapes: DomeItem[] = [
  {
    title: "Kubah Madina",
    description:
      "Bentuk kubah dengan proporsi oval yang elegan dan lembut. Desain ini sering digunakan pada masjid modern karena tampilannya yang seimbang dan menenangkan.",
    image: "./assets/images/dome-shape/shape1.jpeg",
  },
  {
    title: "Kubah Bawang",
    description:
      "Memiliki lengkungan khas yang melebar di bagian tengah lalu meruncing di atas. Bentuk ini populer pada arsitektur Timur Tengah dan memberikan karakter yang kuat pada masjid.",
    image: "./assets/images/dome-shape/shape2.jpeg",
  },
  {
    title: "Kubah Setengah Bola",
    description:
      "Model kubah klasik berbentuk setengah bola dengan struktur yang stabil dan proporsional. Desain ini banyak digunakan karena tampilannya yang sederhana namun tetap megah.",
    image: "./assets/images/dome-shape/shape3.jpg",
  },
  {
    title: "Kubah Pinang",
    description:
      "Bentuk kubah yang lebih ramping dan menjulang tinggi sehingga memberikan siluet masjid yang terlihat lebih elegan dari kejauhan.",
    image: "./assets/images/dome-shape/shape4.jpg",
  },
  {
    title: "Kubah Nabawi",
    description:
      "Desain kubah yang terinspirasi dari Masjid Nabawi di Madinah dengan proporsi yang megah dan tampilan yang sangat identik dengan arsitektur masjid klasik.",
    image: "./assets/images/dome-shape/shape5.jpeg",
  },
];

const DomeShape = () => {
  return (
    <section
      id="bentuk-kubah"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="shape-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="flex flex-col items-center mb-16 text-center">
          <h2
            id="shape-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Berbagai Bentuk Kubah
          </h2>

          <div className="w-24 h-1.5 bg-primary rounded-full mb-8"></div>

          <p className="max-w-3xl text-gray-600 text-lg leading-relaxed">
            Setiap bentuk kubah mamiliki filosofi dan estetika yang unik. Kami
            memudahkan Anda memilih bentuk yang paling sesuai dengan
            karakteristik masjid Anda.
          </p>
        </header>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {domeShapes.map((item, index) => (
            <article
              key={item.title}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-80 md:h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {item.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomeShape;
