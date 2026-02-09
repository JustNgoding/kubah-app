import { FiMapPin, FiPenTool, FiTool } from "react-icons/fi";
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
  ];

  return (
    <div className="px-6 md:px-12 py-12 md:py-24 bg-gray-50 ">
      <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
        Keuntungan Kami
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 "
            >
              <div className="flex items-center mb-4">
                <Icon className="text-primary text-3xl mr-4" />
                <h3 className="text-xl font-bold text-gray-700">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitPage;
