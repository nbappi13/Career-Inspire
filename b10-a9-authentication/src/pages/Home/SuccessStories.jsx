
import React from 'react';

const successStoriesData = [
  {
    id: 1,
    name: "Gill Bates",
    image: "https://i.ibb.co/sg74Gzj/Gill-Bates.webp",
    story: "With the guidance from Career Inspire, I successfully transitioned into a fulfilling career in tech!"
  },
  {
    id: 2,
    name: "Zark Muckerberg",
    image: "https://i.ibb.co/KXSNSpg/Zark-Muckerberg.jpg",
    story: "The personalized career resources helped me discover my passion and excel in my field."
  },
  {
    id: 3,
    name: "Mlon Eusk",
    image: "https://i.ibb.co/jyBq5t7/Mlon-Eusk.jpg",
    story: "Thanks to Career Inspire, I gained the confidence to pursue my dream job and landed it!"
  }
];

const SuccessStories = () => {
  return (
    <section className="success-stories-section py-16 px-4 md:px-8 lg:px-12">
      <h2 className="text-center text-4xl font-bold text-primary mb-8">Success Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {successStoriesData.map(({ id, name, image, story }) => (
          <div key={id} className="card shadow-lg border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-blue-100 hover:bg-gradient-to-br hover:from-blue-100 hover:to-orange-300 transition-all duration-300">
            <img
              src={image}
              alt={name}
              className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-center text-blue-700 mb-2">{name}</h3>
            <p className="text-sm text-center text-gray-600">{story}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
