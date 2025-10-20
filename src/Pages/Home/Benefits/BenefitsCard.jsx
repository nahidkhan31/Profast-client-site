import React from "react";

const BenefitsCard = ({ benefits }) => {
  const { title, description, image } = benefits;
  return (
    <div
      data-aos="fade-down-right"
      className="card bg-base-100 flex justify-between shadow-md border  transition-all hover:bg-green-600">
      <div className="card-body flex flex-col items-start gap-4">
        <img className="w-16 h-16 object-contain" src={image} alt="" />
        <div className="divider divider-horizontal hidden sm:flex my-0" />
        <div>
          <h3 className="card-title text-base-content text-lg mb-2 ">
            {title}
          </h3>
          <p className="text-sm text-base-content/70 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
