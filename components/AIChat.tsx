
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Hi! I\'m Dongrim\'s AI assistant. Ask me anything about his projects or skills!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: `You are an AI assistant for Dongrim Kang, a game developer. 
            Base your answers on this info: 
            - Projects: BomberMan (Custom C++ Engine), Blade of Flame (Memory Pool optimization), Gonjiamerica (Unreal Engine 5 horror), Hyper Auto Pets (C++ card game).
            - Skills: C++, Unreal Engine, OpenGL, Custom Engine Arch, Blender.
            - Education: DigiPen Academy Busan graduate.
            - Strengths: Communication, leadership, mediation between art and tech.
            Question: ${userMessage}` }]
          }
        ],
        config: {
          systemInstruction: "You are a helpful and professional portfolio assistant for Dongrim Kang. Answer in English. Keep answers concise and friendly.",
          temperature: 0.7,
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to AI. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-icons text-xl">smart_toy</span>
              <span className="font-bold">Dongrim AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <span className="material-icons">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-primary text-white' : 'bg-white border border-slate-200 text-slate-700 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-100" />
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-grow bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
            />
            <button 
              onClick={handleSend}
              className="bg-primary text-white p-2 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
              disabled={isLoading}
            >
              <span className="material-icons">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        >
          <span className="material-icons text-2xl group-hover:rotate-12 transition-transform">chat</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </button>
      )}
    </div>
  );
};
