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
        "Kubah madinah juga sering disebut dengan kubah oval karena bentuknya tidak setengah lingkaran tapi cenderung oval.",
      image: "./assets/images/dome-shape/shape1.jpg",
    },
    {
      title: "Kubah Bawang",
      description:
        "Bentuk seperti bawang. Kubah bawang sering ditemukandi India dan negara-negara di kawasan Asia Tengah",
      image: "./assets/images/dome-shape/shape2.jpg",
    },
    {
      title: "Kubah Setengah Bola",
      description:
        "Kubah setengah bola memiliki bentuk yang estetis dan elegan dengan perakitanyang relatif mudah.",
      image: "./assets/images/dome-shape/shape3.jpg",
    },
    {
      title: "Kubah Pinang",
      description:
        "Dinamakan pinang karena mengacu pada bentuk batang pohon pinang, yaitu tirus dan menggembung di bagian sisi lingkar luarnya. Modelnya tirus dan tinggi.",
      image: "./assets/images/dome-shape/shape4.jpg",
    },
  ];

  return (
    <>
      <section className="py-12 md:py-20 bg-secondary ">
        <div className="max-w-7xl mx-auto px-6 md:px-12 ">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Bentuk Kubah
          </h1>

          <p className="text-center mx-auto text-gray-600 max-w-2xl mb-12">
            Berikut beberapa bentuk kubah yang umum digunakan pada masjid dan
            bangunan religius, disesuaikan dengan kebutuhan estetika dan
            struktur.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item, index) => {
              const isLast = index === data.length - 1 && data.length % 3 === 1;

              return (
                <div
                  key={item.title}
                  className={`bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden
        ${isLast ? "lg:col-span-3 lg:max-w-sm lg:mx-auto" : ""}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DomeShape;
