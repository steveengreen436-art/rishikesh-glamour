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
    <main style={{ backgroundColor: '#020205', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '0 20px 80px 20px' }}>
      
      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '80px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ color: '#22d3ee', fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
          Rishikesh, Uttarakhand • The Spiritual Luxury Sanctuary
        </span>
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 75px)', fontWeight: '900', margin: '20px 0', background: 'linear-gradient(to right, #22d3ee, #ffffff, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Rishikesh Majesty
        </h1>
        <p style={{ fontSize: '20px', color: '#9ca3af', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '40px' }}>
          Where supreme modern luxury meets the timeless flow of the holy Ganges. Impeccable cleanliness, personalized service, and absolute perfection.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{ backgroundColor: '#22d3ee', color: '#000000', fontWeight: 'bold', padding: '16px 36px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 0 25px rgba(34,211,238,0.5)', fontSize: '16px' }}>
            Explore Luxury Suites
          </button>
          <button style={{ backgroundColor: 'transparent', color: '#22d3ee', border: '2px solid rgba(34,211,238,0.5)', padding: '16px 36px', borderRadius: '50px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
            Romantic Getaways ✨
          </button>
        </div>
      </div>

      {/* Highlights Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto 60px auto', textAlign: 'center' }}>
        <div style={{ background: '#0b0f19', border: '1px solid #1e293b', padding: '25px', borderRadius: '20px' }}>
          <h3 style={{ color: '#22d3ee', fontSize: '18px', marginBottom: '8px' }}>✨ Ultra Clean & Modern</h3>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Immaculate daily sanitization, contemporary aesthetic, and glowing ambiance.</p>
        </div>
        <div style={{ background: '#0b0f19', border: '1px solid #1e293b', padding: '25px', borderRadius: '20px' }}>
          <h3 style={{ color: '#c084fc', fontSize: '18px', marginBottom: '8px' }}>💖 Romantic Getaway Specials</h3>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Candle-lit riverside dinners, rose petal decorations, and couples spa packages.</p>
        </div>
        <div style={{ background: '#0b0f19', border: '1px solid #1e293b', padding: '25px', borderRadius: '20px' }}>
          <h3 style={{ color: '#34d399', fontSize: '18px', marginBottom: '8px' }}>🧘 Free Sunrise Yoga</h3>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Private master yoga sessions right on the banks of the holy Ganges.</p>
        </div>
      </div>

      {/* Testimonials & Data Stream */}
      <section style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>Flooded Reviews & Luxury Testimonials</h2>
          <p style={{ color: '#9ca3af' }}>Real feedback from guests who experienced supreme comfort and personalized hospitality.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          {content.map((item) => (
            <div key={item.id} style={{ background: '#090d16', border: '1px solid #1e3a8a', padding: '30px', borderRadius: '24px', boxShadow: '0 0 20px rgba(34,211,238,0.07)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#22d3ee', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
                  {item.category || 'Review'} • Rating: {item.rating}★
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#ffffff' }}>{item.title}</h3>
                <p style={{ color: '#d1d5db', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>"{item.description}"</p>
              </div>
              <div style={{ borderTop: '1px solid #1f2937', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#c084fc', fontWeight: 'bold', fontSize: '14px' }}>— {item.author}</span>
                <span style={{ color: '#facc15', fontSize: '16px' }}>★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Smart Multilingual AI Chatbot Component */}
      <AIChatbot />

    </main>
  );
}
