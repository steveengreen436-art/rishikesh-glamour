'use client'
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import AIChatbot from '../components/AIChatbot';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('hotel_content').select('*');
      setContent(data || []);
    }
    fetchData();
  }, []);

  return (
    <main style={{ backgroundColor: '#020b0e', color: '#ffffff', minHeight: '100vh', fontFamily: 'serif', overflowX: 'hidden' }}>
      
      {/* Top Gold & Turquoise Announcement Bar */}
      <div style={{ background: 'linear-gradient(90deg, #d4af37, #06b6d4, #34d399)', color: '#020b0e', padding: '10px 20px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>
        ✨ AMANTRA HILLS RISHIKESH • RESERVATIONS: +91 9100009310 / +91 9873767624 / +91 9811167624 ✨
      </div>

      {/* Interactive Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(2, 11, 14, 0.85)' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#d4af37', letterSpacing: '2px', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
          AMANTRA HILLS
        </div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
          <span onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: activeTab === 'home' ? '#34d399' : '#a5f3fc', borderBottom: activeTab === 'home' ? '2px solid #34d399' : 'none', paddingBottom: '4px' }}>Home</span>
          <span onClick={() => setActiveTab('dining')} style={{ cursor: 'pointer', color: activeTab === 'dining' ? '#34d399' : '#a5f3fc', borderBottom: activeTab === 'dining' ? '2px solid #34d399' : 'none', paddingBottom: '4px' }}>Dining (Skywalk)</span>
          <span onClick={() => setActiveTab('amenities')} style={{ cursor: 'pointer', color: activeTab === 'amenities' ? '#34d399' : '#a5f3fc', borderBottom: activeTab === 'amenities' ? '2px solid #34d399' : 'none', paddingBottom: '4px' }}>Amenities</span>
          <span onClick={() => setActiveTab('attractions')} style={{ cursor: 'pointer', color: activeTab === 'attractions' ? '#34d399' : '#a5f3fc', borderBottom: activeTab === 'attractions' ? '2px solid #34d399' : 'none', paddingBottom: '4px' }}>Attractions</span>
          <span onClick={() => setActiveTab('contact')} style={{ cursor: 'pointer', color: activeTab === 'contact' ? '#34d399' : '#a5f3fc', borderBottom: activeTab === 'contact' ? '2px solid #34d399' : 'none', paddingBottom: '4px' }}>Contact</span>
        </div>
      </nav>

      {/* ================= HOME PAGE VIEW ================= */}
      {activeTab === 'home' && (
        <div>
          {/* Hero Section */}
          <header style={{ 
            position: 'relative', 
            padding: '140px 20px', 
            textAlign: 'center', 
            backgroundImage: 'linear-gradient(rgba(2, 11, 14, 0.7), rgba(2, 11, 14, 0.85)), url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            borderBottom: '2px solid #d4af37'
          }}>
            <div style={{ maxWidth: '950px', margin: '0 auto', background: 'rgba(2, 11, 14, 0.75)', backdropFilter: 'blur(20px)', padding: '60px', borderRadius: '35px', border: '1px solid rgba(212, 175, 55, 0.4)', boxShadow: '0 0 50px rgba(6, 182, 212, 0.25)' }}>
              <span style={{ color: '#34d399', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold', display: 'block', marginBottom: '15px' }}>
                Narendra Nagar, Kurikhal, Uttarakhand
              </span>
              <h1 style={{ fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: '700', color: '#d4af37', marginBottom: '25px', fontFamily: 'serif' }}>
                Amantra Hills Rishikesh
              </h1>
              <p style={{ fontSize: '18px', color: '#e2e8f0', lineHeight: '1.9', marginBottom: '35px', fontStyle: 'italic' }}>
                Perched high in the majestic hills of Narendra Nagar, Amantra Hills offers an ethereal sanctuary where supreme modern luxury blends seamlessly with glowing mountain vistas, pristine dome architecture, and the tranquil breeze of the holy Himalayas.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => setActiveTab('contact')} style={{ background: 'linear-gradient(135deg, #d4af37, #aa820a)', color: '#020b0e', fontWeight: 'bold', padding: '16px 36px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)', fontSize: '15px' }}>
                  Book Your Stay Now
                </button>
                <button onClick={() => setActiveTab('dining')} style={{ background: 'transparent', color: '#06b6d4', border: '2px solid #06b6d4', padding: '16px 36px', borderRadius: '50px', cursor: 'pointer', fontSize: '15px', fontWeight: 'bold', boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}>
                  Explore Skywalk Cafe ✨
                </button>
              </div>
            </div>
          </header>

          {/* Flooded Info Overview Cards */}
          <section style={{ maxWidth: '1150px', margin: '80px auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '38px', color: '#d4af37', marginBottom: '15px' }}>The Pinnacle of Mountain Elegance</h2>
              <p style={{ color: '#94a3b8', maxWidth: '750px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
                Immerse yourself in unmatched cleanliness, breathtaking high-altitude glass domes, and personalized hospitality designed to rejuvenate your mind, body, and soul.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
              <div style={{ background: 'rgba(6, 182, 212, 0.05)', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '40px', borderRadius: '28px', backdropFilter: 'blur(12px)' }}>
                <h3 style={{ color: '#06b6d4', fontSize: '22px', marginBottom: '15px' }}>🏛️ Architectural Masterpiece</h3>
                <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.8' }}>
                  Our signature geodesic glass-mirror domes provide a 360-degree panoramic view of the sparkling valley below and the star-studded night skies above, ensuring an experience of absolute wonder.
                </p>
              </div>

              <div style={{ background: 'rgba(52, 211, 153, 0.05)', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '40px', borderRadius: '28px', backdropFilter: 'blur(12px)' }}>
                <h3 style={{ color: '#34d399', fontSize: '22px', marginBottom: '15px' }}>🌿 Impeccable Cleanliness</h3>
                <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.8' }}>
                  We adhere to the highest international standards of hygiene and daily sanitization. Every pristine white linen, polished wooden floor, and glass panel gleams with perfection.
                </p>
              </div>

              <div style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '40px', borderRadius: '28px', backdropFilter: 'blur(12px)' }}>
                <h3 style={{ color: '#d4af37', fontSize: '22px', marginBottom: '15px' }}>☕ Skywalk Cafe Dining</h3>
                <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.8' }}>
                  Perched right on the edge of the hill, our multi-cuisine eatery serves gourmet dishes crafted from farm-fresh local ingredients while you look out over sprawling garden views.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ================= DINING PAGE VIEW ================= */}
      {activeTab === 'dining' && (
        <div style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
          <span style={{ color: '#34d399', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Culinary Excellence</span>
          <h1 style={{ fontSize: '48px', color: '#d4af37', margin: '15px 0 25px 0' }}>Skywalk Cafe & Multi-Cuisine Dining</h1>
          <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.9', marginBottom: '40px' }}>
            Dining at Amantra Hills is not merely about food; it is an immersive sensory celebration. The <strong style={{ color: '#06b6d4' }}>Skywalk Cafe</strong> hangs suspended in the crisp mountain air, offering an open-air panoramic dining environment surrounded by vibrant green lawns and shimmering valley lights below.
          </p>
          <div style={{ background: 'rgba(2, 11, 14, 0.8)', border: '1px solid rgba(212, 175, 55, 0.4)', padding: '45px', borderRadius: '30px', marginBottom: '40px' }}>
            <h3 style={{ color: '#34d399', fontSize: '24px', marginBottom: '20px' }}>What’s on the Menu?</h3>
            <p style={{ color: '#e2e8f0', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
              Our expert master chefs curate a diverse culinary portfolio ranging from authentic traditional Garhwali delicacies made with organic local herbs, to rich North Indian classics, continental favorites, wood-fired pizzas, and artisanal coffees.
            </p>
            <ul style={{ color: '#a5f3fc', lineHeight: '2.2', fontSize: '16px', paddingLeft: '20px' }}>
              <li>🌿 <strong style={{ color: '#ffffff' }}>Organic Farm-to-Table Ingredients:</strong> Harvested fresh daily from local Himalayan farms.</li>
              <li>🔥 <strong style={{ color: '#ffffff' }}>Evening Bonfire Barbeques:</strong> Sizzling grills served under the glittering night sky.</li>
              <li>☕ <strong style={{ color: '#ffffff' }}>Specialty Coffee Bar:</strong> Premium brews paired with freshly baked artisanal pastries.</li>
            </ul>
          </div>
        </div>
      )}

      {/* ================= AMENITIES PAGE VIEW ================= */}
      {activeTab === 'amenities' && (
        <div style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
          <span style={{ color: '#34d399', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Supreme Luxury Facilities</span>
          <h1 style={{ fontSize: '48px', color: '#d4af37', margin: '15px 0 25px 0' }}>World-Class Resort Amenities</h1>
          <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.9', marginBottom: '40px' }}>
            At Amantra Hills, every single facility is meticulously engineered to provide absolute comfort, high-speed convenience, and deep relaxation in the lap of nature.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'rgba(6, 182, 212, 0.05)', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '35px', borderRadius: '24px' }}>
              <h3 style={{ color: '#06b6d4', fontSize: '20px', marginBottom: '12px' }}>🌅 Sprawling Rooftop Terrace</h3>
              <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.7' }}>
                An expansive viewing deck overlooking the mountains where guests gather for morning meditation, sunrise yoga, and breathtaking photography sessions.
              </p>
            </div>

            <div style={{ background: 'rgba(52, 211, 153, 0.05)', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '35px', borderRadius: '24px' }}>
              <h3 style={{ color: '#34d399', fontSize: '20px', marginBottom: '12px' }}>🔥 Evening Firepit & Seating</h3>
              <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.7' }}>
                Cozy outdoor seating zones centered around a glowing firepit, perfect for sharing stories, sipping warm beverages, and stargazing in crisp mountain air.
              </p>
            </div>

            <div style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '35px', borderRadius: '24px' }}>
              <h3 style={{ color: '#d4af37', fontSize: '20px', marginBottom: '12px' }}>📶 High-Speed Free Wi-Fi</h3>
              <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.7' }}>
                Seamless, high-speed fiber internet coverage across the entire resort property so you can stay connected or seamlessly manage remote work needs.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= ATTRACTIONS PAGE VIEW ================= */}
      {activeTab === 'attractions' && (
        <div style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
          <span style={{ color: '#34d399', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Explore Rishikesh</span>
          <h1 style={{ fontSize: '48px', color: '#d4af37', margin: '15px 0 25px 0' }}>Nearby Landmarks & Scenic Wonders</h1>
          <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.9', marginBottom: '40px' }}>
            Amantra Hills serves as your gateway to the most iconic sacred spots, trekking routes, and natural waterfalls in Uttarakhand.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ background: 'rgba(2, 11, 14, 0.8)', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '30px', borderRadius: '20px' }}>
              <h3 style={{ color: '#06b6d4', fontSize: '22px', marginBottom: '10px' }}>🌊 Neer Waterfall (~6.2 km away)</h3>
              <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.7' }}>
                A gorgeous multi-tiered waterfall cascading through lush greenery. A short, refreshing drive or trek from our resort takes you to crystal-clear natural plunge pools.
              </p>
            </div>

            <div style={{ background: 'rgba(2, 11, 14, 0.8)', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '30px', borderRadius: '20px' }}>
              <h3 style={{ color: '#34d399', fontSize: '22px', marginBottom: '10px' }}>🛕 Kunjapuri Temple (~14.4 km away)</h3>
              <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.7' }}>
                Perched at an altitude of 1,676 meters, this revered Devi temple offers the most legendary panoramic sunrise views over the snow-capped Himalayan peaks.
              </p>
            </div>

            <div style={{ background: 'rgba(2, 11, 14, 0.8)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '20px' }}>
              <h3 style={{ color: '#d4af37', fontSize: '22px', marginBottom: '10px' }}>🌉 Ram Jhula & Lakshman Jhula</h3>
              <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.7' }}>
                Easily accessible by road from our location, experience the vibrant spiritual energy, bustling yoga ashrams, and evening Ganga Aarti ceremonies on the river banks.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= CONTACT PAGE VIEW ================= */}
      {activeTab === 'contact' && (
        <div style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
          <span style={{ color: '#34d399', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Get in Touch</span>
          <h1 style={{ fontSize: '48px', color: '#d4af37', margin: '15px 0 25px 0' }}>Contact & Reservations</h1>
          <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.9', marginBottom: '40px' }}>
            Our reservation desk is open 24/7 to assist you with room bookings, private events, customized travel itineraries, and special requests.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'rgba(2, 11, 14, 0.85)', border: '1px solid rgba(212, 175, 55, 0.4)', padding: '40px', borderRadius: '25px' }}>
              <h3 style={{ color: '#d4af37', fontSize: '22px', marginBottom: '20px' }}>📞 Direct Helplines</h3>
              <p style={{ color: '#34d399', fontSize: '18px', fontWeight: 'bold', lineHeight: '2' }}>
                +91 9100009310<br />
                +91 9873767624<br />
                +91 9811167624
              </p>
            </div>

            <div style={{ background: 'rgba(2, 11, 14, 0.85)', border: '1px solid rgba(6, 182, 212, 0.4)', padding: '40px', borderRadius: '25px' }}>
              <h3 style={{ color: '#06b6d4', fontSize: '22px', marginBottom: '20px' }}>📍 Resort Address</h3>
              <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.8' }}>
                <strong style={{ color: '#ffffff' }}>Amantra Hills Rishikesh</strong><br />
                48XX+Q9M, Neergarh Waterfall Rd,<br />
                Narendra Nagar, Kurikhal,<br />
                Uttarakhand 249201
              </p>
            </div>

            <div style={{ background: 'rgba(2, 11, 14, 0.85)', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '40px', borderRadius: '25px' }}>
              <h3 style={{ color: '#34d399', fontSize: '22px', marginBottom: '20px' }}>⏰ Policy & Timings</h3>
              <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.8' }}>
                <strong style={{ color: '#ffffff' }}>Check-In:</strong> 2:00 PM<br />
                <strong style={{ color: '#ffffff' }}>Check-Out:</strong> 12:00 PM<br />
                <strong style={{ color: '#ffffff' }}>Front Desk:</strong> 24 Hours Active
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Guest Reviews Section (Visible across views) */}
      <section style={{ maxWidth: '1150px', margin: '90px auto 40px auto', padding: '0 20px', borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '34px', color: '#d4af37', marginBottom: '10px' }}>Flooded Guest Experiences</h2>
          <p style={{ color: '#94a3b8' }}>Real feedback from travelers who experienced supreme mountain luxury.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          {content.map((item) => (
            <div key={item.id} style={{ background: 'rgba(2, 11, 14, 0.8)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '24px', boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#06b6d4', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
                {item.category || 'Review'} • 5 Stars
              </span>
              <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '12px', color: '#ffffff' }}>{item.title}</h3>
              <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>"{item.description}"</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#34d399', fontWeight: 'bold', fontSize: '14px' }}>— {item.author}</span>
                <span style={{ color: '#facc15', fontSize: '16px' }}>★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid rgba(212, 175, 55, 0.2)', color: '#94a3b8', fontSize: '14px' }}>
        <p>© 2026 Amantra Hills Rishikesh. All Rights Reserved. Address: 48XX+Q9M, Neergarh Waterfall Rd, Narendra Nagar, Kurikhal, Uttarakhand 249201</p>
      </footer>

      {/* Smart Multilingual AI Chatbot */}
      <AIChatbot />

    </main>
  );
}
