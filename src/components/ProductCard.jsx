import React, { useState } from 'react'; 
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpg';
import img6 from '../assets/image6.jpg';
import img7 from '../assets/image7.jpg';
import img8 from '../assets/image8.jpg';
import img13 from '../assets/image13.jpg';
import img14 from '../assets/image14.jpg';
import img15 from '../assets/image15.jpg';
import img16 from '../assets/image16.jpg';

const ProductCard = () => {
  
  const [showMore, setShowMore] = useState(false);

  
  const allProducts = [
    { id: 1, img: img4, title: 'Graphic Design', dept: 'English Department', oldPrice: '16.48', newPrice: '6.48' },
    { id: 2, img: img5, title: 'Graphic Design', dept: 'English Department', oldPrice: '16.48', newPrice: '6.48' },
    { id: 3, img: img6, title: 'Graphic Design', dept: 'English Department', oldPrice: '16.48', newPrice: '6.48' },
    { id: 4, img: img7, title: 'Graphic Design', dept: 'English Department', oldPrice: '16.48', newPrice: '6.48' },
    { id: 5, img: img8, title: 'Graphic Design', dept: 'English Department', oldPrice: '16.48', newPrice: '6.48' },
    { id: 6, img: img4, title: 'Graphic Design', dept: 'English Department', oldPrice: '16.48', newPrice: '6.48' },
    { id: 7, img: img13, title: 'Graphic Design', dept: 'English Department', oldPrice: '16.48', newPrice: '6.48' },
    { id: 8, img: img14, title: 'Graphic Design', dept: 'English Department', oldPrice: '16.48', newPrice: '6.48' },
    { id: 9, img: img15, title: 'Graphic Design', dept: 'English Department', oldPrice: '16.48', newPrice: '6.48' },
    { id: 10, img: img16, title: 'Graphic Design', dept: 'English Department', oldPrice: '16.48', newPrice: '6.48' },
  ];

  
  const visibleProducts = showMore ? allProducts : allProducts.slice(0, 5);

  return (
    <section className="py-20 flex flex-col items-center bg-white w-full">
      
      <div className="text-center mb-10 px-6 lg:mb-20">
        <h4 className="text-[#737373] text-xl font-normal lg:text-2xl lg:mb-4 mb-2">Featured Products</h4>
        <h3 className="text-[#252B42] text-2xl lg:text-3xl font-bold mb-4 tracking-tight uppercase">BESTSELLER PRODUCTS</h3>
        <p className="text-[#737373] text-sm leading-[20px] max-w-[261px] lg:text-base lg:max-w-[450px] mx-auto">
          Problems trying to resolve the conflict between
        </p>
      </div>

      
      <div className="flex flex-col gap-[30px] items-center w-full px-4 lg:grid lg:grid-cols-5 lg:gap-x-30 lg:gap-y-20 lg:max-w-[1500px] lg:mx-auto">
        {allProducts.map((product, index) => (
          <div 
            key={product.id} 
            className={`${index >= 5 && !showMore ? 'hidden lg:block' : 'block'}`}
          >
            <ProductItem product={product} />
          </div>
        ))}
      </div>

      
      {!showMore && (
        <button 
          onClick={() => setShowMore(true)}
          className="mt-16 border-[1px] border-[#23A6F0] text-[#23A6F0] px-10 py-4 font-bold rounded-[5px] uppercase text-sm tracking-wider hover:bg-[#23A6F0] hover:text-white transition-all active:scale-95"
        >
          LOAD MORE PRODUCTS
        </button>
      )}

      {showMore && (
        <p className="mt-10 text-[#737373] font-medium italic">All products loaded. ✨</p>
      )}
    </section>
  );
};

const ProductItem = ({ product }) => (
  <div className="w-[345px] lg:max-w-[210px] flex flex-col items-center bg-white pb-8 transform transition-all hover:shadow-lg rounded-lg">
    <div className="w-full h-[470px] lg:h-[320px] lg:w-[240px] overflow-hidden">
      <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
    </div>
    <div className="mt-[25px] flex flex-col items-center gap-2.5">
      <h5 className="text-[#252B42] font-bold text-base">{product.title}</h5>
      <p className="text-[#737373] font-bold text-sm">{product.dept}</p>
      <div className="flex gap-2 font-bold text-base mt-1">
        <span className="text-[#BDBDBD]">${product.oldPrice}</span>
        <span className="text-[#23856D]">${product.newPrice}</span>
      </div>
    </div>
  </div>
);

export default ProductCard;