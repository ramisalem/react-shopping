import React from 'react';
import Header from './Components/Header/Header';
import Features from './Components/Features/Features';
import About from './Components/About.js/About';
import Product from './Components/Product/Product';
import Contact from './Components/contact/Contact';
import Footer from './Components/Footer/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <About />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
