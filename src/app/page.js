import { Header, Hero, Cars, About, Why, Testimonial, TestimonialSlider, Cta, Footer, BackToTopBtn } from "./components";


export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
    </main>
  )
}
