import AboutPage from "./AboutPage";
import BenefitPage from "./BenefitPage";
import ContactPage from "./ContactPage";
import PortofolioPage from "./PortofolioPage";
import WelcomePage from "./WelcomePage";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50 pt-20">
        <section id="home" className="scroll-mt-28">
          <WelcomePage />
        </section>
        <section className="scroll-mt-28">
          <BenefitPage />
        </section>
        <section id="tentang-kami" className="scroll-mt-28">
          <AboutPage />
        </section>
        <section id="project-kami" className="scroll-mt-28">
          <PortofolioPage />
        </section>
        <section id="kontak-kami" className="scroll-mt-28">
          <ContactPage />
        </section>
      </div>
    </>
  );
};

export default Home;
