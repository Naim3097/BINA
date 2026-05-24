import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Catalog from "@/components/Catalog";
import Methods from "@/components/Methods";
import Steps from "@/components/Steps";
import CtaStrip from "@/components/CtaStrip";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header locale="en" current="home" altHref="/ms" selfHref="/" />
      <main id="main">
        <VideoHero />
        <Hero />
        <Features />
        <Catalog />
        <Methods />
        <Steps />
        <CtaStrip />
      </main>
      <Footer locale="en" />
    </>
  );
}
