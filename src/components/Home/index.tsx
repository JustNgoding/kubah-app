import { lazy, Suspense } from "react";

import Floatingwa from "../Floatingwa";

import WelcomePage from "./WelcomePage";
import BenefitPage from "./BenefitPage";
import ProductPage from "./ProductPage";
import AboutPage from "./AboutPage";

const DomeType = lazy(() => import("./DomeType"));
const DomeShape = lazy(() => import("./DomeShape"));
const CellingMotif = lazy(() => import("./CellingMotif"));
const PortofolioPage = lazy(() => import("./PortofolioPage"));
const ContactPage = lazy(() => import("./ContactPage"));

const Home = () => {
  return (
    <>
      <main className="bg-gray-50 pt-20">
        <section id="home" className="scroll-mt-28">
          <WelcomePage />
        </section>

        <section className="scroll-mt-28">
          <BenefitPage />
        </section>

        <section className="scroll-mt-28">
          <ProductPage />
        </section>

        <section id="tentang-kami" className="scroll-mt-28">
          <AboutPage />
        </section>

        <Suspense
          fallback={<div className="py-20 text-center">Loading...</div>}
        >
          <section className="scroll-mt-28">
            <DomeType />
          </section>

          <section id="bentuk-kubah" className="scroll-mt-28">
            <DomeShape />
          </section>

          <section id="motif-plafon" className="scroll-mt-28">
            <CellingMotif />
          </section>

          <section id="project-kami" className="scroll-mt-28">
            <PortofolioPage />
          </section>

          <section id="kontak-kami" className="scroll-mt-28">
            <ContactPage />
          </section>
        </Suspense>
      </main>

      <Floatingwa />
    </>
  );
};

export default Home;
