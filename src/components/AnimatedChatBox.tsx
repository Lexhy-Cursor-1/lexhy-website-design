import { useState, useEffect } from "react";
import { Send, MessageSquare } from "lucide-react";

const chatTexts = [
  "draft an employment agreement for a remote software developer...",
  "draft a shareholders agreement between three co-founders...", 
  "draft a general terms agreement for my SaaS platform...",
  "draft a non-disclosure agreement for potential investors...",
  "draft a service agreement for my consulting business...",
  "draft a partnership agreement for joint venture...",
  "draft a lease agreement for commercial office space..."
];

const AnimatedChatBox = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentFullText = chatTexts[currentTextIndex];
    
    if (isTyping) {
      const timer = setTimeout(() => {
        if (currentIndex <= currentFullText.length) {
          setDisplayText(currentFullText.slice(0, currentIndex));
          setCurrentIndex(prev => prev + 1);
        } else {
          // Finished typing, wait then move to next text
          setIsTyping(false);
          setTimeout(() => {
            setCurrentIndex(0);
            setDisplayText("");
            setCurrentTextIndex((prev) => (prev + 1) % chatTexts.length);
            setIsTyping(true);
          }, 2000);
        }
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [currentTextIndex, currentIndex, isTyping]);

  return (
    <div className="w-full max-w-4xl mx-auto mb-16">
      <div className="bg-card/30 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">LEXHY AI Assistant</span>
          <div className="flex gap-1 ml-auto">
            <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-secondary rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-accent rounded-full opacity-60"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border/30">
          <div className="flex-1">
            <p className="text-lg font-light text-muted-foreground">
              {displayText}
              {isTyping && (
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse"></span>
              )}
            </p>
          </div>
          <button className="bg-primary text-primary-foreground p-3 rounded-lg hover:shadow-glow transition-all duration-300 flex-shrink-0">
            <Send className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
          <span>AI-powered legal document drafting</span>
          <span>⚖️ Not legal advice</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedChatBox;