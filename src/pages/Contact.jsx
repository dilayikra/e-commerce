import React from 'react';
import { Link } from 'react-router-dom';
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  MapPin,
  Mail,
  ArrowDown,
} from 'lucide-react';

import familypic from '../assets/familypic.png';

const Contact = () => {
  return (
    <div className="w-full font-montserrat bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="container mx-auto px-10 py-16 pt-2 flex flex-col lg:flex-row items-center text-center lg:text-left lg:justify-between lg:min-h-[800px]">

        {/* Yazı Kısmı */}
        <div className="flex flex-col items-center lg:items-start z-20">
          <h5 className="text-[#252B42] font-bold tracking-[0.1px] mb-10 uppercase text-2xl lg:text-base">
            CONTACT US
          </h5>

          <h1 className="text-[#252B42] text-[55px] lg:text-[58px] leading-[50px] lg:leading-[80px] font-bold mb-10">
            Get in touch today!
          </h1>

          <p className="text-[#737373] text-[28px] lg:text-xl leading-[30px] mb-10 max-w-[320px] lg:max-w-[370px] mt-6">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>

          <div className="flex flex-col gap-2 mt-6 mb-10">
            <h4 className="text-[#252B42] font-bold leading-8 text-[28px] lg:text-2xl">
              Phone ; +451 215 215
            </h4>
            <h4 className="text-[#252B42] font-bold leading-8 mt-6 text-[28px] lg:text-2xl lg:mt-2">
              Fax : +451 215 215
            </h4>
          </div>

          <div className="flex gap-13 lg:gap-8 mb-16 mt-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter
                className="w-[36px] h-[36px] lg:w-[30px] lg:h-[30px] text-[#252B42] cursor-pointer hover:text-[#23A6F0] transition-colors"
                strokeWidth={2.5}
              />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook
                className="w-[36px] h-[36px] lg:w-[30px] lg:h-[30px] text-[#252B42] cursor-pointer hover:text-[#23A6F0] transition-colors"
                strokeWidth={2.5}
              />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram
                className="w-[36px] h-[36px] lg:w-[30px] lg:h-[30px] text-[#252B42] cursor-pointer hover:text-[#23A6F0] transition-colors"
                strokeWidth={2.5}
              />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin
                className="w-[36px] h-[36px] lg:w-[30px] lg:h-[30px] text-[#252B42] cursor-pointer hover:text-[#23A6F0] transition-colors"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </div>

        {/* Görsel Alan */}
        <div className="relative w-full max-w-[1000px] lg:w-1/2 flex justify-center items-center overflow-visible lg:mt-0">

          {/* sol üst pembe */}
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
            src={familypic}
            alt="Family shopping"
            className="w-[800px] lg:w-[1270px] max-w-none h-auto object-contain relative z-10 mt-20 lg:mt-0"
          />
        </div>
      </section>

      {/* VISIT OUR OFFICE */}
      <section className="bg-[#FAFAFA] py-20 flex flex-col items-center px-10">
        <div className="text-center mb-20">
          <h6 className="text-[#252B42] font-bold text-sm mb-4 uppercase">
            VISIT OUR OFFICE
          </h6>

          <h2 className="text-[#252B42] text-[40px] leading-[50px] font-bold max-w-[350px] lg:max-w-[550px] mx-auto">
            We help small businesses with big ideas
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 w-full max-w-[400px] lg:max-w-[1200px]">

          {/* Kart 1 */}
          <div className="bg-white p-16 lg:p-12 flex flex-col items-center text-center gap-4 w-full lg:scale-110">
            <Phone size={72} className="text-[#23A6F0]" strokeWidth={1} />
            <div className="text-[#252B42] font-bold text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <h5 className="text-[#252B42] font-bold text-base mt-4">Get Support</h5>
            <a href="mailto:georgia.young@example.com?subject=Support Request" className="w-full flex justify-center">
              <button className="border border-[#23A6F0] text-[#23A6F0] px-9 py-4 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all cursor-pointer active:scale-95">
                Submit Request
              </button>
            </a>
          </div>

          {/* Kart 2 */}
          <div className="bg-[#252B42] p-20 lg:py-24 flex flex-col items-center text-center gap-4 scale-y-110 lg:scale-110 relative z-20 w-full">
            <MapPin size={72} className="text-[#23A6F0]" strokeWidth={1} />
            <div className="text-white font-bold text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <h5 className="text-white font-bold text-base mt-4">Get Support</h5>
            <a href="mailto:georgia.young@example.com?subject=Support Request" className="w-full flex justify-center">
              <button className="border border-[#23A6F0] text-[#23A6F0] px-9 py-4 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all cursor-pointer active:scale-95">
                Submit Request
              </button>
            </a>
          </div>

          {/* Kart 3 */}
          <div className="bg-white p-16 lg:p-12 flex flex-col items-center text-center gap-4 w-full lg:scale-110">
            <Mail size={72} className="text-[#23A6F0]" strokeWidth={1} />
            <div className="text-[#252B42] font-bold text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <h5 className="text-[#252B42] font-bold text-base mt-4">Get Support</h5>
            <a href="mailto:georgia.young@example.com?subject=Support Request" className="w-full flex justify-center">
              <button className="border border-[#23A6F0] text-[#23A6F0] px-9 py-4 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all cursor-pointer active:scale-95">
                Submit Request
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 flex flex-col items-center text-center px-10">
        <ArrowDown size={72} className="text-[#23A6F0] mb-8" strokeWidth={2} />
        <h6 className="text-[#252B42] font-bold text-base mb-4 uppercase">
          WE Can't WAIT TO MEET YOU
        </h6>
        <h2 className="text-[#252B42] text-[58px] font-bold mb-8">
          Let’s Talk
        </h2>

        <Link to="/signup">
          <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-[#1b85c1] transition-all cursor-pointer active:scale-95 shadow-md hover:shadow-lg">
            Try it free now
          </button>
        </Link>
      </section>

    </div>
  );
};

export default Contact;
