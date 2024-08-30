import { useState } from "react";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import Nav from "./components/nav/Nav";
import MobileNav from "./components/mobileNav/MobileNav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Background from "./components/background/Background";
import Projects from "./components/projects/Projects";
import { ModalContextProvider } from "./contexts/modalContext";
import Modal from "./components/modal/Modal";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <ModalContextProvider>
    <Modal />
      <section className="relative font-dosis flex flex-col w-full h-full">
        <ParticlesBackground />
        <Nav />
        <MobileNav />
        <Home />
        <main className="flex flex-col">
          <Projects />
          <About />
        </main>
      </section>
    </ModalContextProvider>
  );
}

export default App;
