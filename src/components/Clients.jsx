import React from 'react';
import hooli from '../assets/hooli.png'; 
import lyft from '../assets/lyft.png';
import piper from '../assets/piper.png';
import stripe from '../assets/stripe.png';
import aws from '../assets/aws.png';
import reddit from '../assets/reddit.png';

const Clients = () => {
  
  const logos = [
    { id: 1, src: hooli, name: 'Hooli', url: 'https://hooli.com' },
    { id: 2, src: lyft, name: 'Lyft', url: 'https://www.lyft.com' },
    { id: 3, src: piper, name: 'Pied Piper', url: 'https://www.piedpiper.com' },
    { id: 4, src: stripe, name: 'Stripe', url: 'https://www.stripe.com' },
    { id: 5, src: aws, name: 'AWS', url: 'https://aws.amazon.com' },
    { id: 6, src: reddit, name: 'Reddit', url: 'https://www.reddit.com' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-y-16 lg:gap-x-8">
          {logos.map((logo) => (
            
            <a 
              key={logo.id}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 lg:w-44 flex justify-center items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-w-full h-auto object-contain transform scale-115" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;