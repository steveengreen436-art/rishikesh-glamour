'use client';
import { useState, useRef, useEffect } from 'react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: "⚡ Hey there! I'm **SkyWalker**, your hyper-intelligent digital concierge here at Amantra Hills. Ready to explore luxury by the Ganges, or just here to test my wit? Fire away! (Ask in English, हिन्दी, or ਪੰਜਾਬੀ!)" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulate SkyWalker's smart, witty, adaptive responses
    setTimeout(() => {
      let botReply = generateSkyWalkerResponse(userMessage);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 900);
  };

  const generateSkyWalkerResponse = (query: string) => {
    const q = query.toLowerCase();
    
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('namaste')) {
      return "Well hello back! 🚀 SkyWalker is online and fully caffeinated. What can I upgrade for you today—a dome suite, a table at Skywalk Cafe, or local sightseeing tips?";
    }
    if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('book')) {
      return "💸 Looking for the VIP treatment? Our rates change depending on whether you want a star-studded geodesic dome or standard luxury. Drop a quick line to our direct hotline at **+91 9100009310** to lock down the best insider rates!";
    }
    if (q.includes('food') || q.includes('cafe') || q.includes('restaurant') || q.includes('eat')) {
      return "☕ Ah, the legendary **Skywalk Cafe**! It's suspended right in the cool mountain breeze. Think organic farm-to-table gourmet bites, wood-fired pizzas, and coffee high above the clouds. Trust me, your camera roll will thank you.";
    }
    if (q.includes('wifi') || q.includes('internet')) {
      return "📶 Fast fiber Wi-Fi across the entire property! Whether you're actually working or just posting breathtaking sunset reels to make your friends jealous, I've got you covered.";
    }
    if (q.includes('joke') || q.includes('funny')) {
      return "🤖 Why do mountain resorts make terrible secret agents? Because they can't stop *peaking*! ...Hey, I'm an AI concierge, not a stand-up comic, but I try my best. What else can I help you with?";
    }
    
    // Adaptive fallback response keeping her sharp and dynamic
    return `That's a stellar question! While my database is packed with everything about Amantra Hills, Narendra Nagar, and local waterfalls, let's get you precise info. Give our front desk a ring at **+91 9873767624** or tell me if you want details on our domes, dining, or attractions! ✨`;
  };

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000, fontFamily: 'serif' }}>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #d4af37)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '50px',
            padding: '16px 28px',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(6, 182, 212, 0.4)',
            display: 'flex',
            alignItem: 'center',
            gap: '10px',
            transition: 'transform 0.2s ease',
          }}
        >
          ✨ Chat with SkyWalker
        </button>
      ) : (
        <div
          style={{
            width: '370px',
            height: '520px',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            overflow: 'hidden',
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0f172a, #1e293b)',
              color: '#ffffff',
              padding: '16px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '2px solid #d4af37',
            }}
          >
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#38bdf8', letterSpacing: '1px' }}>
                ⚡ SkyWalker AI
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                Amantra Hills Elite Concierge
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#ffffff',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </div>

          {/* Chat Messages Body */}
          <div
            style={{
              flex: 1,
              padding: '18px',
              overflowY: 'auto',
              backgroundColor: '#f8fafc',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '82%',
                  backgroundColor: msg.sender === 'user' ? '#0891b2' : '#ffffff',
                  color: msg.sender === 'user' ? '#ffffff' : '#1e293b',
                  padding: '12px 16px',
                  borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  boxShadow: msg.sender === 'bot' ? '0 3px 10px rgba(0,0,0,0.04)' : 'none',
                  border: msg.sender === 'bot' ? '1px solid #e2e8f0' : 'none',
                }}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: '#ffffff',
                  color: '#64748b',
                  padding: '10px 14px',
                  borderRadius: '16px',
                  fontSize: '13px',
                  fontStyle: 'italic',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
                }}
              >
                SkyWalker is crafting a sharp reply... ✨
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Footer */}
          <form
            onSubmit={handleSend}
            style={{
              padding: '12px',
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              gap: '8px',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask SkyWalker anything..."
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '20px',
                border: '1px solid #cbd5e1',
                outline: 'none',
                fontSize: '14px',
                backgroundColor: '#f8fafc',
                color: '#0f172a',
              }}
            />
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '20px',
                padding: '0 18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '13px',
                boxShadow: '0 2px 8px rgba(8, 145, 178, 0.3)',
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
