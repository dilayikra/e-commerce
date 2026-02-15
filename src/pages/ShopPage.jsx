import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronRight, LayoutGrid, List } from 'lucide-react';
import Clients from '../components/Clients';
import { fetchProducts } from '../store/actions/productActions';

const ShopPage = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  
  
  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("");
  
  
  const [offset, setOffset] = useState(0);
  const limit = 25; 

  const { categories, productList, total, fetchState } = useSelector(state => state.product);

  
  useEffect(() => {
    setOffset(0); 
    dispatch(fetchProducts(categoryId, filterText, sortOption, limit, 0));
    
  }, [dispatch, categoryId, sortOption]);

  
  const handleLoadMore = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    dispatch(fetchProducts(categoryId, filterText, sortOption, limit, newOffset));
  };

  const top5Categories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setOffset(0); 
    dispatch(fetchProducts(categoryId, filterText, sortOption, limit, 0));
  };

  return (
    <div className="w-full font-montserrat">
      
      
      <div className="bg-[#FAFAFA] py-6 lg:py-10">
        <div className="container mx-auto px-10 flex flex-col lg:flex-row justify-between items-center gap-6 max-w-[1440px]">
          <h2 className="text-[#252B42] text-2xl font-bold">Shop</h2>
          <div className="flex items-center gap-4 text-sm font-bold">
            <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">Home</Link>
            <ChevronRight className="text-[#BDBDBD] w-5 h-5" />
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>

      {/* Kategoriler Kısmı */}
      <div className="bg-[#FAFAFA] pb-12">
        <div className="container mx-auto px-10 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {top5Categories.map((cat) => (
              <Link 
                key={cat.id}
                to={`/shop/${cat.gender === 'k' ? 'kadin' : 'erkek'}/${cat.title.toLowerCase()}/${cat.id}`} 
                className="relative aspect-square md:aspect-[4/5] overflow-hidden group"
              >
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center px-4">
                  <h5 className="text-base font-bold uppercase">{cat.title}</h5>
                  <p className="text-sm">Rating: {cat.rating}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      
      <div className="bg-white py-6">
        <div className="container mx-auto px-10 flex flex-col lg:flex-row justify-between items-center gap-8 max-w-[1440px]">
          <span className="text-[#737373] font-bold text-sm">
            Showing all {productList.length} of {total} results
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[#737373] font-bold text-sm">Views:</span>
            <button className="p-3 border border-[#ECECEC] rounded-md"><LayoutGrid size={18} /></button>
            <button className="p-3 border border-[#ECECEC] rounded-md"><List size={18} /></button>
          </div>
          
          <form onSubmit={handleFilterSubmit} className="flex flex-col md:flex-row items-center gap-4">
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] py-3 px-4 rounded-md text-sm"
            >
              <option value="">Sort By</option>
              <option value="price:asc">price:asc</option>
              <option value="price:desc">price:desc</option>
              <option value="rating:asc">rating:asc</option>
              <option value="rating:desc">rating:desc</option>
            </select>

            <input 
              type="text"
              placeholder="Filter products..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] py-3 px-4 rounded-md text-sm outline-none focus:border-[#23A6F0]"
            />
            
            <button type="submit" className="bg-[#23A6F0] text-white py-3 px-10 rounded-md text-sm font-bold hover:bg-[#1a8bc9] transition-all">
              Filter
            </button>
          </form>
        </div>
      </div>

      {/* ÜRÜN KARTLARI */}
      <div className="bg-white py-12 px-10">
        <div className="container mx-auto max-w-[1350px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {productList.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>

          {fetchState === 'FETCHING' && (
            <div className="flex flex-col items-center py-10 gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#23A6F0]"></div>
            </div>
          )}

          {fetchState === 'FAILED' && (
            <div className="text-center py-10 text-red-500 font-bold">
              Ürünler yüklenirken hata oluştu.
            </div>
          )}

          
          {productList.length < total && fetchState !== 'FETCHING' && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="bg-white text-[#23A6F0] border-2 border-[#23A6F0] py-3 px-8 rounded-md font-bold hover:bg-[#23A6F0] hover:text-white transition-all"
              >
                Load More Products
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-12 px-10">
        <div className="container mx-auto max-w-[1440px]"><Clients /></div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  
  const nameSlug = product.name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') 
    .replace(/[\s_-]+/g, '-') 
    .replace(/^-+|-+$/g, ''); 

  
  const gender = product.category_id % 2 === 0 ? "erkek" : "kadin";
  const categoryName = "urun-detay"; 

  return (
    <Link 
      to={`/shop/${gender}/${categoryName}/${product.category_id}/${nameSlug}/${product.id}`} 
      className="flex flex-col items-center text-center group h-full cursor-pointer"
    >
      <div className="w-full aspect-[3/4] mb-4 overflow-hidden bg-gray-100 rounded-sm">
        <img 
          src={product.images[0]?.url} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          alt={product.name} 
        />
      </div>
      <h5 className="text-[#252B42] font-bold text-base mb-2 line-clamp-1 group-hover:text-[#23A6F0] transition-colors">
        {product.name}
      </h5>
      <p className="text-[#737373] text-sm mb-3 line-clamp-2">
        {product.description}
      </p>
      <div className="flex gap-2 font-bold text-base mt-auto">
        <span className="text-[#BDBDBD]">${product.price}</span>
        <span className="text-[#23856D]">${(product.price * 0.9).toFixed(2)}</span>
      </div>
    </Link>
  );
};

export default ShopPage;