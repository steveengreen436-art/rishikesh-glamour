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
    <main className="min-h-screen bg-black text-white selection:bg-cyan-400 selection:text-black">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24 md:py-36 text-center px-6 border-b border-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black pointer-events-none"></div>
        <span className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-bold mb-4 block">Rishikesh, Uttarakhand • The Spiritual Luxury</span>
        <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 mb-6 tracking-tight">
          Rishikesh Majesty
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto italic font-light mb-10">
          Where supreme modern luxury meets the timeless flow of the holy Ganges. Experience perfection.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-cyan-400 text-black font-extrabold px-8 py-4 rounded-full hover:bg-white shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all">
            Explore Suites
          </button>
          <button className="border border-cyan-500/40 text-cyan-300 px-8 py-4 rounded-full hover:bg-cyan-950/40 transition-all">
            Romantic Getaways
          </button>
        </div>
      </div>

      {/* Database / Reviews Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-3">Glowing Testimonial & Data Stream</h2>
          <p className="text-gray-400 text-sm">Real reviews and luxury blogs dynamically synced from your cloud database.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.map((item) => (
            <div key={item.id} className="p-8 border border-cyan-900/60 rounded-3xl bg-gray-950 hover:border-cyan-400 transition-all shadow-[0_0_25px_rgba(34,211,238,0.08)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold block mb-2">{item.category || 'Review'}</span>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{item.description}"</p>
              </div>
              <div className="border-t border-gray-900 pt-4 flex justify-between items-center">
                <span className="text-sm font-bold text-purple-400">— {item.author}</span>
                <span className="text-yellow-400 text-sm">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Floating Smart AI Chatbot */}
      <AIChatbot />

    </main>
  );
}
