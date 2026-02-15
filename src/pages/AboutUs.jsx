import React from 'react';
import { Link } from 'react-router-dom';

import { Play, Facebook, Instagram, Twitter } from 'lucide-react';

import about1 from '../assets/about1.png';
import videoCard from '../assets/videoCard.jpg';
import team11 from '../assets/team11.jpg';
import team12 from '../assets/team12.jpg';
import team9 from '../assets/team9.jpg';
import cloths13 from '../assets/cloths13.jpg';

import hooli from '../assets/hooli.png';
import lyft from '../assets/lyft.png';
import piper from '../assets/piper.png';
import stripe from '../assets/stripe.png';
import aws from '../assets/aws.png';
import reddit from '../assets/reddit.png';

const AboutUs = () => {
  return (
    <div className="w-full font-montserrat bg-white">

      {/* HERO */}
      <section className="container mx-auto px-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="text-center lg:text-left lg:max-w-[50%] lg:-mt-40">
          <h5 className="hidden lg:block text-[#252B42] font-bold text-base lg:text-[25px] mb-8">
            ABOUT COMPANY
          </h5>

          <h1 className="text-[#252B42] text-[40px] lg:text-[70px] font-bold mb-8">
            ABOUT US
          </h1>

          <p className="text-[#737373] text-2xl mb-10 max-w-[350px] mx-auto lg:mx-0">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>

          <Link to="/contact">
            <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-xl cursor-pointer hover:bg-[#1a7bb3] transition-all active:scale-95">
              Get Quote Now
            </button>
          </Link>
        </div>

        <div className="relative w-full max-w-[1000px] lg:w-1/2 flex justify-center items-center overflow-visible lg:mt-0">

          {/* sol üst küçük pembe */}
          <div className="absolute top-[20%] left-[1%] w-[50px] h-[50px] bg-[#FFE9EA] rounded-full lg:w-[80px] lg:h-[80px] lg:top-[5%] z-0"></div>

          {/* büyük orta pembe */}
          <div className="absolute bottom-[19%] right-[5%] w-[400px] h-[400px] lg:w-[590px] lg:h-[590px] lg:right-[8%] lg:top-[1%] bg-[#FFE9EA] rounded-full z-0"></div>

          {/* sağ alt pembe */}
          <div className="absolute bottom-[40%] right-[-20px] w-[25px] h-[25px] bg-[#FFE9EA] rounded-full lg:w-[50px] lg:h-[50px] lg:top-[40%] z-0"></div>

          {/* sol mor */}
          <div className="absolute bottom-[27%] left-[0%] w-[10px] h-[10px] bg-[#977DF4] rounded-full lg:w-[20px] lg:h-[20px] lg:top-[65%] z-0"></div>

          {/* sağ mor */}
          <div className="absolute top-[30%] right-[0%] w-[10px] h-[10px] bg-[#977DF4] rounded-full lg:top-[20%] lg:w-[20px] lg:h-[20px] z-0"></div>

          <img
            src={about1}
            alt="About Hero"
            className="w-[800px] lg:w-[1270px] max-w-none h-auto object-contain relative z-10 mt-20 lg:mt-0"
          />
        </div>
      </section>

      {/* PROBLEMS & DESCRIPTION */}
      <section className="container mx-auto px-10 py-16 flex flex-col lg:flex-row items-center gap-10 text-center lg:text-left">
        <div className="lg:w-1/3 max-w-[320px] lg:max-w-none mx-auto lg:mx-0">
          <h6 className="text-[#E74040] text-[15px] mb-4 lg:text-[25px]">
            Problems trying
          </h6>
          <h3 className="text-[#252B42] text-2xl font-bold lg:text-[28px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>

        <div className="lg:w-2/3 max-w-[420px] lg:max-w-none mx-auto lg:mx-0 lg:ml-30">
          <p className="text-[#737373] text-[17px lg:text-[25px]">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>

      {/* İSTATİSTİKLER */}
      <section className="container mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {[
          ['15K', 'Happy Customers'],
          ['150K', 'Monthly Visitors'],
          ['15', 'Countries Worldwide'],
          ['100+', 'Top Partners'],
        ].map(([value, label], i) => (
          <div key={i}>
            <h2 className="text-[#252B42] text-[58px] font-bold">{value}</h2>
            <h5 className="text-[#737373] font-bold">{label}</h5>
          </div>
        ))}
      </section>

      {/* VIDEO */}
      <section className="container mx-auto px-6 lg:px-10 py-20 flex justify-center items-center">
        <div className="relative group cursor-pointer w-full max-w-[989px]">
          <div className="overflow-hidden rounded-[20px] shadow-2xl relative">
            <img
              src={videoCard}
              alt="Video Thumbnail"
              className="w-full h-[300px] lg:h-[540px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
          </div>

          <a
            href="https://www.youtube.com/watch?v=wAmbDCJocJM"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#23A6F0] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300">
              <Play size={32} fill="currentColor" />
            </div>
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section className="container mx-auto px-10 py-16 text-center">
        <div className="mb-16">
          <h2 className="text-[#252B42] text-[40px] font-bold mb-4">Meet Our Team</h2>
          <p className="text-[#737373] text-[20px] max-w-[440px] mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-10">
          {[team11, team12, team9].map((img, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-[316px] h-[231px] mb-6 overflow-hidden">
                <img src={img} alt="Team Member" className="w-full h-full object-cover" />
              </div>

              <h5 className="text-[#252B42] font-bold text-base mb-2">Username</h5>
              <h6 className="text-[#737373] font-bold text-sm mb-4">Profession</h6>

              <div className="flex gap-4 text-[#23A6F0]">
                <Facebook size={24} fill="currentColor" stroke="none" />
                <Instagram size={24} />
                <Twitter size={24} fill="currentColor" stroke="none" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK WITH US */}
      <section className="w-full bg-[#2A7CC7] flex flex-col lg:flex-row items-stretch overflow-hidden">
        <div className="w-full lg:w-[60%] flex items-center justify-center py-20 lg:py-48 px-6 lg:px-40">
          <div className="text-white text-center lg:text-left">
            <h5 className="font-bold text-base mb-6 tracking-[0.1px]">WORK WITH US</h5>

            <h2 className="text-[40px] lg:text-[58px] font-bold mb-6 leading-tight">
              Now Let’s grow Yours
            </h2>

            <p className="text-[20px] lg:text-base mb-8 max-w-[440px] mx-auto lg:mx-0 opacity-90">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
            </p>

            <Link to="/signup">
              <button className="border border-white text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-white hover:text-[#2A7CC7] transition-all">
                Button
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden lg:block lg:w-[40%] relative">
          <img
            src={cloths13}
            alt="Work with us"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
