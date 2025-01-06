import React from "react";

const WorkGallery = () => {
  const galleryItems = [
    { src: "sourin.jpg", artist: "Sourin India Handbags Photoshoot" },
    // { src: "deepti1.jpg", artist: "Deepti" },
    { src: "Blysk.jpg", artist: "Blysk Jewelleries Photoshoot" },
    // { src: "karansingh1.jpg", artist: "Karan Singh" }, 
    { src: "w2.jpg", artist: "Kanika" },
    { src: "w3.JPG", artist: "Bridal" },
    
  ];

  const services = [
    {
      href: "#models",
      src: "https://source.unsplash.com/400x400/?model",
      alt: "Models",
      label: "Models",
    },
    {
      href: "#photographers",
      src: "https://source.unsplash.com/400x400/?photography",
      alt: "Photographers",
      label: "Photographers",
    },
    {
      href: "#makeup-artists",
      src: "https://source.unsplash.com/400x400/?makeup",
      alt: "Makeup Artists",
      label: "Makeup Artists",
    },
  ];

  return (
    <div>
      {/* Work Gallery Section */}
      <section className="mt-10">
        <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-3 text-white">Work Gallery</h1>
          <p className=" text-center mb-8 mb-15">
            Explore our portfolio showcasing the finest work from our talented team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-lg group h400 pot`}
              >
                <img
                  src={item.src}
                  alt={item.artist}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gray-300 bg-opacity-90 py-2 text-center hidden group-hover:flex flex-col items-center justify-center transition-opacity duration-500">
                  <span className="text-lg font-semibold text-gray-800 uppercase">
                    {item.artist}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default WorkGallery;
