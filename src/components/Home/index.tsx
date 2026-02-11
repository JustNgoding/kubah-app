import Floatingwa from "../Floatingwa";
import AboutPage from "./AboutPage";
import BenefitPage from "./BenefitPage";
import CellingMotif from "./CellingMotif";
import ContactPage from "./ContactPage";
// import DomeDesign from "./DomeDesign";
import DomeShape from "./DomeShape";
import DomeType from "./DomeType";
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
        <section id="jenis-kubah" className="scroll-mt-28">
          <DomeType />
        </section>
        <section id="bentuk-kubah" className="scroll-mt-28">
          <DomeShape />
        </section>
        {/* <section id="desain-kubah" className="scroll-mt-28">
          <DomeDesign />
        </section> */}
        <section id="motif-plafon" className="scroll-mt-28">
          <CellingMotif />
        </section>
        <section id="project-kami" className="scroll-mt-28">
          <PortofolioPage />
        </section>
        <section id="kontak-kami" className="scroll-mt-28">
          <ContactPage />
        </section>
      </div>

      <Floatingwa />
    </>
  );
};

export default Home;
