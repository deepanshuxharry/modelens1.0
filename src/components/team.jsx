import React, { useState, useEffect } from 'react';

const TeamSection = () => {
  const founders = [
    {
      name: "Kashish Raizada",
      position: "Founder & CEO",
      description: `
        In today's competitive market, standing out is essential for success. Brands, models, and photographers often struggle to create a unique and captivating visual presence that is within their budget and resources, and accessible in one place.
        
        At Modelens, we specialize in crafting stunning visuals. We help you tell your unique stories and connect with your audience through powerful visuals.

        Our collaborative approach ensures that everyone we work with receives personalized attention and customized solutions that truly reflect their essence.

        Our Vision is to transform your Ideas into striking visuals that captivate and resonate with your target audience.
      `,
    },
  ];

  const teamMembers = [
    {
      name: "Lavanya Khamani",
      position: "Co-Lead",
      image: "Lavanya Khamani_ Co-lead .jpg",
    },
    {
      name: "Sonia",
      position: "Co-Lead & Event Manager",
      image: "Sonia _ Co Lead & Event Manager .jpg",
    },
    {
      name: "Kanika",
      position: "Social Media Writer",
      image: "Kanika _ Social Media Writer .jpg",
    },
    {
      name: "Hardik",
      position: "Tech Manager & Web Developer",
      image: "Hardik manager.jpg",
      link: "https://www.linkedin.com/in/hardikchadha1/",
    },
    {
      name: "Darakhshan",
      position: "Web Developer and Designer",
      image: "Darakhshan web developer.jpg",
      link: "https://www.linkedin.com/in/darakhshan-zehra-6072ba257/",
    },
    {
      name: "Dhruv Jain",
      position: "Full Stack Developer",
      image: "Dhruv backend developer.jpg",
      link: "https://www.linkedin.com/in/dhruv-jain-7000b6227/",
    },
    {
      name: "Divya",
      position: "Web Developer and Designer",
      image: "Divya Web Developer.jpg",
      link: "https://www.linkedin.com/in/divya-chaudhary-327615285",
    },
  ];

  return (
    <div className="space-y-16 pb_6rem">
      {/* Heading Section */}
      <div className="text-center mt-20 mb-12">
        <h2 className="text-4xl font-bold ">Hi, We Are The Team Behind</h2>
        <h1 className="text-5xl font-extrabold text-purple-600 mt-4">Modelens!</h1>
      </div>

      {/* Founder Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-full h-96 bg-cover bg-top rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url('Kashish Raizada _ Founder & CEO.jpg')` ,
                    height: `444px` }}
                ></div>
                <div className="mt-4">
                  <h5 className="text-xl font-semibold ">{founder.name}</h5>
                  <p className="text-gray-600">{founder.position}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                {founder.description.split("\n").map((text, idx) => (
                  <p key={idx} className="text-white mb-4">{text}</p>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
              onClick={() => member.link && window.open(member.link, "_blank")}
            >
              <div className="w-full h-40 overflow-hidden h300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-bold text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
