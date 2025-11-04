import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            Built with ❤️ by <span className="font-semibold text-foreground">Ifra Shadab</span>
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>

      <Button
        size="icon"
        className="fixed bottom-8 right-8 rounded-full shadow-lg hover-elevate active-elevate-2 z-40"
        onClick={scrollToTop}
        data-testid="button-scroll-top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
}
