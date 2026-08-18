'use client';
import { useState, useRef, useEffect } from 'react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: "⚡ Boom! **SkyWalker** is online. Forget boring bots—I'm your hyper-smart, slightly sarcastic digital concierge here at Amantra Hills, Narendra Nagar. What's the mission today? Booking a geodesic dome, hunting down the best coffee at Skywalk Cafe, or just testing my IQ? Fire away! (English, हिन्दी, ਪੰਜਾਬੀ all welcome!)" 
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

    // Intelligent response delay for realism
    setTimeout(() => {
      let botReply = getSkyWalkerSmartReply(userMessage);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 800);
  };

  const getSkyWalkerSmartReply = (query: string) => {
    const q = query.toLowerCase();

    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('namaste')) {
      return "Well look who decided to drop by! 👋 Welcome to my domain. How can SkyWalker upgrade your Himalayan escape right now?";
    }
    if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('book') || q.includes('stay')) {
      return "💸 Wanting that VIP mountain view? Our rates depend on whether you choose a plush geodesic dome suite or standard luxury. Skip the guesswork and dial our direct VIP line right now: **+91 9100009310**!";
    }
    if (q.includes('food') || q.includes('cafe') || q.includes('eat') || q.includes('restaurant') || q.includes('coffee')) {
      return "☕ Ah, the famous **Skywalk Cafe**! It's cantilevered over the ridge so you can sip artisanal coffee while floating above the clouds. Pro tip: Try the wood-fired pizza and watch the valley lights turn on at dusk.";
    }
    if (q.includes('wifi') || q.includes('internet') || q.includes('work')) {
      return "📶 Blazing fast fiber optic Wi-Fi across the entire property. Whether you're actually closing business deals or just flexing your mountain reels on Instagram, you won't experience a single lag.";
    }
    if (q.includes('joke') || q.includes('funny') || q.includes('laugh')) {
      return "🤖 Why do mountain resorts make terrible secret agents? Because no matter what, they always end up *peaking*! ...Hey, I'm a luxury concierge, not a comedy club headliner, but I bring the entertainment!";
    }
    if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('reach')) {
      return "🗺️ We are perched high up at Narendra Nagar (Kurikhal, Uttarakhand 249201), near the gorgeous Neergarh Waterfall road. Clean mountain air, zero city pollution, 100% pure vibe.";
    }
    if (q.includes('waterfall') || q.includes('attraction') || q.includes('sight') || q.includes('temple')) {
      return "🌊 You're just a short trip away from the stunning Neer Waterfall (~6.2 km) and the legendary sunrise views at Kunjapuri Temple (~14.4 km). Want me to have our front desk arrange a cab for you?";
    }

    // Dynamic adaptive responses so she never sounds repetitive or robotic
    const smartFallbacks = [
      "🧠 That's a unique query! While I'm a genius, for exact custom arrangements, our human team is lightning fast. Call our hotline at **+91 9873767624**!",
      "✨ Ooh, plot twist! That's a new one for my database. Let's get you sorted—are you looking into our glass domes, our dining options, or local trekking spots?",
      "🎯 You're keeping me on my toes today! Drop a line to our reservations manager at **+91 9811167624** or ask me about our cafe, amenities, or rooms.",
      "⚡ Sharp question! My neural nets are buzzing. Do you want more details on the Skywalk Cafe menu or our panoramic rooftop terrace?"
    ];
    
    return smartFallbacks[Math.floor(Math.random() * smartFallbacks.length)];
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
            boxShadow: '0 10px 30px rgba(6, 182, 212, 0.45)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'transform 0.2s ease',
          }}
        >
          ⚡ Chat with SkyWalker AI
        </button>
      ) : (
        <div
          style={{
            width: '380px',
            height: '540px',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 15px 45px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(212, 175, 55, 0.5)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
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
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* WhatsApp Direct Booking Button in Header */}
              <a
                href="https://wa.me/919100009310?text=Hi,%20I%20would%20like%20to%20book%20a%20stay%20via%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                title="Book via WhatsApp"
                style={{
                  background: '#22c55e',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '6px 10px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  boxShadow: '0 2px 6px rgba(34, 197, 94, 0.4)',
                }}
              >
                💬 WhatsApp
              </a>

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
          </div>

          {/* Messages Area */}
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
                  maxWidth: '84%',
                  backgroundColor: msg.sender === 'user' ? '#0891b2' : '#ffffff',
                  color: msg.sender === 'user' ? '#ffffff' : '#1e293b',
                  padding: '12px 16px',
                  borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  boxShadow: msg.sender === 'bot' ? '0 3px 12px rgba(0,0,0,0.05)' : 'none',
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
                  color: '#0891b2',
                  padding: '10px 14px',
                  borderRadius: '16px',
                  fontSize: '13px',
                  fontStyle: 'italic',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
                }}
              >
                ⚡ SkyWalker is computing a brilliant reply...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
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
