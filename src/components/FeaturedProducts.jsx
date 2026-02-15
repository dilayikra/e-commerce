import React from 'react';

const FeaturedProducts = () => {
  const features = [
    {
      id: 1,
      title: "Easy Wins",
      description: "Get your best looking smile now!",
      icon: "📖", 
    },
    {
      id: 2,
      title: "Concrete",
      description: "Defalcate is most focused in helping you discover your most beautiful smile",
      icon: "🧾", 
    },
    {
      id: 3,
      title: "Hack Growth",
      description: "Overcame any hurdle or any other problem.",
      icon: "📈", 
    }
  ];

  return (
    <section className="bg-white py-20 px-10 flex flex-col items-center mx-auto lg:max-w-[1050px] lg:px-0">
      
      {/* Üst Başlıklar Kısmı*/}
      <div className="text-center mb-20 flex flex-col gap-2">
        <h4 className="text-[#737373] text-xl lg:text-2xl  tracking-[0.1px]">
          Featured Products
        </h4>
        <h2 className="text-[#252B42] text-2xl lg:text-2xl font-bold tracking-[0.1px] uppercase">
          THE BEST SERVICES
        </h2>
        <p className="text-[#737373] text-sm lg:text-xl leading-[20px] max-w-[230px] mx-auto mt-2 lg:max-w-none">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Özellikler*/}
      <div className="flex flex-col gap-20 w-full lg:flex-row lg:justify-between lg:gap-70">
        {features.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center gap-5 lg:flex-1">
            
            <div className="text-[#23A6F0] text-7xl mb-2">
              {item.icon}
            </div>
            
            {/* Metinler*/}
            <h3 className="text-[#252B42] text-2xl font-bold tracking-[0.1px]">
              {item.title}
            </h3>
            <p className="text-[#737373] text-sm lg:text-xl leading-[20px] max-w-[220px] lg:text-sm lg:px-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FeaturedProducts;