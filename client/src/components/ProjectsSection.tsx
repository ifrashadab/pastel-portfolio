import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ProjectsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const projects = [
    {
      title: "SafeTrail",
      description: "Built an application with an AI chatbot, danger zone alerts, and lost & found system to enhance safety and convenience for tourists in Northeast India",
      tech: ["React", "AI/ML", "Firebase", "Geolocation"],
      liveLink: "https://safetrail-2.onrender.com/",
      githubLink: "https://github.com/ifrashadab",
      date: "Sept 2025",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "Sahara - Emergency SOS",
      description: "Built a real-time community-driven SOS app with AI medical chatbot (Python, NLP), reducing average response time by 40%. Integrated secure coding practices & REST APIs for real-time alerts and volunteer matching",
      tech: ["React", "Firebase", "Python", "NLP", "REST APIs"],
      liveLink: null,
      githubLink: "https://github.com/niyati2912/sahara-codex",
      date: "Aug 2025",
      gradient: "from-accent/20 to-secondary/20",
    },
    {
      title: "Portfolio Website",
      description: "Created a personal portfolio (HTML, CSS, JS) to showcase projects and skills. Deployed on GitHub Pages with version control",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      liveLink: "https://github.com/ifrashadab/ifra.portfolio",
      githubLink: "https://github.com/ifrashadab/ifra.portfolio",
      date: "June 2025",
      gradient: "from-secondary/20 to-primary/20",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-24 lg:py-32"
      data-testid="section-projects"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Innovative solutions built with passion and cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-testid={`project-${index}`}
            >
              <Card className="h-full flex flex-col p-6 backdrop-blur-md bg-card/80 border-card-border hover-elevate group overflow-visible">
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-4`} />
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{project.date}</p>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`tech-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  {project.liveLink && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveLink!, "_blank")}
                      className="flex-1 hover-elevate active-elevate-2"
                      data-testid={`button-demo-${index}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.githubLink, "_blank")}
                    className={`${project.liveLink ? "" : "flex-1"} hover-elevate active-elevate-2`}
                    data-testid={`button-github-${index}`}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
