'use client'
import { useState } from 'react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Namaste! 🙏 Welcome to Rishikesh Majesty. How can I help you experience luxury by the Ganges today? (Ask in English, Hindi, or Punjabi!)' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    // Smart context-aware responses matching English, Hindi, and Punjabi keywords
    setTimeout(() => {
      let reply = "I would love to help you with that! For bookings and personalized romantic getaways, please call our front desk or check our luxury suites.";
      
      const lower = userText.toLowerCase();

      // Hindi / Punjabi & English Smart Matching
      if (lower.includes('hindi') || lower.includes('namaste') || lower.includes('kamra') || lower.includes('price') || lower.includes('रुपये') || lower.includes('कमरा')) {
        reply = "नमस्ते! Rishikesh Majesty में आपका स्वागत है। हमारे पास गंगा किनारे सबसे शानदार और आधुनिक कमरे हैं। एक रात का किराया लगभग ₹12,000 से शुरू होता है जिसमें ब्रेकफास्ट शामिल है। क्या आप बुकिंग करना चाहते हैं?";
      } else if (lower.includes('punjabi') || lower.includes('sat sri akal') || lower.includes('kamre') || lower.includes('ki haal')) {
        reply = "सत श्री अकाल जी! Rishikesh Majesty विच आपका स्वागत है। साਡੇ ਕੋਲ Ganga ਦੇ کنਾਰੇ ਬਹੁਤ ਹੀ ਸ਼ਾਨदार room ਹਨ। ਕੀ ਤੁਸੀਂ romantic getaway book ਕਰਨਾ چاہندے ہو؟";
      } else if (lower.includes('romantic') || lower.includes('couple') || lower.includes('honeymoon')) {
        reply = "Our Romantic Getaway package is breathtaking! It includes a private candle-lit dinner by the Ganges, rose petal room decoration, couples spa, and mountain-view suite for ₹25,000/night.";
      } else if (lower.includes('yoga') || lower.includes('meditation') || lower.includes('ganga')) {
        reply = "Rishikesh is the yoga capital of the world! We offer private sunrise yoga sessions right on the banks of the Ganges with master gurus, completely free for our resort guests.";
      } else if (lower.includes('food') || lower.includes('restaurant') || lower.includes('eat') || lower.includes('khana')) {
        reply = "Our multi-cuisine rooftop restaurant 'Tranquility' serves organic, farm-to-table gourmet vegetarian cuisine overlooking the holy river and the mountains.";
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold px-6 py-4 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition-all flex items-center gap-2"
        >
          ✨ Chat with Rishikesh AI
        </button>
      ) : (
        <div className="bg-gray-950 border border-cyan-500/50 w-80 md:w-96 h-[500px] rounded-3xl shadow-[0_0_40px_rgba(34,211,238,0.3)] flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-900 to-purple-900 p-4 flex justify-between items-center border-b border-cyan-500/30">
            <h3 className="font-bold text-cyan-300">Majesty AI Concierge 🇮🇳</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white font-bold">✕</button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={`p-3 rounded-2xl text-sm max-w-[85%] ${m.sender === 'user' ? 'bg-cyan-500 text-black ml-auto font-medium' : 'bg-gray-900 text-gray-200 border border-gray-800'}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="text-xs text-cyan-400 italic animate-pulse">AI is typing in English/Hindi/Punjabi...</div>}
          </div>

          <div className="p-3 border-t border-gray-800 flex gap-2 bg-black">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask in English, हिन्दी, or ਪੰਜਾਬੀ..." 
              className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm border border-gray-800 focus:outline-none focus:border-cyan-400"
            />
            <button onClick={handleSend} className="bg-cyan-400 text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-cyan-300">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
