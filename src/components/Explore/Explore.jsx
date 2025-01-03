import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import './Explore.css';

const ExploreSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "Our Catering",
      description: "Our catering service blends artisanal coffee, decadent desserts, and handcrafted ice creams to elevate any gathering – from cozy office meetings to grand celebrations.",
      icon: "🍽️", // Use an appropriate icon here
      buttonText: "Order Catering",
    },
    {
      title: "Our Coffee",
      description: "Crafted from the finest beans, each sip is a journey of bold flavors and smooth finishes. From classic espressos to creamy lattes, our baristas are here to make your day extraordinary.",
      icon: "☕",
      buttonText: "Food Menu",
    },
    {
      title: "Our Ice Cream",
      description: "Savor the sweetness! Our hand-churned ice creams are made with love, offering unique flavors that refresh and satisfy.Perfect for sunny days or as a delightful treat any time.",
      icon: "🍦",
      buttonText: "Discover More",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 md:px-8" id="explore">
      <div className="text-center mb-12">
        <h2
          className="text-3xl mt-10 md:text-4xl font-bold"
          data-aos="fade-up"
        >
          Explore Our Coffee Hub
        </h2>
        <p
          className="text-gray-600 mt-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Welcome to Coffee Hub – where every cup tells a story. Whether you're craving rich coffee, indulgent <br></br> ice cream, or exceptional catering, we bring flavors that delight and experiences that linger.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white-200  mt-7 service p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl hover:text-gray-600 font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 desc mb-4 text-justify ">{service.description}</p>
            <button className="bg-primary text-white mt-5 px-4 py-2 rounded hover:bg-red-900">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
