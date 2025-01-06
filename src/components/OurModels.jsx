import React, { useState, useEffect } from 'react';
import client from "../sanity-config/sanityClient";

function ModelCard({ name, image, description, gallery }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-80 h-[500px] group overflow-hidden rounded-2xl shadow-lg 
          transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)} // Open modal on click
      >
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 
              group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
          <h3
            className={`text-3xl font-bold mb-2 transition-all duration-500 
            ${isHovered ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          >
            {name}
          </h3>
        </div>
      </div>

      {/* Modal */}
      {/* {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{name}'s Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`${name} gallery ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                />
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 bg-purple-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )} */}

{isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 "
    onClick={() => setIsModalOpen(false)}
  >
    <div
      className="bg-white p-4 w-full h-full max-w-full max-h-full overflow-y-auto flex flex-col items-center justify-start"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-4xl font-bold text-center text-white mb-6">{name}'s Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full p-2 overflow-auto">
        {gallery.map((imgUrl, index) => (
          <div
            key={index}
            className="relative w-full h-48 md:h-72 lg:h-96"
          >
            <img
              src={imgUrl}
              alt={`${name} gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-6 right-6 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
)}


      
    </>
  );
}

function OurModels() {
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "models"] {
            name,
            "profileUrl": image.asset->url,
            description,
            "galleryUrls": gallery[].asset->url
          }`
        );
        setModels(result);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchModels();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-2xl text-gray-600">Loading models...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-2xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 pb_6rem">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-15 text-white">
        Our Models
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {models.map((model, index) => (
          <ModelCard
            key={index}
            name={model.name}
            image={model.profileUrl}
            description={model.description}
            gallery={model.galleryUrls}
          />
        ))}
      </div>
    </div>
  );
}

export default OurModels;
