import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <>
      <div>
        <Navigation />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
