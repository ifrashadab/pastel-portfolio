import { Card } from "@/components/ui/card";
import { Award, Trophy, BookOpen, Code2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AchievementsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const achievements = [
    {
      icon: Trophy,
      title: "CodeX 2.0 Hackathon",
      description: "Top 50 out of 700+ teams. Selected for the offline pitching round and presented idea to investors",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Award,
      title: "Cisco Networking Academy",
      description: "Introduction to Cybersecurity certification. Gained foundational knowledge in online threats, security principles, cryptography, and cyber defense",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Award,
      title: "She Codes Scholarship",
      description: "Selected among highly competitive applicants based on academic performance, coding proficiency, and community involvement",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Code2,
      title: "Coding Achievements",
      description: "400+ problems solved on LeetCode, GeeksforGeeks, and Codeforces across data structures and algorithms",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: BookOpen,
      title: "NPTEL - Innovation & Business",
      description: "Certification in Innovation, Business, and Entrepreneurship. Gained insights into market dynamics, start-up ecosystem, and business model innovation",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: BookOpen,
      title: "NPTEL - Design Thinking",
      description: "Achieved 80 percentile, showcasing proficiency in user-centred innovation, problem-solving frameworks, and creative ideation techniques",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-muted/30"
      data-testid="section-achievements"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Recognition for dedication, hard work, and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`achievement-${index}`}
              >
                <Card className="h-full p-6 backdrop-blur-md bg-card/80 border-card-border hover-elevate group overflow-visible">
                  <div className={`w-12 h-12 rounded-full ${achievement.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${achievement.color}`} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
