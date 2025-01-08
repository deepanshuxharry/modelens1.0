import React, { useState, useEffect } from 'react';
import client from "../sanity-config/sanityClient";

function ModelCard({ name, image, description, gallery }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="p-4 w-full">
        <div
          className="relative w-full h-[500px] group overflow-hidden rounded-2xl shadow-lg 
            transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsModalOpen(true)}
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
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-4 w-full h-full max-w-full max-h-full overflow-y-auto flex flex-col items-center justify-start"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">{name}'s Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full p-2 overflow-auto">
              {gallery.map((imgUrl, index) => (
                <div
                  key={index}
                  className="relative w-full h-48 md:h-72 lg:h-96 p-2"
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

function CategoryButton({ category, activeCategory, onClick }) {
  return (
    <div className="p-2">
      <button
        onClick={() => onClick(category)}
        className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300
          ${activeCategory === category 
            ? "bg-purple-600 text-white" 
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
      >
        {category}
      </button>
    </div>
  );
}

function OurModels() {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "models"] {
            name,
            category,
            "profileUrl": image.asset->url,
            description,
            "galleryUrls": gallery[].asset->url
          }`
        );
        setModels(result);
        setFilteredModels(result);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchModels();
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredModels(models);
    } else {
      setFilteredModels(models.filter(model => 
        model.category.toLowerCase() === category.toLowerCase()
      ));
    }
  };

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
    <div className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16 text-white">
          Our Models
        </h1>
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-16">
          {["all", "fresher", "intermediate", "experienced"].map((category) => (
            <CategoryButton 
              key={category}
              category={category} 
              activeCategory={activeCategory} 
              onClick={handleCategoryChange} 
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredModels.map((model, index) => (
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
    </div>
  );
}

export default OurModels;