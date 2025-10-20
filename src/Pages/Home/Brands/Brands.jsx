import React from "react";
import Logo1 from "../../../assets/brands/amazon.png";

import Logo2 from "../../../assets/brands/casio.png";
import Logo3 from "../../../assets/brands/moonstar.png";
import Logo4 from "../../../assets/brands/randstad.png";
import Logo5 from "../../../assets/brands/start-people 1.png";
import Logo6 from "../../../assets/brands/start.png";
import Marquee from "react-fast-marquee";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
const Brands = () => {
  return (
    <section className="py-10 bg-gray-100 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-primary font-bold text-center mb-12">
          Trusted by Leading Brands
        </h2>

        <Marquee pauseOnHover speed={50} gradient={false}>
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-24 flex items-center">
              <img
                src={logo}
                alt={`Client Logo ${idx + 1}`}
                className="h-6 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
