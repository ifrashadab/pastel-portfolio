import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Heart } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ExperienceSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const experiences = [
    {
      icon: Briefcase,
      role: "C++ Development Intern",
      organization: "Encryptix",
      period: "Aug 2024 (4 weeks)",
      description: "Completed 5 C++ projects, gaining hands-on experience in problem-solving, debugging, and development",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      role: "NSS Volunteer",
      organization: "NSUT",
      period: "Ongoing",
      description: "Assisted at polling booths, attended seminars (e.g., Project Life – IIT Delhi), and conducted career sessions in government schools",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Heart,
      role: "Women Security Team",
      organization: "Moksha Fest 2025",
      period: "2025",
      description: "Ensured event safety, supported emergency response and coordinated crowd control",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 md:py-24 lg:py-32"
      data-testid="section-experience"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Experience & Leadership
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Building skills through internships, volunteering, and community service
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <div
                key={experience.role}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`experience-${index}`}
              >
                <Card className="p-6 md:p-8 backdrop-blur-md bg-card/80 border-card-border hover-elevate overflow-visible">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`w-16 h-16 rounded-full ${experience.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-8 w-8 ${experience.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold mb-1">
                        {experience.role}
                      </h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                        <p className="text-muted-foreground font-medium">
                          {experience.organization}
                        </p>
                        <span className="hidden md:inline text-muted-foreground">•</span>
                        <p className="text-sm text-muted-foreground">
                          {experience.period}
                        </p>
                      </div>
                      <p className="text-muted-foreground">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-center">
            Extra-Curricular Activities
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 backdrop-blur-md bg-card/80 border-card-border hover-elevate overflow-visible">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏀</span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-2">Basketball Athlete</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Competed in interschool tournaments at school level
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Teamwork</Badge>
                    <Badge variant="secondary" className="text-xs">Leadership</Badge>
                    <Badge variant="secondary" className="text-xs">Competitive Spirit</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 backdrop-blur-md bg-card/80 border-card-border hover-elevate overflow-visible">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-2">NSUT Sports Representative</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Represented Electrical Engineering Girls' Team in Winter Sports Interbranch Tournament
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Team Sports</Badge>
                    <Badge variant="secondary" className="text-xs">University Level</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
