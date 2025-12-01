import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage, ChatState } from '../types';
import { sendMessageToLivia } from '../services/geminiService';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: 'Olá! Sou Liv.ia, assistente virtual do Dr. Pedro Hammes. Como posso ajudar você a conquistar seu novo sorriso hoje?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [chatState, setChatState] = useState<ChatState>(ChatState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
        inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || chatState === ChatState.LOADING) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setChatState(ChatState.LOADING);

    try {
      const responseText = await sendMessageToLivia(messages, userMsg.text);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
      setChatState(ChatState.IDLE);
    } catch (error) {
      setChatState(ChatState.ERROR);
      // Wait a bit then reset to idle so user can try again
      setTimeout(() => setChatState(ChatState.IDLE), 3000);
    }
  };

  /**
   * Parses text to render Bold (**text**) and Markdown Links ([text](url)) 
   * and clean up lists.
   */
  const renderMessage = (text: string, role: 'user' | 'model') => {
    const isBot = role === 'model';
    // Split by newlines to handle paragraphs
    const lines = text.split('\n');

    return lines.map((line, lineIdx) => {
      // Clean up standalone bullet points (e.g. "* Item" -> "• Item")
      let cleanLine = line;
      if (cleanLine.trim().startsWith('* ')) {
        cleanLine = cleanLine.replace(/^\*\s+/, '• ');
      }

      // If empty line, render a break
      if (!cleanLine.trim()) return <br key={lineIdx} />;

      // Parse Links: [Text](Url)
      // We use a regex to find links, then split the line by them
      const parts: React.ReactNode[] = [];
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(cleanLine)) !== null) {
        // Content before the link
        if (match.index > lastIndex) {
          parts.push(parseBold(cleanLine.slice(lastIndex, match.index), lineIdx * 1000 + lastIndex));
        }

        // The Link itself
        const linkText = match[1];
        const linkUrl = match[2];
        parts.push(
          <a
            key={`link-${lineIdx}-${match.index}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium underline underline-offset-2 transition-colors ${
                isBot 
                ? 'text-clinical-600 hover:text-clinical-800 decoration-clinical-200' // Bot (White bg) -> Blue Link
                : 'text-white hover:text-clinical-100 decoration-clinical-200' // User (Blue bg) -> White Link
            }`}
          >
            {linkText}
          </a>
        );

        lastIndex = match.index + match[0].length;
      }

      // Content after the last link (or whole line if no links)
      if (lastIndex < cleanLine.length) {
        parts.push(parseBold(cleanLine.slice(lastIndex), lineIdx * 1000 + lastIndex));
      }

      return (
        <div key={lineIdx} className={lineIdx > 0 ? "mt-1" : ""}>
          {parts}
        </div>
      );
    });
  };

  /**
   * Helper to parse **Bold** text inside a string segment
   */
  const parseBold = (text: string, baseKey: number) => {
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      // Text before bold
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      // The bold text
      parts.push(
        <strong key={`${baseKey}-${match.index}`} className="font-bold">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }
    // Remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts;
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-clinical-500 hover:bg-clinical-600 text-white p-4 rounded-full shadow-lg shadow-clinical-500/30 transition-transform hover:scale-105 flex items-center gap-2 group border border-white/20"
          aria-label="Abrir chat"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium pr-0 group-hover:pr-2">
            Fale com a Liv.ia
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[550px] max-h-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col border border-graphite-200 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-clinical-500 p-5 flex items-center justify-between text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center relative backdrop-blur-sm">
                 <Sparkles className="w-5 h-5 text-clinical-100" />
                 <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-clinical-500"></div>
              </div>
              <div>
                <h3 className="font-semibold text-sm tracking-wide">Liv.ia</h3>
                <p className="text-xs text-clinical-100/90 font-light">Assistente do Dr. Pedro</p>
              </div>
            </div>
            <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-soft-50 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed font-light ${
                    msg.role === 'user'
                      ? 'bg-clinical-500 text-white rounded-br-none shadow-sm'
                      : 'bg-white text-graphite-600 shadow-sm border border-graphite-100 rounded-bl-none'
                  }`}
                >
                  {renderMessage(msg.text, msg.role)}
                </div>
              </div>
            ))}
            {chatState === ChatState.LOADING && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-graphite-100 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-clinical-500" />
                  <span className="text-xs text-graphite-400">Digitando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-graphite-100 shrink-0">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua dúvida..."
                className="w-full pl-5 pr-12 py-3.5 bg-soft-50 border border-graphite-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-clinical-400 focus:bg-white transition-all placeholder:text-graphite-400 text-graphite-700"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || chatState === ChatState.LOADING}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-clinical-500 text-white rounded-full flex items-center justify-center hover:bg-clinical-600 disabled:opacity-50 disabled:hover:bg-clinical-500 transition-colors shadow-sm"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};