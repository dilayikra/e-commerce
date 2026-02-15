import React from 'react';
import { Link } from 'react-router-dom'; 

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const ShopCards = () => {
  const cards = [
    { id: 1, img: image1, title: 'Top Product Of the Week' },
    { id: 2, img: image2, title: 'Top Product Of the Week' },
    { id: 3, img: image3, title: 'Top Product Of the Week' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-8 lg:px-0 lg:max-w-[1840px]">
        <div className="flex flex-col gap-[15px] items-center lg:grid lg:grid-cols-[2fr_1.8fr] lg:gap-6 lg:items-stretch lg:auto-rows-min">
          {cards.map((card) => (
            
            <Link 
              to="/shop" 
              key={card.id} 
              className="relative w-full max-w-[345px] h-[556px] overflow-hidden group cursor-pointer lg:max-w-none lg:h-auto lg:first:row-span-2 
              lg:first:aspect-[3/3]
              lg:aspect-[18/9]"
            >
              
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              
              <div className="absolute bottom-0 left-0 w-full bg-[#23A6F0]/75 p-10 flex flex-col items-start gap-4
               lg:w-[70%] lg:bottom-0 lg:py-16 lg:left-0 lg:p-8">
                <h3 className="text-white text-2xl font-bold leading-8 w-2/3 lg:w-full">
                  {card.title}
                </h3>
                
                <div className="border border-white text-white px-6 py-3 font-bold text-sm uppercase group-hover:bg-white group-hover:text-[#23A6F0] transition-colors inline-block">
                  Explore Items
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCards;