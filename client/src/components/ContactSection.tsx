import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Code, Mail } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ContactSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/ifrashadab",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://in.linkedin.com/in/ifra-shadab-913359285",
      color: "hover:text-accent",
    },
    {
      icon: Code,
      label: "LeetCode",
      url: "https://leetcode.com/u/ifrashadab/",
      color: "hover:text-secondary",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:ifra.shadab.ug23@nsut.ac.in",
      color: "hover:text-primary",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-muted/30"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Card className="p-8 md:p-12 backdrop-blur-md bg-card/80 border-card-border text-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-2">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these platforms
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <div
                      key={link.label}
                      className={`transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${200 + index * 100}ms` }}
                    >
                      <Button
                        variant="outline"
                        className="w-full h-auto flex flex-col items-center gap-3 py-6 hover-elevate active-elevate-2 group overflow-visible"
                        onClick={() => window.open(link.url, "_blank")}
                        data-testid={`link-social-${link.label.toLowerCase()}`}
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className={`h-6 w-6 ${link.color} transition-colors`} />
                        </div>
                        <span className="text-sm font-medium">{link.label}</span>
                      </Button>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground mb-4">
                  📧 ifra.shadab.ug23@nsut.ac.in
                </p>
                <p className="text-muted-foreground">
                  📱 +91 9289658878
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
