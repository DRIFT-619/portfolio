import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-4 z-50 px-4">
      <header className="max-w-5xl mx-auto rounded-xl border border-border bg-background/90 backdrop-blur-md">
        <nav className="flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-accent text-sm font-semibold font-sans">
              A
            </span>
            <span className="text-m font-medium text-foreground">
              Ayush Saxena
            </span>
          </Link>

          <div className="flex items-center gap-6 text-m">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Resume
            </a>
            <Link
              href="/for-recruiters"
              className="rounded-md bg-foreground text-background px-3.5 py-1.5 font-medium hover:opacity-90 transition-opacity"
            >
              Feedback
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}