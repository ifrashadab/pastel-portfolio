import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Code, Network, Shield, Wrench } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function SkillsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState("programming");

  const skillCategories = {
    programming: {
      icon: Code,
      title: "Programming",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 90 },
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "MATLAB", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "OOPs", level: 85 },
        { name: "Multithreading", level: 70 },
      ],
    },
    networking: {
      icon: Network,
      title: "Networking",
      skills: [
        { name: "TCP/IP", level: 80 },
        { name: "Routing", level: 75 },
        { name: "Switching", level: 75 },
        { name: "Subnetting", level: 80 },
        { name: "LAN/WAN", level: 78 },
        { name: "OSI Model", level: 85 },
        { name: "SDN", level: 70 },
      ],
    },
    cybersecurity: {
      icon: Shield,
      title: "Cybersecurity",
      skills: [
        { name: "Threat Modeling", level: 80 },
        { name: "Cryptography", level: 85 },
        { name: "Secure Coding", level: 82 },
        { name: "Incident Response", level: 75 },
      ],
    },
    tools: {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "REST APIs", level: 85 },
        { name: "Agile/Scrum", level: 80 },
        { name: "Cloud Computing", level: 70 },
        { name: "Docker", level: 65 },
        { name: "Firebase", level: 82 },
      ],
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-muted/30"
      data-testid="section-skills"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            A diverse skill set spanning multiple domains of technology
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto p-1 gap-2">
              {Object.entries(skillCategories).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                    data-testid={`tab-${key}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <Card className="p-6 md:p-8 backdrop-blur-md bg-card/80 border-card-border">
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`transition-all duration-500 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1000 ease-out"
                              style={{ 
                                width: isVisible ? `${skill.level}%` : "0%",
                                transitionDelay: `${index * 100}ms`
                              }}
                              data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
