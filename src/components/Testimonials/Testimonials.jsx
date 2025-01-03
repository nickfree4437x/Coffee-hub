import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import aisha from "../../assets/aisha.jpeg";
import rehan from "../../assets/rehan.jpeg";
import ahmed from "../../assets/ahmed.jpeg";


const testimonials = [
  {
    name: "Aeysha Ahmed",
    image: aisha,
    rating: 5,
    feedback:
      "Coffee Hub is my go-to spot for the perfect cup of coffee. The aroma, the ambiance, and the friendly staff make every visit delightful. Their caramel latte is a masterpiece, and the cozy seating makes it a great place to unwind or catch up with friends!",
  },
  {
    name: "Liba Jadoon",
    image: rehan,
    rating: 5,
    feedback:
      "The best coffee experience I’ve ever had! Coffee Hub’s attention to detail is incredible, from the perfectly brewed espresso to the beautifully crafted latte art. I love their sustainable approach and locally sourced beans. Highly recommend!",
  },
  {
    name: "Ahmed Ali",
    image: ahmed,
    rating: 5,
    feedback:
      "Coffee Hub is more than just coffee; it’s an experience. The baristas are skilled, the desserts are divine, and the atmosphere is warm and inviting. Their cold brew is a must-try! I can’t imagine starting my day without them.",
  },
];

const TestimonialCard = ({ name, image, rating, feedback, aosEffect }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl" id="testimonial"
      data-aos={aosEffect}
    >
      <img
        src={image}
        alt={name}
        className="w-28 h-28 mx-auto rounded-full mb-4"
      />
      <h3 className="text-lg font-bold text-center">{name}</h3>
      <div className="flex justify-center my-2">
        {Array.from({ length: rating }, (_, i) => (
          <span key={i} className="text-yellow-500 text-xl">⭐</span>
        ))}
      </div>
      <p className="text-gray-600 mb-5 text-justify text-sm">{feedback}</p>
    </div>
  );
};

const TestimonialSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <div className="bg-gray-50 py-16 mt-5">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Client Testimonial</h2>
        <p className="text-gray-600 mt-4">
        "Our Client Testimonial section showcases the voices of our valued customers,
         highlighting their experiences and <br></br> satisfaction with our services.
          Each testimonial is a testament to the trust and quality we deliver".
        </p>
        <div className="flex justify-center items-center mt-4">
          <div className="">
            <p className="text-lg font-bold">4.6 ★</p>
            <p className="text-sm text-gray-500">Rated by 25k on Google</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            aosEffect={index % 2 === 0 ? "fade-up" : "fade-down"}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
