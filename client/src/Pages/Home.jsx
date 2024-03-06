import React from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import "../Utils/css/App.css";
import AboutSection from "../Components/Common/About";
import ServiceSection from "../Components/Common/ServiceSection";
import Page from "../Components/Common/Page";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-page">
        <div className="center-content">
          <h1>LGTS IT Solutions</h1>
          <div>
            <p>Transform your business with custom software solutions.</p>
          </div>
          <div>
            <a href="" className="btn">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <AboutSection />
      <ServiceSection />
      <Page/>
      <Footer />
    </div>
  );
}

export default Home;
