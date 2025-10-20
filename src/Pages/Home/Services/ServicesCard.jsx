import React from 'react';

const ServicesCard = ({ service }) => {
     const { icon: Icon, title, description } = service;
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl hover:bg-green-500 transition duration-300 p-4">
      <div className="flex items-center text-primary text-4xl mb-4">
        <Icon />
      </div>
      <h2 className="card-title text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    );
};

export default ServicesCard;