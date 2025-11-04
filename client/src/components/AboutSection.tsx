import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const education = [
    {
      degree: "B.Tech (Electrical Engineering)",
      institution: "Netaji Subhash University of Technology (NSUT)",
      period: "2023-2027",
      grade: "CGPA 7.83",
    },
    {
      degree: "CBSE (Class XII)",
      institution: "Balvantray Mehta Vidya Bhawan (A.S.M.A.)",
      period: "2022",
      grade: "89%",
    },
    {
      degree: "CBSE (Class X)",
      institution: "Balvantray Mehta Vidya Bhawan (A.S.M.A.)",
      period: "2020",
      grade: "91%",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-24 lg:py-32"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            A dedicated engineering student with a passion for innovation, problem-solving, and creating impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Card className="p-6 md:p-8 backdrop-blur-md bg-card/80 border-card-border hover-elevate">
              <h3 className="text-xl md:text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education Journey
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative pl-6 border-l-2 border-primary/30 transition-all duration-500 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                    data-testid={`education-${index}`}
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                      <span className="text-sm font-medium text-primary">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Card className="p-6 md:p-8 backdrop-blur-md bg-card/80 border-card-border hover-elevate">
              <h3 className="text-xl md:text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Quick Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Top 50 / 700+</span> teams at CodeX 2.0 Hackathon
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">400+ problems</span> solved on LeetCode, GFG, Codeforces
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">She Codes Scholar</span> - Selected based on academics & coding proficiency
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Cisco Certified</span> in Introduction to Cybersecurity
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">NPTEL Certified</span> in Innovation, Business & Design Thinking
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
