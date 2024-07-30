import {
  About,
  Contact,
  Copyright,
  Footer,
  GallerySection,
  Header,
  Hero,
  Interview,
  Skills,
  Testimonial,
} from "./components";

export const App = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
      <Copyright />
      <div className="h-[4000px]"></div>
    </div>
  );
};
