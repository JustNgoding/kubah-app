import { FiMapPin, FiPenTool, FiTool, FiTruck } from "react-icons/fi";
import type { ComponentType } from "react";

const BenefitPage = () => {
  const benefits: Array<{
    title: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
  }> = [
    {
      title: "Free Survey Lokasi",
      description:
        "Kami sediakan survey secara gratis agar bisa konsultasi lebih detail",
      icon: FiMapPin,
    },
    {
      title: "Free Design 3D",
      description: "Kami sediakan design kubah sebelum project dimulai",
      icon: FiPenTool,
    },
    {
      title: "Free Pemasangan",
      description: "Tidak menambahkan biaya untuk pemasangan kubah",
      icon: FiTool,
    },
    {
      title: "Free Ongkir",
      description:
        "Pengiriman material kubah kami tanggung tanpa biaya tambahan ke lokasi proyek",
      icon: FiTruck,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 ">
        <h2 className="text-center text-3xl font-bold mb-12 text-gray-800">
          Keuntungan Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="
                bg-white
                p-8
                rounded-xl
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-primary text-3xl mr-4" />
                  <h3 className="text-lg font-bold text-gray-700">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitPage;
