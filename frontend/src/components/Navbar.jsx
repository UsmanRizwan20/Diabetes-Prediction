import { Activity } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              DeepHealth<span className="text-primary">.ai</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Platform</a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Research</a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">About Us</a>
            <button className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
