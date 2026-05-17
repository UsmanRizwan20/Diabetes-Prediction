export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-background mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <span className="text-xl font-bold text-foreground">
              DeepHealth<span className="text-primary">.ai</span>
            </span>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1 text-center">
            &copy; 2026 DeepHealth AI Inc. All rights reserved. For research purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
