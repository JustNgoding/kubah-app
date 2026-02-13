import { motifList } from "../../data/motif-data";

const CellingMotif = () => {
  return (
    <section id="motif" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contoh Plafon dan Kaligrafi
          </h2>

          <p className="text-gray-600 text-base md:text-lg mt-4">
            Berikut adalah contoh plafon dan kaligrafi yang telah kami tawarkan.
          </p>
        </div>

        <div className="relative group/gallery">
          <div className="max-h-[60vh] md:max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-3 md:gap-6 auto-rows-[150px] md:auto-rows-[200px] mb-8">
              {motifList.map((item, index) => (
                <div
                  key={index}
                  className={`relative ${item.size} rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group`}
                  style={{
                    contentVisibility: "auto",
                    containIntrinsicSize: "auto 200px",
                  }}
                >
                  <img
                    src={item.image}
                    alt="Motif Plafon"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover scale-110 origin-top-left group-hover:scale-115 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Fade indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-20  from-white to-transparent pointer-events-none z-10" />

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-primary font-medium text-sm flex items-center gap-2 animate-bounce">
            <span>Scroll kebawah</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CellingMotif;
