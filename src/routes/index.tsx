import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import profileAsset from "@/assets/profile.jpg.asset.json";
const profileImg = profileAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nita Mazu — Networks · Software · Security" },
      {
        name: "description",
        content:
          "Portfolio of Nita Mazu — network engineer, software builder, and security specialist crafting resilient systems from the packet up.",
      },
      { property: "og:title", content: "Nita Mazu — Networks · Software · Security" },
      {
        property: "og:description",
        content:
          "Network engineer, software builder, and security specialist crafting resilient systems from the packet up.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      {/* === NAVBAR === */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#home" className="font-display text-xl font-bold tracking-tight">
              Nita<span className="text-neon neon-text">Mazu</span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === link.href.slice(1)
                      ? "text-neon neon-text"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="rounded-lg bg-neon px-5 py-2 text-sm font-semibold text-neon-foreground transition-all duration-300 hover:neon-glow"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-foreground transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-foreground transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-neon hover:bg-surface rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="block px-4 py-3 text-center text-sm font-semibold text-neon-foreground bg-neon rounded-lg"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* === HERO === */}
      <section id="home" className="relative grid-bg min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Glow orbs */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-neon/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-neon-pink/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
            {/* Left: Profile image */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Glow behind */}
                <div className="absolute inset-0 rounded-full bg-neon/20 blur-3xl scale-110" />
                {/* Blob frame */}
                <div className="relative rounded-[2.5rem] border-2 border-neon/30 overflow-hidden neon-glow transition-all duration-500 group-hover:neon-glow-cyan group-hover:border-neon-cyan/40">
                  <img
                    src={profileImg}
                    alt="Nita Mazu"
                    width={400}
                    height={400}
                    className="w-full max-w-[400px] aspect-square object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 rounded-2xl bg-surface-2 border border-neon/30 px-5 py-3 backdrop-blur-xl neon-glow">
                  <p className="text-2xl font-bold font-display text-neon neon-text">10+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right: Text content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <p className="text-neon text-sm font-semibold uppercase tracking-[0.3em] mb-4 neon-text">
                Networks · Software · Security
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Hi, I'm <span className="text-neon neon-text">Nita Mazu</span>
              </h1>
              <p className="mt-3 font-display text-2xl lg:text-3xl font-semibold text-foreground">
                Network Engineer{" "}
                <span className="text-neon-pink">|</span> Security{" "}
                <span className="text-neon-cyan">Specialist</span>
              </p>
              <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-muted-foreground leading-relaxed text-lg">
                I design resilient networks and build the security posture around
                them — from the packet up. With a foot in software and design, I
                bring a full-stack view to every system I touch.
              </p>

              {/* Social links */}
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                {["GitHub", "LinkedIn", "Twitter", "Email"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-muted-foreground text-xs font-medium transition-all duration-300 hover:border-neon hover:text-neon hover:neon-glow"
                    aria-label={social}
                  >
                    {social.slice(0, 2)}
                  </a>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="rounded-xl bg-neon px-8 py-3.5 text-sm font-semibold text-neon-foreground transition-all duration-300 hover:neon-glow"
                >
                  Hire Me
                </button>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="rounded-xl border-2 border-neon/40 px-8 py-3.5 text-sm font-semibold text-neon transition-all duration-300 hover:border-neon hover:neon-glow"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden mb-8">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "48", label: "Networks Commissioned" },
              { value: "14", label: "Apps Shipped" },
              { value: "06", label: "Security Certifications" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface px-6 py-6 text-center transition-colors hover:bg-surface-2"
              >
                <p className="font-display text-3xl lg:text-4xl font-bold text-neon neon-text">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs lg:text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ABOUT === */}
      <section id="about" className="relative py-24 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-neon text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                About Me
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Three crafts, one{" "}
                <span className="text-neon neon-text">obsession</span> — making
                systems that hold.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  I started as a network engineer, then got pulled into writing
                  the software that runs it — and ended up designing the
                  interfaces on top. That full-stack view is how I think now:
                  resilience is a feature you ship at every layer.
                </p>
                <p>
                  Currently deep in security architecture — learning how to
                  break the systems I build, so I can defend them better. Always
                  happiest where a hard technical problem meets a clean, human
                  interface.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["CCNA / CCNP", "Zero Trust", "Python", "Figma", "BGP / SD-WAN"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Info cards */}
            <div className="grid gap-4">
              {[
                {
                  icon: "🛡",
                  title: "Pivoting into security",
                  text: "Trading cable runs for threat models — currently deep in SIEM and network-perimeter hardening.",
                },
                {
                  icon: "⚙",
                  title: "Software as a second language",
                  text: "I write the tooling and automation that runs the network, so the engineering and the code never drift apart.",
                },
                {
                  icon: "◈",
                  title: "Design in the mix",
                  text: "I prototype the UIs I architect, so the engineering and the pixels never drift apart.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex gap-4 items-start rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-neon/30 hover:neon-glow"
                >
                  <span className="text-2xl text-neon">{card.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground text-lg">
                      {card.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === SKILLS === */}
      <section id="skills" className="relative py-24 border-t border-border/30 grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-neon text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              My Skills
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              What I bring to the{" "}
              <span className="text-neon neon-text">table</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Networking",
                level: 95,
                items: ["BGP / OSPF", "SD-WAN", "Zero-Trust Fabric", "Campus Design"],
              },
              {
                title: "Security",
                level: 80,
                items: ["Threat Modeling", "SIEM", "Pen Testing", "Network Hardening"],
              },
              {
                title: "Software",
                level: 85,
                items: ["Python", "Go", "Config-as-Code", "Automation"],
              },
              {
                title: "Design",
                level: 75,
                items: ["Figma", "UI / UX", "Dashboards", "Design Systems"],
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-neon/30 hover:neon-glow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {skill.title}
                  </h3>
                  <span className="text-neon font-bold text-sm">{skill.level}%</span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 w-full rounded-full bg-surface-3 overflow-hidden mb-4">
                  <div
                    className="h-full rounded-full bg-neon neon-glow transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="text-neon">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICES === */}
      <section id="services" className="relative py-24 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-neon text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Services
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              What I can do{" "}
              <span className="text-neon neon-text">for you</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⬡",
                title: "Network Architecture",
                text: "Resilient, segmented network design — from campus fabric to edge compute backbones. Built for failover, not just uptime.",
              },
              {
                icon: "🛡",
                title: "Security Hardening",
                text: "Zero-trust implementation, threat modeling, and perimeter defense. Making sure what you built can't be turned against you.",
              },
              {
                icon: "⬌",
                title: "Automation & Tooling",
                text: "Config-as-code pipelines, drift detection, and automated provisioning. Replace error-prone manual push with reliable systems.",
              },
              {
                icon: "◈",
                title: "UI & Dashboard Design",
                text: "Calm, glanceable operations interfaces that surface signal without the noise. The tools your team actually wants to use.",
              },
              {
                icon: "▣",
                title: "Systems Consulting",
                text: "Architecture review, gap analysis, and roadmap planning. A second pair of eyes on the systems you depend on.",
              },
              {
                icon: "✦",
                title: "Red Team Practice",
                text: "Hands-on offense to sharpen your defense. Threat modeling and penetration testing from someone who designs the systems.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-neon/40 hover:-translate-y-1 hover:neon-glow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-neon/30 bg-surface-2 text-neon text-2xl transition-all group-hover:neon-glow">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PORTFOLIO === */}
      <section id="portfolio" className="relative py-24 border-t border-border/30 grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-neon text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Portfolio
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Selected{" "}
              <span className="text-neon neon-text">work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: "Security",
                title: "Zero-Trust Campus Fabric",
                text: "Segmented campus network rebuilt on identity-based trust, cutting lateral movement paths by the bulk.",
                year: "2025",
              },
              {
                category: "Networking",
                title: "Edge Compute Backbone",
                text: "Sub-10ms routing for a distributed edge fleet, balancing load and resiliency across regions.",
                year: "2024",
              },
              {
                category: "Software",
                title: "Config-as-Code Pipeline",
                text: "Automated device configuration with rollback and drift detection, replacing error-prone manual push.",
                year: "2024",
              },
              {
                category: "Design",
                title: "SOC Dashboard System",
                text: "A calm, glanceable operations interface that surfaces the signal without the noise.",
                year: "2023",
              },
            ].map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-neon/40 hover:-translate-y-1"
              >
                {/* Category + year */}
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full border border-neon/30 bg-neon/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neon">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>

                {/* Visual block */}
                <div className="mb-6 h-40 rounded-xl bg-surface-2 grid-bg flex items-center justify-center overflow-hidden transition-all group-hover:neon-glow">
                  <span className="font-display text-5xl font-bold text-neon/20 group-hover:text-neon/40 transition-colors">
                    {project.category.slice(0, 1)}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.text}
                </p>

                <div className="mt-4 flex items-center gap-2 text-neon text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View project <span>→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTACT === */}
      <section id="contact" className="relative py-24 border-t border-border/30">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-neon/5 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neon text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Let's build something that{" "}
            <span className="text-neon neon-text">holds</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Have a network to harden, a tool to ship, or a system to defend?
            I'd love to hear what you're working on.
          </p>

          {/* Contact form */}
          <form
            className="mx-auto max-w-lg space-y-4 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              form.reset();
              alert("Thanks for reaching out! I'll get back to you soon.");
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Your name"
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-neon focus:neon-glow"
              />
              <input
                type="email"
                required
                placeholder="Your email"
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-neon focus:neon-glow"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-neon focus:neon-glow"
            />
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-neon focus:neon-glow resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-neon px-8 py-3.5 text-sm font-semibold text-neon-foreground transition-all duration-300 hover:neon-glow"
            >
              Send Message
            </button>
          </form>

          {/* Direct contact */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:hello@nitamazu.dev"
              className="transition-colors hover:text-neon"
            >
              hello@nitamazu.dev
            </a>
            <a href="#" className="transition-colors hover:text-neon">
              GitHub
            </a>
            <a href="#" className="transition-colors hover:text-neon">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-neon">
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="border-t border-border/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg font-bold">
            Nita<span className="text-neon">Mazu</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026 Nita Mazu · Networks, software & design — defended.
          </p>
        </div>
      </footer>
    </div>
  );
}
