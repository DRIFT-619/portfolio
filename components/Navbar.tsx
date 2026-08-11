import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="sticky top-6 z-50 px-4">
      <header className="max-w-5xl mx-auto rounded-xl border-2 border-muted-foreground bg-background/90 backdrop-blur-md">
        <nav className="flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2.5">

            <div className="rounded-md border-2 border-foreground/50 overflow-hidden">
              <Image
                src="/icon.png"
                alt="Ayush Saxena logo"
                width={28}
                height={28}
              />
            </div>

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
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-md bg-foreground text-background px-3.5 py-1.5 font-medium hover:opacity-90 transition-opacity">
              Resume
            </a>

            {/*<Link
              href="/for-recruiters"
              className="rounded-md bg-foreground text-background px-3.5 py-1.5 font-medium hover:opacity-90 transition-opacity"
            >
              Feedback
            </Link>
            */}

          </div>
        </nav>
      </header>
    </div>
  );
}