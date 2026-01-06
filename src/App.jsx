import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root>
      <div className="font-body text-text bg-bg min-h-screen flex flex-col selection:bg-primary selection:text-black">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Contact />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
