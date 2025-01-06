import React from 'react';

const ServiceCard = ({ image, title, description, className = '' }) => {
  return (
    <div
      className={`relative overflow-hidden mt-[170px] rounded-lg shadow-md bg-white transform transition-all duration-300 hover:shadow-xl group ${className}`}
      style={{ width: '320px', height: '400px' }} // Fixed dimensions for all cards
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4 transition-transform duration-300 group-hover:scale-105">
        <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-3xl transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-200 text-sm group-hover:text-base transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServiceCards = () => {
  return (
<>
<div className="bg-gradient-to-br from-[#000] via-[#000] to-[#000] text-white py-16 pb_6rem ">
  {/* Centered Heading */}
  <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-[-100px] text-white">
  Our Services
  </h1>

  {/* Service Cards */}
  <div className="flex flex-wrap justify-center gap-10">
    <ServiceCard
      image="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
      title="Models"
      description="Connect with professional model"
      className="group"
    />
    <ServiceCard
      image="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
      title="Photographers"
      description="Find expert photographers to capture"
      className="group"
    />
    <ServiceCard
      image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
      title="Makeup Artists"
      description="Hire talented makeup"
      className="group"
    />
  </div>
</div>

    </>
  );
};

export default ServiceCards;
