import React from "react";
// import MyImage from "../../Utils/images/web.jpg";

function ServiceSection() {
  return (
    <section className="service-container">
        <h2>Our Services</h2>
        <div className="service-item">
          <div className="service-icon">
            {/* <img src={MyImage} alt="DevBabu.com" /> */}
          </div>
          <h3>Web Development</h3>
          <p>
            We create responsive and user-friendly websites that help your
            business stand out in the digital world.
          </p>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <h3>Mobile App Development</h3>
          <p>
            Our mobile apps are designed to provide seamless experiences on
            various platforms and devices.
          </p>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <h3>Cloud Computing</h3>
          <p>
            We offer cloud solutions to enhance your business's scalability,
            security, and efficiency.
          </p>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3>Digital Marketing</h3>
          <p>
            Our digital marketing strategies help you reach your target audience
            and achieve your online goals.
          </p>
        </div>
        <div class="container py-3">
	</div>
    </section>
  );
}

export default ServiceSection;
