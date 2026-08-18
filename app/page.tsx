'use client'
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import AIChatbot from '../components/AIChatbot';

export default function Home() {
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
      <div style={{ background: 'linear-gradient(90deg, #d4af37, #06b6d4, #10b981)', color: '#020b0e', padding: '10px 20px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>
        ✨ AMANTRA HILLS RISHIKESH • BOOKINGS OPEN: +91 9100009310 / +91 9873767624 / +91 9811167624 ✨
      </div>

      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backdropFilter: 'blur(10px)' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#d4af37', letterSpacing: '2px' }}>
          AMANTRA HILLS
        </div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '14px', color: '#a5f3fc', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span style={{ cursor: 'pointer' }}>Home</span>
          <span style={{ cursor: 'pointer' }}>Dining (Skywalk)</span>
          <span style={{ cursor: 'pointer' }}>Amenities</span>
          <span style={{ cursor: 'pointer' }}>Attractions</span>
          <span style={{ cursor: 'pointer' }}>Contact</span>
        </div>
      </nav>

      {/* Hero Section with Glass Mirror & Your Stunning Aerial Dome Background */}
      <header style={{ 
        position: 'relative', 
        padding: '120px 20px', 
        textAlign: 'center', 
        backgroundImage: 'linear-gradient(rgba(2, 11, 14, 0.75), rgba(2, 11, 14, 0.85)), url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        borderBottom: '2px solid #d4af37'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: 'rgba(2, 11, 14, 0.65)', backdropFilter: 'blur(16px)', padding: '50px', borderRadius: '30px', border: '1px solid rgba(212, 175, 55, 0.4)', boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)' }}>
          <span style={{ color: '#34d399', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold', display: 'block', marginBottom: '15px' }}>
            Narendra Nagar, Kurikhal, Uttarakhand
          </span>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 70px)', fontWeight: '700', color: '#d4af37', marginBottom: '20px', fontFamily: 'serif' }}>
            Amantra Hills Rishikesh
          </h1>
          <p style={{ fontSize: '18px', color: '#e2e8f0', lineHeight: '1.8', marginBottom: '30px', fontStyle: 'italic' }}>
            Perched high in the majestic hills of Narendra Nagar, Amantra Hills offers an ethereal escape where modern luxury blends seamlessly with tranquil mountain breezes. Experience pristine comfort, glowing night skies, and personalized hospitality like never before.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ background: 'linear-gradient(135deg, #d4af37, #aa820a)', color: '#020b0e', fontWeight: 'bold', padding: '16px 36px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)', fontSize: '15px' }}>
              Book Your Stay Now
            </button>
            <button style={{ background: 'transparent', color: '#06b6d4', border: '2px solid #06b6d4', padding: '16px 36px', borderRadius: '50px', cursor: 'pointer', fontSize: '15px', fontWeight: 'bold', boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)' }}>
              Explore Skywalk Cafe ✨
            </button>
          </div>
        </div>
      </header>

      {/* Info Flood / Rich Details Section */}
      <section style={{ maxWidth: '1100px', margin: '80px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '36px', color: '#d4af37', marginBottom: '15px' }}>The Amantra Hills Experience</h2>
          <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto', fontSize: '16px', lineHeight: '1.7' }}>
            Designed for travelers seeking absolute peace, cleanliness, and state-of-the-art modern amenities. Every detail of your stay is curated to perfection.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          <div style={{ background: 'rgba(6, 182, 212, 0.05)', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '35px', borderRadius: '24px', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ color: '#06b6d4', fontSize: '20px', marginBottom: '15px' }}>🍽️ Skywalk Cafe & Dining</h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.7' }}>
              Enjoy our on-site multi-cuisine eatery featuring panoramic garden and mountain views. Farm-to-table gourmet dining crafted fresh daily by expert chefs.
            </p>
          </div>

          <div style={{ background: 'rgba(52, 211, 153, 0.05)', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '35px', borderRadius: '24px', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ color: '#34d399', fontSize: '20px', marginBottom: '15px' }}>🔥 Premium Facilities</h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.7' }}>
              Relax on our sprawling rooftop terrace, gather around the evening firepit under the stars, sip artisanal brews at the coffee shop, and stay connected with high-speed free Wi-Fi.
            </p>
          </div>

          <div style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '35px', borderRadius: '24px', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ color: '#d4af37', fontSize: '20px', marginBottom: '15px' }}>📍 Prime Location & Access</h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.7' }}>
              Located at 48XX+Q9M, Neergarh Waterfall Rd, Kurikhal. Perfectly situated near top attractions with seamless road accessibility.
            </p>
          </div>

        </div>
      </section>

      {/* Nearby Attractions & Logistics Section */}
      <section style={{ background: '#041318', padding: '80px 20px', borderTop: '1px solid rgba(6, 182, 212, 0.2)', borderBottom: '1px solid rgba(6, 182, 212, 0.2)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ color: '#d4af37', fontSize: '22px', marginBottom: '20px' }}>🗺️ Nearby Attractions</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e1', lineHeight: '2.2', fontSize: '15px' }}>
              <li>🌊 <strong style={{ color: '#06b6d4' }}>Neer Waterfall:</strong> ~6.2 km away</li>
              <li>🛕 <strong style={{ color: '#34d399' }}>Kunjapuri Temple:</strong> ~14.4 km away</li>
              <li>🌉 <strong style={{ color: '#d4af37' }}>Ram & Lakshman Jhula:</strong> Easily accessible by road</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#d4af37', fontSize: '22px', marginBottom: '20px' }}>⏰ Check-In / Check-Out Policy</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '15px', marginBottom: '15px' }}>
              <strong style={{ color: '#ffffff' }}>Standard Check-In:</strong> 2:00 PM<br />
              <strong style={{ color: '#ffffff' }}>Standard Check-Out:</strong> 12:00 PM
            </p>
            <h3 style={{ color: '#d4af37', fontSize: '22px', margin: '20px 0 10px 0' }}>📞 Direct Reservation Helplines</h3>
            <p style={{ color: '#34d399', fontSize: '16px', fontWeight: 'bold' }}>
              +91 9100009310 / +91 9873767624 / +91 9811167624
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials & Data Stream */}
      <section style={{ maxWidth: '1100px', margin: '80px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '34px', color: '#d4af37', marginBottom: '10px' }}>Guest Reviews & Stories</h2>
          <p style={{ color: '#94a3b8' }}>Real experiences from guests who found peace and luxury at Amantra Hills.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          {content.map((item) => (
            <div key={item.id} style={{ background: 'rgba(2, 11, 14, 0.8)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '24px', boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#06b6d4', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
                  {item.category || 'Review'} • 5 Stars
                </span>
                <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '12px', color: '#ffffff' }}>{item.title}</h3>
                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>"{item.description}"</p>
              </div>
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

      {/* Floating Multilingual Smart AI Chatbot */}
      <AIChatbot />

    </main>
  );
}
