const images = [
  "https://source.unsplash.com/600x900/?mosque,dome",
  "https://source.unsplash.com/600x700/?mosque,architecture",
  "https://source.unsplash.com/600x1000/?mosque,interior",
  "https://source.unsplash.com/600x800/?islamic,pattern",
  "https://source.unsplash.com/600x950/?mosque,minaret",
  "https://source.unsplash.com/600x850/?islamic,geometry",
  "https://source.unsplash.com/600x1100/?mosque,ceiling",
  "https://source.unsplash.com/600x750/?mosque,ornament",
  "https://source.unsplash.com/600x920/?mosque,design",
  "https://source.unsplash.com/600x880/?islamic,mosque",
];

const DomeDesign = () => {
  return (
    <section className="py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 space-y-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt="Dome"
                className="w-full h-auto object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomeDesign;
