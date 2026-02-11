type MotifItem = {
  title: string;
  image: string;
  size: string;
};

const motifList: MotifItem[] = [
  {
    title: "",
    image: "./assets/images/celling-motif/motif1.jpg",
    size: "col-span-2 row-span-2",
  },
  {
    title: "",
    image: "./assets/images/celling-motif/motif2.jpg",
    size: "",
  },
  {
    title: "",
    image: "./assets/images/celling-motif/motif3.jpg",
    size: "",
  },
  {
    title: "",
    image: "./assets/images/celling-motif/motif4.jpg",
    size: "col-span-2",
  },
];

const CellingMotif = () => {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center ">
          Motif Plafon Masjid
        </h1>

        <p className="text-gray-600 text-center text-lg mb-12 mt-4">
          Motif plafon masjid yang kami tawarkan
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-6">
          {motifList.map((item, index) => (
            <div
              key={index}
              className={`relative ${item.size} rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group`}
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

export default CellingMotif;
