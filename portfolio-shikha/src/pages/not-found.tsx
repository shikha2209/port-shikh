import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      
      <h1 className="text-8xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-linear-to-br from-primary to-secondary mb-6">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved to another universe.
      </p>
      
      <a href="/">
        <Button size="lg" className="rounded-full gap-2 px-8">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Button>
      </a>
    </div>
  );
}
