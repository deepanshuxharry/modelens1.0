import React from 'react';

const GetInTouchForm = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-10 rounded-2xl shadow-lg max-w-4xl mx-auto mtb-80">
      <h2 className="text-3xl font-extrabold text-left text-gray-800 mb-6 md:text-4xl">
        Get in Touch
      </h2>
      <form
        action="https://formspree.io/f/your-form-id"  // Replace with your Formspree form endpoint  kr luga baad me kuldeep se puch 
        method="POST"
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div className="md:col-span-1">
          <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your full name"
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="mobileNo" className="block text-gray-700 font-medium mb-2">
            Mobile no.
          </label>
          <input
            type="tel"
            id="mobileNo"
            name="mobileNo"
            className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="organisationLink" className="block text-gray-700 font-medium mb-2">
            Organisation's link
          </label>
          <input
            type="url"
            id="organisationLink"
            name="organisationLink"
            className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your organisation's link"
          />
        </div>
        <div className="md:col-span-2">
          <p className="text-gray-700 font-medium mb-3">What services are you interested in?</p>
          <div className="flex flex-wrap gap-3">
            {['Brand Photoshoot', 'Modelling', 'Photography', 'Brand Consultant', 'Makeup', 'Others'].map((service) => (
              <label key={service} className="flex items-center bg-gray-100 px-3 py-2 rounded-full cursor-pointer hover:bg-blue-100">
                <input type="checkbox" name="services" value={service} className="hidden" />
                <span className="text-sm text-gray-600">{service}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="text-gray-700 font-medium mb-3">How did you hear about us?</p>
          <div className="flex gap-4">
            {['Instagram', 'LinkedIn', 'Referrals'].map((option) => (
              <label key={option} className="flex items-center bg-gray-100 px-3 py-2 rounded-full cursor-pointer hover:bg-blue-100">
                <input type="radio" name="referral" value={option} className="hidden" />
                <span className="text-sm text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Want to add any specific message?
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="md:col-span-2 flex justify-start">
          <button
            type="submit"
            className="bg-defaulty text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouchForm;
