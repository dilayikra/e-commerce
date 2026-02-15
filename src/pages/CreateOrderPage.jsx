import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Plus, Trash2, Edit2, ChevronRight, X, CreditCard, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const CreateOrderPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [cards, setCards] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const [selectedShippingAddr, setSelectedShippingAddr] = useState(null);
  const [selectedBillingAddr, setSelectedBillingAddr] = useState(null);
  const [isSameAddress, setIsSameAddress] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [is3DSecure, setIs3DSecure] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [editingCard, setEditingCard] = useState(null);
  const [activeTab, setActiveTab] = useState("address");

  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const cart = useSelector((state) => state.shoppingCart.cart);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      history.push("/login");
      return;
    }

    const headers = { Authorization: token };
    axios.get('https://workintech-fe-ecommerce.onrender.com/user/address', { headers })
      .then(res => {
        setAddresses(res.data);
        if (res.data.length > 0) {
          setSelectedShippingAddr(res.data[0].id);
          setSelectedBillingAddr(res.data[0].id);
        }
      });

    axios.get('https://workintech-fe-ecommerce.onrender.com/user/card', { headers })
      .then(res => {
        setCards(res.data);
        if (res.data.length > 0) setSelectedCard(res.data[0].id);
      });
  }, [token, history]);

  // --- ADRES İŞLEMLERİ  ---
  const handleEditAddress = (addr) => {
    setEditingAddress(addr);
    setShowAddressForm(true);
    Object.keys(addr).forEach(key => setValue(key, addr[key]));
  };

  const onSubmitAddress = (data) => {
    const headers = { Authorization: token };
    if (editingAddress) {
      axios.put('https://workintech-fe-ecommerce.onrender.com/user/address', { ...data, id: editingAddress.id }, { headers })
        .then(res => {
          setAddresses(addresses.map(a => a.id === editingAddress.id ? (Array.isArray(res.data) ? res.data[0] : res.data) : a));
          setShowAddressForm(false);
          setEditingAddress(null);
          reset();
        });
    } else {
      axios.post('https://workintech-fe-ecommerce.onrender.com/user/address', data, { headers })
        .then(res => {
          setAddresses([...addresses, Array.isArray(res.data) ? res.data[0] : res.data]);
          setShowAddressForm(false);
          reset();
        });
    }
  };

  const deleteAddress = (id) => {
    if (window.confirm("Bu adresi silmek istediğine emin misin?")) {
      axios.delete(`https://workintech-fe-ecommerce.onrender.com/user/address/${id}`, { headers: { Authorization: token } })
        .then(() => setAddresses(addresses.filter(a => a.id !== id)));
    }
  };

  // --- KART İŞLEMLERİ ---
  const handleEditCard = (card) => {
    setEditingCard(card);
    setShowCardForm(true);
    setValue("card_no", card.card_no);
    setValue("name_on_card", card.name_on_card);
    setValue("expire_month", card.expire_month);
    setValue("expire_year", card.expire_year);
  };

  const onSubmitCard = (data) => {
    const headers = { Authorization: token };
    const cardPayload = {
      card_no: data.card_no,
      expire_month: parseInt(data.expire_month),
      expire_year: parseInt(data.expire_year),
      name_on_card: data.name_on_card
    };

    if (editingCard) {
      axios.put('https://workintech-fe-ecommerce.onrender.com/user/card', { ...cardPayload, id: editingCard.id }, { headers })
        .then(res => {
          setCards(cards.map(c => c.id === editingCard.id ? (Array.isArray(res.data) ? res.data[0] : res.data) : c));
          setShowCardForm(false);
          setEditingCard(null);
          reset();
        });
    } else {
      axios.post('https://workintech-fe-ecommerce.onrender.com/user/card', cardPayload, { headers })
        .then(res => {
          setCards([...cards, Array.isArray(res.data) ? res.data[0] : res.data]);
          setShowCardForm(false);
          reset();
        });
    }
  };

  const deleteCard = (id) => {
    if (window.confirm("Kartı silmek istediğine emin misin?")) {
      axios.delete(`https://workintech-fe-ecommerce.onrender.com/user/card/${id}`, { headers: { Authorization: token } })
        .then(() => setCards(cards.filter(c => c.id !== id)));
    }
  };

  // --- SİPARİŞİ TAMAMLA  ---
  const handleCreateOrder = () => {
    const selectedCardInfo = cards.find(c => c.id === selectedCard);
    
    if (!selectedShippingAddr || !selectedCardInfo) {
      alert("Lütfen adres ve kart seçiminizi kontrol edin.");
      return;
    }

    const orderPayload = {
      address_id: selectedShippingAddr,
      order_date: new Date().toISOString().slice(0, 19), 
      card_no: Number(selectedCardInfo.card_no),
      card_name: selectedCardInfo.name_on_card,
      card_expire_month: selectedCardInfo.expire_month,
      card_expire_year: selectedCardInfo.expire_year,
      card_ccv: 321, 
      price: finalTotal,
      products: cart.filter(item => item.checked).map(item => ({
        product_id: item.product.id,
        count: item.count,
        detail: item.product.name 
      }))
    };

    axios.post('https://workintech-fe-ecommerce.onrender.com/order', orderPayload, {
      headers: { Authorization: token }
    })
    .then(() => {
      alert("🎉 Siparişin başarıyla oluşturuldu! Tebrikler kanka.");
      
      history.push("/thanks"); 
    })
    .catch(err => {
      console.error("Sipariş hatası:", err);
      alert("Sipariş verilirken bir sorun oluştu.");
    });
  };

  // Hesaplamalar
  const totalAmount = cart.filter(item => item.checked).reduce((total, item) => total + (item.count * item.product.price), 0);
  const shippingFee = totalAmount > 0 ? 29.99 : 0;
  const isFreeShipping = totalAmount > 150;
  const finalTotal = isFreeShipping ? totalAmount : (totalAmount + shippingFee);

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-10 px-4 lg:px-20 font-montserrat">
      
      
      {showAddressForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl">
            <button onClick={() => {setShowAddressForm(false); setEditingAddress(null); reset();}} className="absolute right-6 top-6 text-gray-400 hover:text-black"><X size={28} /></button>
            <h2 className="text-2xl font-bold mb-8 text-[#252B42] border-b pb-4">{editingAddress ? "Adresi Güncelle" : "Yeni Adres Ekle"}</h2>
            <form onSubmit={handleSubmit(onSubmitAddress)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-[#252B42] mb-2">Adres Başlığı</label>
                <input {...register("title", { required: true })} placeholder="Örn: Ev Adresim" className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#FF8A00] outline-none" />
              </div>
              <input {...register("name", { required: true })} placeholder="Ad" className="w-full border p-3 rounded-lg" />
              <input {...register("surname", { required: true })} placeholder="Soyad" className="w-full border p-3 rounded-lg" />
              <input {...register("phone", { required: true })} placeholder="Telefon (05xx...)" className="w-full border p-3 rounded-lg" />
              <select {...register("city", { required: true })} className="w-full border p-3 rounded-lg">
                <option value="">Şehir Seçiniz</option>
                <option value="istanbul">İstanbul</option><option value="ankara">Ankara</option><option value="izmir">İzmir</option>
              </select>
              <input {...register("district", { required: true })} placeholder="İlçe" className="w-full border p-3 rounded-lg" />
              <div className="md:col-span-2">
                <textarea {...register("neighborhood", { required: true })} rows="3" placeholder="Mahalle, Sokak ve No Detayları" className="w-full border p-3 rounded-lg"></textarea>
              </div>
              <button type="submit" className="md:col-span-2 bg-[#FF8A00] text-white font-bold py-4 rounded-lg shadow-lg hover:bg-[#e67c00]">Kaydet</button>
            </form>
          </div>
        </div>
      )}

      {/* KART FORMU */}
      {showCardForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-md p-8 relative shadow-2xl">
            <button onClick={() => {setShowCardForm(false); setEditingCard(null); reset();}} className="absolute right-6 top-6 text-gray-400 hover:text-black"><X size={28} /></button>
            <h2 className="text-2xl font-bold mb-8 text-[#252B42] border-b pb-4">{editingCard ? "Kartı Güncelle" : "Yeni Kart Ekle"}</h2>
            <form onSubmit={handleSubmit(onSubmitCard)} className="space-y-5">
              <div>
                <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Kart Numarası</label>
                <input {...register("card_no", { required: true, minLength: 16, maxLength: 16 })} placeholder="**** **** **** ****" className="w-full border-2 p-3 rounded-lg focus:border-[#FF8A00] outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Kart Üzerindeki İsim</label>
                <input {...register("name_on_card", { required: true })} placeholder="Ad Soyad" className="w-full border-2 p-3 rounded-lg focus:border-[#FF8A00] outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Son Kullanma</label>
                  <div className="flex gap-2">
                    <select {...register("expire_month", { required: true })} className="flex-1 border-2 p-3 rounded-lg">
                      {Array.from({length: 12}, (_, i) => <option key={i+1} value={i+1}>{i+1 < 10 ? `0${i+1}` : i+1}</option>)}
                    </select>
                    <select {...register("expire_year", { required: true })} className="flex-1 border-2 p-3 rounded-lg">
                      {Array.from({length: 15}, (_, i) => <option key={i} value={2024+i}>{2024+i}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 uppercase text-gray-500">CVV</label>
                  <input type="password" maxLength="3" placeholder="***" className="w-full border-2 p-3 rounded-lg focus:border-[#FF8A00] outline-none" />
                </div>
              </div>
              <button type="submit" className="w-full bg-[#FF8A00] text-white font-bold py-4 rounded-lg shadow-lg hover:bg-[#e67c00]">Kartı Kaydet</button>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-[3]">
          {/* TAB MENÜSÜ */}
          <div className="flex gap-4 mb-8">
            <button onClick={() => setActiveTab("address")} className={`flex-1 p-4 border-b-4 font-bold transition-all ${activeTab === "address" ? "border-[#FF8A00] text-[#252B42]" : "border-transparent text-gray-400"}`}>1. Adres Bilgileri</button>
            <button disabled={!selectedShippingAddr} onClick={() => setActiveTab("payment")} className={`flex-1 p-4 border-b-4 font-bold transition-all ${activeTab === "payment" ? "border-[#FF8A00] text-[#252B42]" : "border-transparent text-gray-400"}`}>2. Ödeme Seçenekleri</button>
          </div>

          {activeTab === "address" ? (
            <div className="bg-white p-6 lg:p-10 rounded-lg shadow-sm border border-[#ECECEC]">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-[#252B42]">Teslimat Adresi</h3>
                <label className="flex items-center gap-2 text-sm cursor-pointer font-bold text-[#737373]">
                  <input type="checkbox" checked={isSameAddress} onChange={(e) => { setIsSameAddress(e.target.checked); if(e.target.checked) setSelectedBillingAddr(selectedShippingAddr); }} className="accent-[#FF8A00] w-4 h-4" />
                  Faturamı Aynı Adrese Gönder
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div onClick={() => { setEditingAddress(null); reset(); setShowAddressForm(true); }} className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-[#FF8A00] transition-all min-h-[160px] text-gray-400">
                  <Plus size={32} /> <span className="font-bold text-sm mt-2">Yeni Adres Ekle</span>
                </div>
                {addresses.map((addr) => (
                  <div key={addr.id} onClick={() => { setSelectedShippingAddr(addr.id); if(isSameAddress) setSelectedBillingAddr(addr.id); }} className={`border-2 rounded-xl p-5 cursor-pointer relative transition-all ${selectedShippingAddr === addr.id ? "border-[#FF8A00] bg-orange-50/30" : "border-gray-100"}`}>
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-xs uppercase text-[#252B42]">{addr.title}</span>
                      <div className="flex gap-2 text-gray-400">
                        <button onClick={(e) => { e.stopPropagation(); handleEditAddress(addr); }} className="hover:text-blue-500"><Edit2 size={16} /></button>
                        <button onClick={(e) => { e.stopPropagation(); deleteAddress(addr.id); }} className="hover:text-red-500"><Trash2 size={16} /></button>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <p className="font-bold">{addr.name} {addr.surname}</p>
                      <p className="text-gray-500">{addr.phone}</p>
                      <p className="mt-2 line-clamp-2 text-gray-600 italic">"{addr.neighborhood}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 lg:p-10 rounded-lg shadow-sm border border-[#ECECEC]">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-[2]">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-[#252B42]">Kart Bilgileri</h3>
                    <button onClick={() => setShowCardForm(true)} className="text-[#FF8A00] text-sm font-bold flex items-center gap-1 hover:underline"><Plus size={16} /> Başka Kartla Öde</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {cards.map((card) => (
                      <div key={card.id} onClick={() => setSelectedCard(card.id)} className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${selectedCard === card.id ? "border-[#FF8A00] bg-orange-50/30" : "border-gray-100"}`}>
                        <div className="flex justify-between items-start mb-4">
                          <input type="radio" checked={selectedCard === card.id} readOnly className="accent-[#FF8A00]" />
                          <div className="flex gap-2">
                            <button onClick={(e) => { e.stopPropagation(); handleEditCard(card); }}><Edit2 size={14} className="text-gray-400 hover:text-blue-500" /></button>
                            <button onClick={(e) => { e.stopPropagation(); deleteCard(card.id); }}><Trash2 size={14} className="text-gray-400 hover:text-red-500" /></button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase font-bold">{card.name_on_card}</p>
                        <p className="font-bold tracking-widest text-sm mb-3">**** **** **** {card.card_no.slice(-4)}</p>
                        <div className="flex justify-between text-xs font-bold">
                          <span>{card.expire_month}/{card.expire_year}</span>
                          <span className="bg-gray-100 px-2 py-0.5 rounded italic">Mastercard</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer border border-dashed hover:bg-gray-100 transition-all">
                    <input type="checkbox" checked={is3DSecure} onChange={(e) => setIs3DSecure(e.target.checked)} className="w-5 h-5 accent-[#FF8A00]" />
                    <div className="flex items-center gap-2 text-sm font-bold text-[#252B42]">
                      <ShieldCheck size={20} className="text-green-600" /> 3D Secure ile güvenli ödeme yapmak istiyorum.
                    </div>
                  </label>
                </div>

                <div className="flex-1 border-l lg:pl-8">
                  <h3 className="text-lg font-bold text-[#252B42] mb-6">Taksit Seçenekleri</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-3 text-xs font-bold text-gray-500 grid grid-cols-2">
                      <span>Taksit Sayısı</span> <span>Aylık Ödeme</span>
                    </div>
                    <div className="p-3 grid grid-cols-2 items-center border-t border-gray-100 bg-orange-50/50">
                      <label className="flex items-center gap-2 text-sm font-bold cursor-pointer">
                        <input type="radio" checked readOnly className="accent-[#FF8A00]" /> Tek Çekim
                      </label>
                      <span className="font-bold text-[#FF8A00]">{finalTotal.toFixed(2)} TL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SİPARİŞ ÖZETİ KISMI */}
        <div className="flex-1">
          <div className="sticky top-24 flex flex-col gap-4">
            <button 
              disabled={activeTab === "address" ? (!selectedShippingAddr || (!isSameAddress && !selectedBillingAddr)) : !selectedCard}
              onClick={() => { if(activeTab === "address") setActiveTab("payment"); else handleCreateOrder(); }}
              className={`w-full text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all ${
                (activeTab === "address" ? !selectedShippingAddr : !selectedCard) ? "bg-gray-300 cursor-not-allowed" : "bg-[#FF8A00] hover:bg-[#e67c00] active:scale-95"
              }`}
            >
              {activeTab === "address" ? "Ödemeye Geç" : "Siparişi Onayla"} <ChevronRight size={20} />
            </button>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#ECECEC]">
              <h2 className="text-xl font-bold text-[#252B42] mb-6 border-b pb-4">Sipariş Özeti</h2>
              <div className="flex flex-col gap-4 text-sm text-[#737373]">
                <div className="flex justify-between"><span>Ürünün Toplamı</span><span className="font-bold text-[#252B42]">{totalAmount.toFixed(2)} TL</span></div>
                <div className="flex justify-between"><span>Kargo</span><span className="font-bold text-[#252B42]">{shippingFee.toFixed(2)} TL</span></div>
                {isFreeShipping && <div className="text-[#FF8A00] font-bold text-xs uppercase">150 TL Üzeri Kargo Bedava!</div>}
                <hr />
                <div className="flex justify-between text-lg font-bold text-[#252B42]"><span>Toplam</span><span className="text-[#FF8A00]">{finalTotal.toFixed(2)} TL</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderPage;