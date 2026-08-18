'use client';
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
    <main style={{ backgroundColor: '#fcfbf7', color: '#1a202c', minHeight: '100vh', fontFamily: 'serif', overflowX: 'hidden' }}>
      
      {/* Top Gold & Turquoise Announcement Bar */}
      <div style={{ background: 'linear-gradient(90deg, #d4af37, #06b6d4, #10b981)', color: '#ffffff', padding: '10px 20px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>
        ✨ AMANTRA HILLS RISHIKESH • RESERVATIONS: +91 9100009310 / +91 9873767624 / +91 9811167624 ✨
      </div>

      {/* Interactive Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(252, 251, 247, 0.9)' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#b89728', letterSpacing: '2px', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
          AMANTRA HILLS
        </div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
          <span onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: activeTab === 'home' ? '#0e7490' : '#4a5568', borderBottom: activeTab === 'home' ? '2px solid #06b6d4' : 'none', paddingBottom: '4px' }}>Home</span>
          <span onClick={() => setActiveTab('dining')} style={{ cursor: 'pointer', color: activeTab === 'dining' ? '#0e7490' : '#4a5568', borderBottom: activeTab === 'dining' ? '2px solid #06b6d4' : 'none', paddingBottom: '4px' }}>Dining (Skywalk)</span>
          <span onClick={() => setActiveTab('amenities')} style={{ cursor: 'pointer', color: activeTab === 'amenities' ? '#0e7490' : '#4a5568', borderBottom: activeTab === 'amenities' ? '2px solid #06b6d4' : 'none', paddingBottom: '4px' }}>Amenities</span>
          <span onClick={() => setActiveTab('attractions')} style={{ cursor: 'pointer', color: activeTab === 'attractions' ? '#0e7490' : '#4a5568', borderBottom: activeTab === 'attractions' ? '2px solid #06b6d4' : 'none', paddingBottom: '4px' }}>Attractions</span>
          <span onClick={() => setActiveTab('contact')} style={{ cursor: 'pointer', color: activeTab === 'contact' ? '#0e7490' : '#4a5568', borderBottom: activeTab === 'contact' ? '2px solid #06b6d4' : 'none', paddingBottom: '4px' }}>Contact</span>
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
            backgroundImage: 'linear-gradient(rgba(252, 251, 247, 0.85), rgba(244, 240, 230, 0.9)), url("/best background.jpg")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            borderBottom: '2px solid rgba(212, 175, 55, 0.3)'
          }}>
            <div style={{ maxWidth: '950px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(20px)', padding: '60px', borderRadius: '35px', border: '1px solid rgba(212, 175, 55, 0.5)', boxShadow: '0 10px 40px rgba(6, 182, 212, 0.15)' }}>
              <span style={{ color: '#0d9488', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold', display: 'block', marginBottom: '15px' }}>
                Narendra Nagar, Kurikhal, Uttarakhand
              </span>
              <h1 style={{ fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: '700', color: '#997c17', marginBottom: '25px', fontFamily: 'serif' }}>
                Amantra Hills Rishikesh
              </h1>
              <p style={{ fontSize: '18px', color: '#2d3748', lineHeight: '1.9', marginBottom: '35px', fontStyle: 'italic' }}>
                Perched high in the majestic hills of Narendra Nagar, Amantra Hills offers an ethereal sanctuary where supreme modern luxury blends seamlessly with glowing mountain vistas, pristine dome architecture, and the tranquil breeze of the holy Himalayas.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => setActiveTab('contact')} style={{ background: 'linear-gradient(135deg, #d4af37, #b89728)', color: '#ffffff', fontWeight: 'bold', padding: '16px 36px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)', fontSize: '15px' }}>
                  Book Your Stay Now
                </button>
                <button onClick={() => setActiveTab('dining')} style={{ background: 'transparent', color: '#0891b2', border: '2px solid #0891b2', padding: '16px 36px', borderRadius: '50px', cursor: 'pointer', fontSize: '15px', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(6, 182, 212, 0.2)' }}>
                  Explore Skywalk Cafe ✨
                </button>
              </div>
            </div>
          </header>

          {/* Flooded Info Overview Cards */}
          <section style={{ maxWidth: '1150px', margin: '80px auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '38px', color: '#997c17', marginBottom: '15px' }}>The Pinnacle of Mountain Elegance</h2>
              <p style={{ color: '#4a5568', maxWidth: '750px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
                Immerse yourself in unmatched cleanliness, breathtaking high-altitude glass domes, and personalized hospitality designed to rejuvenate your mind, body, and soul.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
              <div style={{ background: '#ffffff', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '40px', borderRadius: '28px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
                <h3 style={{ color: '#0891b2', fontSize: '22px', marginBottom: '15px' }}>🏛️ Architectural Masterpiece</h3>
                <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.8' }}>
                  Our signature geodesic glass-mirror domes provide a 360-degree panoramic view of the sparkling valley below and the star-studded night skies above, ensuring an experience of absolute wonder.
                </p>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '40px', borderRadius: '28px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
                <h3 style={{ color: '#059669', fontSize: '22px', marginBottom: '15px' }}>🌿 Impeccable Cleanliness</h3>
                <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.8' }}>
                  We adhere to the highest international standards of hygiene and daily sanitization. Every pristine white linen, polished wooden floor, and glass panel gleams with perfection.
                </p>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.4)', padding: '40px', borderRadius: '28px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
                <h3 style={{ color: '#997c17', fontSize: '22px', marginBottom: '15px' }}>☕ Skywalk Cafe Dining</h3>
                <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.8' }}>
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
          <span style={{ color: '#059669', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Culinary Excellence</span>
          <h1 style={{ fontSize: '48px', color: '#997c17', margin: '15px 0 25px 0' }}>Skywalk Cafe & Multi-Cuisine Dining</h1>
          <p style={{ fontSize: '18px', color: '#2d3748', lineHeight: '1.9', marginBottom: '40px' }}>
            Dining at Amantra Hills is not merely about food; it is an immersive sensory celebration. The <strong style={{ color: '#0891b2' }}>Skywalk Cafe</strong> hangs suspended in the crisp mountain air, offering an open-air panoramic dining environment surrounded by vibrant green lawns and shimmering valley lights below.
          </p>
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.4)', padding: '45px', borderRadius: '30px', marginBottom: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
            <h3 style={{ color: '#059669', fontSize: '24px', marginBottom: '20px' }}>What’s on the Menu?</h3>
            <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
              Our expert master chefs curate a diverse culinary portfolio ranging from authentic traditional Garhwali delicacies made with organic local herbs, to rich North Indian classics, continental favorites, wood-fired pizzas, and artisanal coffees.
            </p>
            <ul style={{ color: '#0891b2', lineHeight: '2.2', fontSize: '16px', paddingLeft: '20px' }}>
              <li>🌿 <strong style={{ color: '#1a202c' }}>Organic Farm-to-Table Ingredients:</strong> Harvested fresh daily from local Himalayan farms.</li>
              <li>🔥 <strong style={{ color: '#1a202c' }}>Evening Bonfire Barbeques:</strong> Sizzling grills served under the glittering night sky.</li>
              <li>☕ <strong style={{ color: '#1a202c' }}>Specialty Coffee Bar:</strong> Premium brews paired with freshly baked artisanal pastries.</li>
            </ul>
          </div>
        </div>
      )}

      {/* ================= AMENITIES PAGE VIEW ================= */}
      {activeTab === 'amenities' && (
        <div style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
          <span style={{ color: '#059669', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Supreme Luxury Facilities</span>
          <h1 style={{ fontSize: '48px', color: '#997c17', margin: '15px 0 25px 0' }}>World-Class Resort Amenities</h1>
          <p style={{ fontSize: '18px', color: '#2d3748', lineHeight: '1.9', marginBottom: '40px' }}>
            At Amantra Hills, every single facility is meticulously engineered to provide absolute comfort, high-speed convenience, and deep relaxation in the lap of nature.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '35px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
              <h3 style={{ color: '#0891b2', fontSize: '20px', marginBottom: '12px' }}>🌅 Sprawling Rooftop Terrace</h3>
              <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.7' }}>
                An expansive viewing deck overlooking the mountains where guests gather for morning meditation, sunrise yoga, and breathtaking photography sessions.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '35px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
              <h3 style={{ color: '#059669', fontSize: '20px', marginBottom: '12px' }}>🔥 Evening Firepit & Seating</h3>
              <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.7' }}>
                Cozy outdoor seating zones centered around a glowing firepit, perfect for sharing stories, sipping warm beverages, and stargazing in crisp mountain air.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '35px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
              <h3 style={{ color: '#997c17', fontSize: '20px', marginBottom: '12px' }}>📶 High-Speed Free Wi-Fi</h3>
              <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.7' }}>
                Seamless, high-speed fiber internet coverage across the entire resort property so you can stay connected or seamlessly manage remote work needs.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= ATTRACTIONS PAGE VIEW ================= */}
      {activeTab === 'attractions' && (
        <div style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
          <span style={{ color: '#059669', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Explore Rishikesh</span>
          <h1 style={{ fontSize: '48px', color: '#997c17', margin: '15px 0 25px 0' }}>Nearby Landmarks & Scenic Wonders</h1>
          <p style={{ fontSize: '18px', color: '#2d3748', lineHeight: '1.9', marginBottom: '40px' }}>
            Amantra Hills serves as your gateway to the most iconic sacred spots, trekking routes, and natural waterfalls in Uttarakhand.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '30px', borderRadius: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
              <h3 style={{ color: '#0891b2', fontSize: '22px', marginBottom: '10px' }}>🌊 Neer Waterfall (~6.2 km away)</h3>
              <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.7' }}>
                A gorgeous multi-tiered waterfall cascading through lush greenery. A short, refreshing drive or trek from our resort takes you to crystal-clear natural plunge pools.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '30px', borderRadius: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
              <h3 style={{ color: '#059669', fontSize: '22px', marginBottom: '10px' }}>🛕 Kunjapuri Temple (~14.4 km away)</h3>
              <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.7' }}>
                Perched at an altitude of 1,676 meters, this revered Devi temple offers the most legendary panoramic sunrise views over the snow-capped Himalayan peaks.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
              <h3 style={{ color: '#997c17', fontSize: '22px', marginBottom: '10px' }}>🌉 Ram Jhula & Lakshman Jhula</h3>
              <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.7' }}>
                Easily accessible by road from our location, experience the vibrant spiritual energy, bustling yoga ashrams, and evening Ganga Aarti ceremonies on the river banks.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= CONTACT PAGE VIEW ================= */}
      {activeTab === 'contact' && (
        <div style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
          <span style={{ color: '#059669', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Get in Touch</span>
          <h1 style={{ fontSize: '48px', color: '#997c17', margin: '15px 0 25px 0' }}>Contact & Reservations</h1>
          <p style={{ fontSize: '18px', color: '#2d3748', lineHeight: '1.9', marginBottom: '40px' }}>
            Our reservation desk is open 24/7 to assist you with room bookings, private events, customized travel itineraries, and special requests.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.4)', padding: '40px', borderRadius: '25px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
              <h3 style={{ color: '#997c17', fontSize: '22px', marginBottom: '20px' }}>📞 Direct Helplines</h3>
              <p style={{ color: '#059669', fontSize: '18px', fontWeight: 'bold', lineHeight: '2' }}>
                +91 9100009310<br />
                +91 9873767624<br />
                +91 9811167624
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(6, 182, 212, 0.4)', padding: '40px', borderRadius: '25px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
              <h3 style={{ color: '#0891b2', fontSize: '22px', marginBottom: '20px' }}>📍 Resort Address</h3>
              <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.8' }}>
                <strong style={{ color: '#1a202c' }}>Amantra Hills Rishikesh</strong><br />
                48XX+Q9M, Neergarh Waterfall Rd,<br />
                Narendra Nagar, Kurikhal,<br />
                Uttarakhand 249201
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '40px', borderRadius: '25px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
              <h3 style={{ color: '#059669', fontSize: '22px', marginBottom: '20px' }}>⏰ Policy & Timings</h3>
              <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.8' }}>
                <strong style={{ color: '#1a202c' }}>Check-In:</strong> 2:00 PM<br />
                <strong style={{ color: '#1a202c' }}>Check-Out:</strong> 12:00 PM<br />
                <strong style={{ color: '#1a202c' }}>Front Desk:</strong> 24 Hours Active
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= RESORT PHOTO GALLERY SECTION ================= */}
      <section style={{ maxWidth: '1150px', margin: '80px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '38px', color: '#997c17', marginBottom: '15px' }}>Resort Gallery & Domes</h2>
          <p style={{ color: '#4a5568', maxWidth: '750px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
            Take a visual journey through our luxurious geodesic domes, scenic mountain landscapes, and cozy interior setups.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          {/* Image 1 */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/home page image 2.jpg" alt="Nighttime City Panorama" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Nighttime Valley View</div>
          </div>

          {/* Image 2 */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/home page image 1.jpg" alt="Twilight Property Aerial" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Twilight Aerial View</div>
          </div>

          {/* Image 3 */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013862.jpg" alt="Misty Mountain Day View" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Misty Mountain Morning</div>
          </div>

          {/* Image 4 */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013863.jpg" alt="Valley Outlook" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Scenic Valley Outlook</div>
          </div>

          {/* Image 5 */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013860.jpg" alt="Guest on Property" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Resort Grounds & Seating</div>
          </div>

          {/* Image 6 */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013866.jpg" alt="Individual Dome Exterior" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Geodesic Dome Exterior</div>
          </div>

          {/* Image 7 */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013867.jpg" alt="Yellow Dome Bed Setup" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Yellow Suite Bed Setup</div>
          </div>

          {/* Image 8 */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013859.jpg" alt="Yellow Dome Interior and Chairs" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Yellow Suite Lounge Area</div>
          </div>

          {/* Image 9 */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013865.jpg" alt="Teal Dome Bed and Seating" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Teal Suite Master Bed</div>
          </div>

          {/* Image 10 */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013870.jpg" alt="Teal Dome Bedroom and Windows" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Teal Suite Panorama Windows</div>
          </div>

        </div>
      </section>

      {/* Guest Reviews Section (Visible across views with database fallback) */}
      <section style={{ maxWidth: '1150px', margin: '90px auto 40px auto', padding: '0 20px', borderTop: '1px solid rgba(212, 175, 55, 0.3)', paddingTop: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '34px', color: '#997c17', marginBottom: '10px' }}>Flooded Guest Experiences</h2>
          <p style={{ color: '#4a5568' }}>Real feedback from travelers who experienced supreme mountain luxury.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          {content.length > 0 ? (
            content.map((item) => (
              <div key={item.id} style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#0891b2', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
                  {item.category || 'Review'} • 5 Stars
                </span>
                <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '12px', color: '#1a202c' }}>{item.title}</h3>
                <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>"{item.description}"</p>
                <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#059669', fontWeight: 'bold', fontSize: '14px' }}>— {item.author}</span>
                  <span style={{ color: '#d97706', fontSize: '16px' }}>★★★★★</span>
                </div>
              </div>
            ))
          ) : (
            // Backup fallback reviews so section is never empty
            <>
              <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#0891b2', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Dome Suite • 5 Stars</span>
                <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '12px', color: '#1a202c' }}>Breathtaking Views</h3>
                <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>"The glass domes at Amantra Hills are out of this world. Waking up to the mountain mist was a spiritual experience."</p>
                <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#059669', fontWeight: 'bold', fontSize: '14px' }}>— Priya Sharma</span>
                  <span style={{ color: '#d97706', fontSize: '16px' }}>★★★★★</span>
                </div>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#0891b2', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Skywalk Cafe • 5 Stars</span>
                <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '12px', color: '#1a202c' }}>Unmatched Dining</h3>
                <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>"Hanging out at the Skywalk Cafe in the evening breeze with hot coffee and wood-fired pizza was absolute perfection."</p>
                <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#059669', fontWeight: 'bold', fontSize: '14px' }}>— Rohan Verma</span>
                  <span style={{ color: '#d97706', fontSize: '16px' }}>★★★★★</span>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid rgba(212, 175, 55, 0.3)', color: '#4a5568', fontSize: '14px', backgroundColor: '#f4f0e6' }}>
        <p>© 2026 Amantra Hills Rishikesh. All Rights Reserved. Address: 48XX+Q9M, Neergarh Waterfall Rd, Narendra Nagar, Kurikhal, Uttarakhand 249201</p>
      </footer>

      {/* Smart Multilingual AI Chatbot & WhatsApp Direct Booking Button */}
      <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end', fontFamily: 'serif' }}>
        <a
          href="https://wa.me/919100009310?text=Hi,%20I%20would%20like%20to%20check%20availability%20and%20book%20a%20stay%20at%20Amantra%20Hills%20Rishikesh."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '50px',
            padding: '14px 24px',
            fontSize: '14px',
            fontWeight: 'bold',
            boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          💬 Book via WhatsApp
        </a>

        <AIChatbot />
      </div>

    </main>
  );
}
