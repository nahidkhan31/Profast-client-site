import React, { useEffect, useState } from 'react';
import picture from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Customer = () => {
    const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
    return (
         <div className="mt-16 px-4 md:px-12 lg:px-24 text-center">
      <img className="mx-auto" src={picture} alt="" />
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#03373D] font-bold mt-6">
        What our customers are sayings
      </h1>
      <p className="text-[#606060] mt-4 max-w-2xl mx-auto text-sm sm:text-base">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      {/* Carousel */}
      <div className="mt-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper">
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-white rounded-xl p-6 shadow-lg w-[90%] sm:w-[70%] md:w-[60%] lg:w-[420px] transition duration-500 ease-in-out mx-4"
              style={{ opacity: 0.4 }}>
              <div className="flex justify-center">
                <img
                  src={item.user_photoURL}
                  alt={item.userName}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-4 border-2 border-[#03373D]"
                />
              </div>
              <p className="italic text-gray-600 text-sm sm:text-base mb-3">
                “{item.review}”
              </p>
              <p className="text-yellow-500 font-bold text-sm mb-2">
                ⭐ {item.ratings} / 5
              </p>
              <div>
                <h4 className="text-[#03373D] font-semibold text-sm sm:text-base">
                  {item.userName}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.user_email}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    );
};

export default Customer;