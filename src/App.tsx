import { useHead } from "@unhead/react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  useHead({
    title: "Dome Indonesia | Produsen Kubah Masjid Terbaik & Terpercaya",
    meta: [
      {
        name: "description",
        content:
          "Dome Indonesia produsen kubah masjid terbaik. Kubah GRC, enamel, galvalum, tembaga. Melayani seluruh Indonesia. Konsultasi gratis!",
      },
      {
        property: "og:title",
        content: "Dome Indonesia | Produsen Kubah Masjid Terbaik",
      },
      { property: "og:url", content: "https://www.domeindonesia.id/" },
    ],
    link: [{ rel: "canonical", href: "https://www.domeindonesia.id/" }],
  });
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
