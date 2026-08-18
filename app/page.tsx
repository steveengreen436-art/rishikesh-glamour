'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import AIChatbot from '../components/AIChatbot';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [content, setContent] = useState<any[]>([]);
  
  // Interactive Booking Form State
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    roomType: 'Geo AC Dome (Mountain View)',
    guests: '2 Adults',
    name: '',
    phone: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Customer Review Modal State
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: '5', comment: '', category: 'Dome Suite' });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('hotel_content').select('*');
      setContent(data || []);
    }
    fetchData();
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    const message = `Hello, I want to book a stay at Amantra Hills Rishikesh.%0A- Name: ${bookingData.name}%0A- Phone: ${bookingData.phone}%0A- Room: ${bookingData.roomType}%0A- Check-In: ${bookingData.checkIn}%0A- Check-Out: ${bookingData.checkOut}%0A- Guests: ${bookingData.guests}`;
    window.open(`https://wa.me/919100009310?text=${message}`, '_blank');
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    const reviewMsg = `Hello, I'd like to leave a review for Amantra Hills Rishikesh:%0A- Name: ${newReview.name}%0A- Rating: ${newReview.rating} Stars%0A- Category: ${newReview.category}%0A- Review: ${newReview.comment}`;
    window.open(`https://wa.me/919100009310?text=${reviewMsg}`, '_blank');
  };

  return (
    <main style={{ backgroundColor: '#fcfbf7', color: '#1a202c', minHeight: '100vh', fontFamily: 'serif', overflowX: 'hidden' }}>
      
      {/* Top Announcement Bar */}
      <div style={{ background: 'linear-gradient(90deg, #d4af37, #06b6d4, #10b981)', color: '#ffffff', padding: '10px 20px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>
        ✨ AMANTRA HILLS RISHIKESH • RESERVATIONS: +91 9100009310 / +91 9873767624 / +91 9811167624 ✨
      </div>

      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(252, 251, 247, 0.9)' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#b89728', letterSpacing: '2px', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
          AMANTRA HILLS
        </div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
          <span onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: activeTab === 'home' ? '#0e7490' : '#4a5568', borderBottom: activeTab === 'home' ? '2px solid #06b6d4' : 'none', paddingBottom: '4px', transition: 'all 0.3s' }}>Home</span>
          <span onClick={() => setActiveTab('dining')} style={{ cursor: 'pointer', color: activeTab === 'dining' ? '#0e7490' : '#4a5568', borderBottom: activeTab === 'dining' ? '2px solid #06b6d4' : 'none', paddingBottom: '4px', transition: 'all 0.3s' }}>Dining (Skywalk)</span>
          <span onClick={() => setActiveTab('amenities')} style={{ cursor: 'pointer', color: activeTab === 'amenities' ? '#0e7490' : '#4a5568', borderBottom: activeTab === 'amenities' ? '2px solid #06b6d4' : 'none', paddingBottom: '4px', transition: 'all 0.3s' }}>Amenities</span>
          <span onClick={() => setActiveTab('attractions')} style={{ cursor: 'pointer', color: activeTab === 'attractions' ? '#0e7490' : '#4a5568', borderBottom: activeTab === 'attractions' ? '2px solid #06b6d4' : 'none', paddingBottom: '4px', transition: 'all 0.3s' }}>Attractions</span>
          <span onClick={() => setActiveTab('contact')} style={{ cursor: 'pointer', color: activeTab === 'contact' ? '#0e7490' : '#4a5568', borderBottom: activeTab === 'contact' ? '2px solid #06b6d4' : 'none', paddingBottom: '4px', transition: 'all 0.3s' }}>Contact & Booking</span>
        </div>
      </nav>

      {/* ================= HOME PAGE VIEW ================= */}
      {activeTab === 'home' && (
        <div>
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
                <button onClick={() => setActiveTab('dining')} style={{ background: 'transparent', color: '#0891b2', border: '2px solid #0891b2', padding: '16px 36px', borderRadius: '50px', cursor: 'pointer', fontSize: '15px', fontWeight: 'bold' }}>
                  Explore Skywalk Cafe ✨
                </button>
              </div>
            </div>
          </header>

          {/* NEW: Immersive Video Showcase Section */}
          <section style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
            <span style={{ color: '#059669', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Live Atmosphere</span>
            <h2 style={{ fontSize: '36px', color: '#997c17', margin: '10px 0 20px 0' }}>Experience the Mountain Mist & Glamping</h2>
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '2px solid rgba(212, 175, 55, 0.4)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', background: '#000' }}>
              <video autoPlay muted loop playsInline style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }}>
                <source src="/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
            Dining at Amantra Hills is not merely about food; it is an immersive sensory celebration. The <strong style={{ color: '#0891b2' }}>Skywalk Cafe</strong> hangs suspended in the crisp mountain air, offering an open-air panoramic dining environment.
          </p>
        </div>
      )}

      {/* ================= AMENITIES PAGE VIEW ================= */}
      {activeTab === 'amenities' && (
        <div style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
          <span style={{ color: '#059669', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Supreme Luxury Facilities</span>
          <h1 style={{ fontSize: '48px', color: '#997c17', margin: '15px 0 25px 0' }}>World-Class Resort Amenities</h1>
          <p style={{ fontSize: '18px', color: '#2d3748', lineHeight: '1.9', marginBottom: '40px' }}>
            At Amantra Hills, every single facility is meticulously engineered to provide absolute comfort and deep relaxation in the lap of nature.
          </p>
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
        </div>
      )}

      {/* ================= CONTACT PAGE VIEW ================= */}
      {activeTab === 'contact' && (
        <div style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
          <span style={{ color: '#059669', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Get in Touch & Reserve</span>
          <h1 style={{ fontSize: '48px', color: '#997c17', margin: '15px 0 25px 0' }}>Contact & Instant Booking Inquiry</h1>
          <div style={{ background: '#ffffff', border: '2px solid rgba(212, 175, 55, 0.5)', padding: '35px', borderRadius: '25px', boxShadow: '0 10px 35px rgba(212, 175, 55, 0.15)', marginBottom: '40px' }}>
            <h3 style={{ color: '#997c17', fontSize: '24px', marginBottom: '20px' }}>✨ Book Your Dome Stay Instantly</h3>
            <form onSubmit={handleBookingSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#4a5568', marginBottom: '8px' }}>Your Full Name</label>
                <input type="text" required placeholder="Priya Sharma" value={bookingData.name} onChange={(e) => setBookingData({...bookingData, name: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#4a5568', marginBottom: '8px' }}>WhatsApp Mobile Number</label>
                <input type="tel" required placeholder="+91 98765 43210" value={bookingData.phone} onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#4a5568', marginBottom: '8px' }}>Check-In Date</label>
                <input type="date" required value={bookingData.checkIn} onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#4a5568', marginBottom: '8px' }}>Check-Out Date</label>
                <input type="date" required value={bookingData.checkOut} onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#4a5568', marginBottom: '8px' }}>Room Suite Type</label>
                <select value={bookingData.roomType} onChange={(e) => setBookingData({...bookingData, roomType: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '14px', background: '#fff' }}>
                  <option>Geo AC Dome (Mountain View)</option>
                  <option>Geo AC Dome (Rishikesh Valley View)</option>
                </select>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: '#ffffff', fontWeight: 'bold', padding: '14px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '15px' }}>
                  🚀 Proceed to WhatsApp Booking
                </button>
              </div>
            </form>
            {bookingSubmitted && (
              <div style={{ marginTop: '15px', padding: '12px', background: '#f0fdf4', color: '#166534', borderRadius: '10px', fontSize: '14px', textAlign: 'center', fontWeight: 'bold' }}>
                ✅ Inquiry prepared! Redirecting securely to WhatsApp...
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= RESORT PHOTO & MEDIA GALLERY SECTION ================= */}
      <section style={{ maxWidth: '1150px', margin: '80px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '38px', color: '#997c17', marginBottom: '15px' }}>Resort Gallery & Domes</h2>
          <p style={{ color: '#4a5568', maxWidth: '750px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
            Take a visual journey through our luxurious geodesic domes, scenic mountain landscapes, and cozy interior setups.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          {/* Newly Added Bedroom Photo */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013872.jpg" alt="Neatly Made Luxury Bed Setup" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Cozy Interior Bed Setup</div>
          </div>

          {/* Newly Added Second Video Walkthrough */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <video controls style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}>
              <source src="/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Room & Property Video Tour</div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/home page image 2.jpg" alt="Nighttime City Panorama" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Nighttime Valley View</div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/home page image 1.jpg" alt="Twilight Property Aerial" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Twilight Aerial View</div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013862.jpg" alt="Misty Mountain Day View" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Misty Mountain Morning</div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013863.jpg" alt="Valley Outlook" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Scenic Valley Outlook</div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013860.jpg" alt="Guest on Property" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Resort Grounds & Seating</div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013866.jpg" alt="Individual Dome Exterior" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Geodesic Dome Exterior</div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013867.jpg" alt="Yellow Dome Bed Setup" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Yellow Suite Bed Setup</div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013859.jpg" alt="Yellow Dome Interior and Chairs" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Yellow Suite Lounge Area</div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013865.jpg" alt="Teal Dome Bed and Seating" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Teal Suite Master Bed</div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <img src="/1000013870.jpg" alt="Teal Dome Bedroom and Windows" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px', fontWeight: 'bold', color: '#1a202c' }}>Teal Suite Panorama Windows</div>
          </div>

        </div>
      </section>

      {/* ================= WHAT OUR GUESTS SAY (REVIEWS SECTION + LEAVE REVIEW BUTTON) ================= */}
      <section style={{ maxWidth: '1150px', margin: '90px auto 40px auto', padding: '0 20px', borderTop: '1px solid rgba(212, 175, 55, 0.3)', paddingTop: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
          <div>
            <span style={{ color: '#059669', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' }}>Verified Testimonials</span>
            <h2 style={{ fontSize: '38px', color: '#997c17', marginTop: '5px' }}>What Our Guests Say</h2>
            <p style={{ color: '#4a5568', fontSize: '15px' }}>Read genuine feedback from families, couples, and travelers who stayed with us.</p>
          </div>
          <button 
            onClick={() => setShowReviewModal(true)} 
            style={{ background: 'linear-gradient(135deg, #0891b2, #0e7490)', color: '#ffffff', padding: '14px 28px', borderRadius: '30px', border: 'none', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 15px rgba(8, 145, 178, 0.3)' }}
          >
            ✍️ Leave a Review
          </button>
        </div>

        {/* Review Modal Pop-up */}
        {showReviewModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            <div style={{ background: '#fff', padding: '35px', borderRadius: '24px', maxWidth: '500px', width: '100%', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
              <h3 style={{ color: '#997c17', fontSize: '24px', marginBottom: '15px' }}>Share Your Experience</h3>
              <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '5px' }}>Your Name</label>
                  <input type="text" required placeholder="Aarav Malhotra" value={newReview.name} onChange={(e) => setNewReview({...newReview, name: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '5px' }}>Rating</label>
                  <select value={newReview.rating} onChange={(e) => setNewReview({...newReview, rating: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff' }}>
                    <option value="5">⭐⭐⭐⭐⭐ (5/5 - Exceptional)</option>
                    <option value="4">⭐⭐⭐⭐ (4/5 - Great Experience)</option>
                    <option value="3">⭐⭐⭐ (3/5 - Average)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '5px' }}>Experience Category</label>
                  <select value={newReview.category} onChange={(e) => setNewReview({...newReview, category: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff' }}>
                    <option>Dome Suite Stay</option>
                    <option>Skywalk Cafe Dining</option>
                    <option>Resort Hospitality</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '5px' }}>Your Comments</label>
                  <textarea rows={3} required placeholder="Tell us about your stay..." value={newReview.comment} onChange={(e) => setNewReview({...newReview, comment: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button type="submit" style={{ flex: 1, background: '#16a34a', color: '#fff', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Submit via WhatsApp</button>
                  <button type="button" onClick={() => setShowReviewModal(false)} style={{ background: '#cbd5e1', color: '#334155', padding: '12px 20px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Close</button>
                </div>
              </form>
              {reviewSubmitted && <p style={{ color: '#16a34a', fontWeight: 'bold', marginTop: '10px', textAlign: 'center' }}>Review sent to WhatsApp desk!</p>}
            </div>
          </div>
        )}

        {/* Realistic Review Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#0891b2', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Dome Suite Stay</span>
            <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '12px', color: '#1a202c' }}>Magical Stargazing Experience</h3>
            <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>"The glass domes at Amantra Hills are sensational. Sleeping under the stars while being fully cozy with room heating was a dream come true."</p>
            <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#059669', fontWeight: 'bold', fontSize: '14px' }}>— Priya Sharma</span>
              <span style={{ color: '#d97706', fontSize: '16px' }}>★★★★★</span>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#0891b2', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Skywalk Cafe</span>
            <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '12px', color: '#1a202c' }}>Unmatched Evening Views</h3>
            <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>"Hanging out at the Skywalk Cafe in the evening mountain breeze with hot coffee and wood-fired pizza was absolute perfection."</p>
            <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#059669', fontWeight: 'bold', fontSize: '14px' }}>— Rohan Verma</span>
              <span style={{ color: '#d97706', fontSize: '16px' }}>★★★★★</span>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#0891b2', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Family Vacation</span>
            <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '12px', color: '#1a202c' }}>Peaceful Retreat from City Life</h3>
            <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>"Cleanliness was top-notch across the entire property. The kids loved the open lawns and the bonfire evenings were very warm and welcoming."</p>
            <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#059669', fontWeight: 'bold', fontSize: '14px' }}>— Ananya & Nikhil Gupta</span>
              <span style={{ color: '#d97706', fontSize: '16px' }}>★★★★☆</span>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#0891b2', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Weekend Getaway</span>
            <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '12px', color: '#1a202c' }}>Great Location Near Neergarh</h3>
            <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>"Very close to Neer Waterfall road in Narendra Nagar. The drive up is scenic and the hospitality team went out of their way to assist us."</p>
            <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#059669', fontWeight: 'bold', fontSize: '14px' }}>— Vikrant Joshi</span>
              <span style={{ color: '#d97706', fontSize: '16px' }}>★★★★☆</span>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#0891b2', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Solo Traveler</span>
            <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '12px', color: '#1a202c' }}>Serene & Safe Atmosphere</h3>
            <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>"I stayed here to work remotely for 3 days. High-speed Wi-Fi worked smoothly, and the view from the desk was inspiring. Minor hiccup with hot water timing on day one, but staff resolved it quickly."</p>
            <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#059669', fontWeight: 'bold', fontSize: '14px' }}>— Sneha K.</span>
              <span style={{ color: '#d97706', fontSize: '16px' }}>⭐⭐⭐ (3.5/5)</span>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '30px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#0891b2', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Anniversary Trip</span>
            <h3 style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '12px', color: '#1a202c' }}>Unforgettable Romance in the Hills</h3>
            <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>"We celebrated our 5th wedding anniversary in the Teal Suite. The management arranged special lighting and flowers. Truly memorable!"</p>
            <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#059669', fontWeight: 'bold', fontSize: '14px' }}>— Mohit & Ritu</span>
              <span style={{ color: '#d97706', fontSize: '16px' }}>★★★★★</span>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid rgba(212, 175, 55, 0.3)', color: '#4a5568', fontSize: '14px', backgroundColor: '#f4f0e6' }}>
        <p>© 2026 Amantra Hills Rishikesh. All Rights Reserved. Address: Neergarh Waterfall Rd, Narendra Nagar, Kurikhal, Uttarakhand 249201</p>
      </footer>

      {/* Chatbot & WhatsApp Direct Floating Widget */}
      <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end', fontFamily: 'serif' }}>
        <a href="https://wa.me/919100009310?text=Hello%20Amantra%20Hills,%20I%20would%20like%20to%20inquire%20about%20availability." target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '14px 22px', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
          💬 Chat on WhatsApp
        </a>
        <AIChatbot />
      </div>

    </main>
  );
}
