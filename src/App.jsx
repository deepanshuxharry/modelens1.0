import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GetInTouchForm from "./components/GetInTouchForm";
import ServiceCards from "./components/servicecard";
import Footer from "./components/Footer";
import OurModels from "./components/OurModels";
import ProcessSection from "./components/process";
import Portfolio from "./components/portfolio";
import TeamSection from "./components/team";
import WorkGallery from "./components/workgallery";
import MakeupArtist from "./components/MakeupArtist";
import Photographers from "./components/Photographers";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
       
        <Routes path='/'>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServiceCards />
                <OurModels/>
{/*               
                <Portfolio/> */}
                <WorkGallery/>
                <ProcessSection/>
               

             
               {/* <TeamSection/> */}
              
              
              </>
            }
          />
          
          {/* Contact page route */}
          <Route path="/contact" element={<GetInTouchForm />} />
          <Route path="/services" element={<ServiceCards />} />
          <Route path="/our-models" element={<OurModels />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/makeupartist" element={<MakeupArtist />} />
          <Route path="/photographers" element={<Photographers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;