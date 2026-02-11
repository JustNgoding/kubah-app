import { FaWhatsapp } from "react-icons/fa";

const Floatingwa = () => {
  const phoneNumber = "6285117605188"; // ganti ke nomor WA kamu
  const message = "Halo, saya ingin konsultasi tentang kubah masjid";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        hover:bg-green-600
        hover:scale-110
        transition-all
      "
      aria-label="Chat WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
};

export default Floatingwa;
