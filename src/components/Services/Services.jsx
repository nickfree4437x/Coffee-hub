import React from "react";
import Img2 from "../../assets/coffee2.png";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Vanilla Latte",
    description:
      "Smooth espresso combined with creamy milk and a splash of vanilla syrup.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Cinnamon Dolce",
    description:
      "Warm cinnamon and brown sugar combined with espresso and milk create a cozy, dessert-like drink.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Mocha",
    description:
      "Espresso blends with rich cocoa, finished with steamed milk and a dollop of whipped cream",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl mt-7 font-bold text-gray-800">
              Best Coffee For You
            </h1>
            <p
          className="text-gray-600 mt-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The best coffee for me would be a smooth, rich flat white – perfectly balanced between espresso and <br></br> velvety steamed milk. It highlights the coffee’s bold flavors while keeping the texture creamy and satisfying.
        </p>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white mt-8 hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
