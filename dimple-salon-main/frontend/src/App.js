import React from "react";
import "@/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "@/i18n";
import { Navbar } from "@/components/salon/Navbar";
import { Hero } from "@/components/salon/Hero";
import { About } from "@/components/salon/About";
import { Services } from "@/components/salon/Services";
import { Gallery } from "@/components/salon/Gallery";
import { Nails } from "@/components/salon/Nails";
import { Testimonials } from "@/components/salon/Testimonials";
import { Contact } from "@/components/salon/Contact";
import { Footer } from "@/components/salon/Footer";
import { FloatingButtons } from "@/components/salon/FloatingButtons";

const Home = () => {
  return (
    <div className="App" data-testid="home-page">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Nails />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
