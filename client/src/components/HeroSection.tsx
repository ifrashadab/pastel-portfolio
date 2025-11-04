import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Code } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-11-05 at 1.40.52 AM (2)_1762287346131.jpeg";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Electrical Engineer",
    "AI & Cybersecurity Enthusiast",
    "Innovator",
  ];

  useEffect(() => {
    let charIndex = 0;
    const currentPhrase = phrases[currentPhraseIndex];
    
    const typingInterval = setInterval(() => {
      if (charIndex <= currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0">
        <img
          src={profileImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>
      
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/20 to-accent/20"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
            <img
              src={profileImage}
              alt="Ifra Shadab"
              className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover border-4 border-white/50 shadow-2xl relative z-10 backdrop-blur-sm"
              data-testid="img-profile"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground">
              hey, i am <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">ifra shadab</span> 👋
            </h1>
            
            <div className="h-12 md:h-16">
              <p className="text-xl md:text-3xl font-medium text-muted-foreground">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              B.Tech Electrical Engineering @ NSUT Delhi • Passionate about building innovative solutions with AI/ML and Cybersecurity
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="rounded-full px-8 hover-elevate active-elevate-2"
              data-testid="button-view-projects"
            >
              View My Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="rounded-full px-8 backdrop-blur-md hover-elevate active-elevate-2"
              data-testid="button-contact"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover-elevate active-elevate-2"
              onClick={() => window.open("https://github.com/ifrashadab", "_blank")}
              data-testid="link-github"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover-elevate active-elevate-2"
              onClick={() => window.open("https://in.linkedin.com/in/ifra-shadab-913359285", "_blank")}
              data-testid="link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover-elevate active-elevate-2"
              onClick={() => window.open("https://leetcode.com/u/ifrashadab/", "_blank")}
              data-testid="link-leetcode"
            >
              <Code className="h-5 w-5" />
            </Button>
          </div>

          <button
            onClick={() => scrollToSection("#about")}
            className="absolute bottom-8 animate-bounce"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}
