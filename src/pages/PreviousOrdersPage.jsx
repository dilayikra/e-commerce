import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  ChevronDown, 
  ChevronUp, 
  Package, 
  CreditCard, 
  MapPin, 
  ShoppingBag,
  Calendar
} from 'lucide-react';

const PreviousOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const headers = { Authorization: token };
    axios.get('https://workintech-fe-ecommerce.onrender.com/order', { headers })
      .then(res => {
        
        setOrders(Array.isArray(res.data) ? res.data.reverse() : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Siparişler çekilemedi:", err);
        setLoading(false);
      });
  }, [token]);

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-montserrat">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF8A00]"></div>
        <span className="ml-4 text-gray-600 font-bold">Siparişlerin yükleniyor kanka...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-12 px-4 lg:px-32 font-montserrat">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-[#252B42] mb-10 flex items-center gap-4">
          <div className="bg-[#FF8A00] p-2 rounded-lg text-white">
            <ShoppingBag size={28} />
          </div>
          Geçmiş Siparişlerim
        </h1>

        <div className="space-y-6">
          {orders.length === 0 ? (
            <div className="bg-white p-16 rounded-2xl shadow-sm text-center border-2 border-dashed border-gray-200">
              <Package size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-xl font-bold text-gray-500">Henüz hiç siparişin yok kanka.</p>
              <p className="text-gray-400 mt-2">Hemen alışverişe başlayıp buraları şenlendirebilirsin!</p>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-[#ECECEC] overflow-hidden transition-all hover:shadow-md">
                
                {/* SİPARİŞ ÖZETİ (Üst Kısım) */}
                <div 
                  onClick={() => toggleOrder(order.id)}
                  className="p-6 cursor-pointer flex flex-wrap items-center justify-between gap-6 hover:bg-orange-50/20 transition-colors"
                >
                  <div className="flex flex-wrap gap-8 items-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Sipariş Tarihi</span>
                      <div className="flex items-center gap-1 text-[#252B42] font-bold">
                        <Calendar size={14} className="text-[#FF8A00]" />
                        <span className="text-sm">{new Date(order.order_date).toLocaleDateString('tr-TR')}</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Sipariş Özeti</span>
                      <span className="text-sm font-bold text-gray-600">{order.products?.length || 0} Ürün</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Toplam Tutar</span>
                      <span className="text-sm font-black text-[#FF8A00]">{order.price.toFixed(2)} TL</span>
                    </div>

                    <div className="hidden sm:flex flex-col border-l pl-8 border-gray-100">
                      <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest text-center">Durum</span>
                      <span className="text-[11px] bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">Hazırlanıyor</span>
                    </div>
                  </div>
                  
                  <div className={`p-2 rounded-full transition-all ${expandedOrder === order.id ? "bg-[#FF8A00] text-white rotate-180" : "bg-gray-100 text-gray-400"}`}>
                    <ChevronDown size={24} />
                  </div>
                </div>

                {/* SİPARİŞ DETAYLARI */}
                {expandedOrder === order.id && (
                  <div className="p-8 bg-[#FAFAFA] border-t border-[#ECECEC] animate-in slide-in-from-top-4 duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                      
                      {/* Ürün Listesi  */}
                      <div className="lg:col-span-8">
                        <h4 className="font-bold text-[#252B42] flex items-center gap-2 mb-6 border-b pb-2">
                          <Package size={18} className="text-[#FF8A00]" /> Sipariş İçeriği
                        </h4>
                        <div className="space-y-4">
                          {order.products?.map((prod, idx) => (
                            <div key={idx} className="flex items-center gap-5 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                              <div className="w-16 h-16 bg-[#F3F3F3] rounded-lg flex items-center justify-center text-[#BDBDBD]">
                                <Package size={24} />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-bold text-[#252B42] leading-tight mb-1">{prod.detail || "Ürün Detayı Belirtilmemiş"}</p>
                                <div className="flex items-center gap-3">
                                   <span className="text-xs font-bold text-gray-400">Adet: <span className="text-[#252B42]">{prod.count}</span></span>
                                   <span className="text-xs font-bold text-gray-400">ID: <span className="text-[#252B42]">{prod.product_id}</span></span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      
                      <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                          <h4 className="font-bold text-[#252B42] flex items-center gap-2 mb-4 text-sm">
                            <CreditCard size={16} className="text-[#FF8A00]" /> Ödeme Bilgisi
                          </h4>
                          <div className="space-y-2">
                            <p className="text-xs font-bold text-gray-500 uppercase">Kart Sahibi</p>
                            <p className="text-sm font-bold text-[#252B42]">{order.card_name}</p>
                            <p className="text-xs font-bold text-gray-500 uppercase mt-3">Kart Numarası</p>
                            <p className="text-sm font-medium text-gray-700">**** **** **** {String(order.card_no).slice(-4)}</p>
                          </div>
                        </div>

                        <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
                           <h4 className="font-bold text-[#FF8A00] flex items-center gap-2 mb-3 text-sm">
                            <MapPin size={16} /> Teslimat Bilgisi
                          </h4>
                          <p className="text-xs text-orange-800 leading-relaxed font-medium">
                            Siparişiniz belirtilen adrese teslim edilmek üzere işleme alınmıştır. Detaylı adres bilgisi için adreslerim sayfasını ziyaret edebilirsiniz.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviousOrdersPage;