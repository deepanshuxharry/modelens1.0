import React from "react";

const ProcessSection = () => {
  const processSteps = [
    {
      number: 1,
      title: "Discuss",
      description: "Meet with clients to understand their needs and requirements.",
      animation: "fadeInRight",
    },
    {
      number: 2,
      title: "Plan",
      description: "Create a detailed plan and storyboard for the shoot.",
      animation: "fadeInRight",
    },
    {
      number: 3,
      title: "Shoot",
      description: "Execute the photoshoot with our professional team and equipment.",
      animation: "fadeInRight",
    },
    {
      number: 4,
      title: "Edit",
      description: "Edit and refine the images to ensure top-notch quality.",
      animation: "fadeInUp",
    },
    {
      number: 5,
      title: "Deliver",
      description: "Deliver the final product to the client, ready for use.",
      animation: "fadeInUp",
    },
  ];

  return (
    <section className="py-10 px-5 -100 text-center mb-10 mt-[65px]">
     <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-white mt-3">
        The Process - Behind The Scenes
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex-1 min-w-[200px] bg-white rounded-lg shadow-md p-5"
            data-animation={step.animation}
          >
            <div className="text-xl font-extrabold text-blue-500 mb-2 golcircle">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
