import AboutPage from "./AboutPage";
import BenefitPage from "./BenefitPage";
import ContactPage from "./ContactPage";
import PortofolioPage from "./PortofolioPage";
import WelcomePage from "./WelcomePage";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50 pt-20">
        <section>
          <WelcomePage />
        </section>
        <section>
          <BenefitPage />
        </section>
        <section>
          <AboutPage />
        </section>
        <section>
          <PortofolioPage />
        </section>
        <section>
          <ContactPage />
        </section>
      </div>
    </>
  );
};

export default Home;
