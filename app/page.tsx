import Link from "next/link";
import EmailButton from "@/components/EmailButton";

const OURWORLD_SITES = [
  {
    name: "OurReadingWorld",
    url: "https://www.ourreadingworld.com",
    desc: "An interactive K-5 reading platform built around the five pillars of literacy — phonemic awareness, phonics, fluency, vocabulary, and comprehension.",
    color: "#065F46",
  },
  {
    name: "OurMathWorld",
    url: "https://ourmathworld.com",
    desc: "A grade-by-grade math practice platform with bilingual (Spanish/English) support, designed with ESL learners in mind.",
    color: "#0D9488",
  },
  {
    name: "OurTeachingWorld",
    url: "https://ourteachingworld.com",
    desc: "A hub for teachers — resources, strategies, and tools that connect the three student-facing sites.",
    color: "#D97706",
  },
  {
    name: "OurSufiWorld",
    url: "https://oursufiworld.com",
    desc: "An education platform exploring the lives and writing of history's great Sufi poets, and connecting their ideas to issues people care about today.",
    color: "#7C3AED",
  },
];

const SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "REST APIs",
  "Git & GitHub",
  "Vercel Deployment",
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-black text-slate-900">Zenab Waqi</span>
          <div className="hidden sm:flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#work" className="hover:text-slate-900">Work</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-24 pb-20 max-w-5xl mx-auto w-full">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-4">
          Frontend Developer
        </p>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight mb-6 max-w-3xl">
          I build products that bring real communities together.
        </h1>
        <p className="text-lg text-slate-600 font-medium max-w-2xl mb-10 leading-relaxed">
          I design and ship full-stack web platforms end to end — from idea to a live product
          with real users. My flagship work, the OurWorld Family, is a suite of four educational
          sites I built and grew to a combined social audience of{" "}
          <span className="font-bold text-slate-900">90K followers on Facebook</span> and{" "}
          <span className="font-bold text-slate-900">83.9K followers on Instagram</span>.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="bg-slate-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-slate-200 text-slate-900 font-bold px-6 py-3 rounded-xl hover:border-slate-300 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-slate-900 py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { stat: "5", label: "Live Products" },
            { stat: "90K", label: "Facebook Followers" },
            { stat: "83.9K", label: "Instagram Followers" },
            { stat: "100%", label: "Built & Shipped Solo" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-white mb-1">{s.stat}</div>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 py-24 max-w-5xl mx-auto w-full">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-3">
          Flagship Project
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5">
          The OurWorld Family
        </h2>
        <p className="text-slate-600 font-medium max-w-2xl mb-12 leading-relaxed">
          A connected family of four Next.js sites I designed, built, and deployed solo — sharing
          a unified design system, real student-facing interactivity, and a growing audience
          across social media. Each site solves a different problem for a different audience,
          all built on the same technical foundation.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {OURWORLD_SITES.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-1.5 w-full" style={{ backgroundColor: s.color }} />
              <div className="p-7">
                <h3
                  className="text-xl font-black mb-2 group-hover:opacity-80 transition-opacity"
                  style={{ color: s.color }}
                >
                  {s.name}
                </h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span
                  className="text-xs font-black uppercase tracking-widest group-hover:underline"
                  style={{ color: s.color }}
                >
                  Visit Site →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Junoon-e-Ishq case study */}
      <section className="px-6 py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-rose-700 mb-3">
            Second Project
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5">
            Junoon-e-Ishq
          </h2>
          <p className="text-slate-600 font-medium max-w-2xl mb-8 leading-relaxed">
            A Vite + React discovery platform for Urdu poetry — built with live Google Books and
            YouTube API integrations, a working shopping cart with persisted state, and a fully
            custom animated design system. Visitors can search and browse poetry books, and
            stream ghazals, qawalis, and poetry reels.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://junoon-e-ishq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Visit Live Site →
            </a>
            <a
              href="https://github.com/zeevaki/urdu_poetry"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-200 text-slate-900 font-bold px-6 py-3 rounded-xl hover:border-slate-300 transition-colors"
            >
              View Source →
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-24 max-w-5xl mx-auto w-full">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-3">
          Toolkit
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-10">
          What I Work With
        </h2>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="bg-white border border-slate-200 text-slate-800 font-bold text-sm px-5 py-2.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
            From the classroom to the codebase
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            I started in education, which gave me a close-up view of what students and teachers
            actually need from technology — not what looks good in a pitch deck, but what holds
            up in a real classroom with real kids. That perspective now shapes how I build: I
            design for the end user first, and I ship products that real people use every day,
            not just demos.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            I taught myself frontend development by building the OurWorld Family from scratch —
            architecture, design system, deployment, and the audience that now follows it. I'm
            looking for a remote frontend role where I can keep building products with that same
            level of ownership.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 max-w-5xl mx-auto w-full text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8">
          Let's build something together
        </h2>
        <EmailButton />
        <div className="flex flex-wrap gap-6 justify-center text-sm font-bold text-slate-600">
          <Link
            href="https://www.facebook.com/zenab.waqi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/zenab_waqi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900"
          >
            Instagram
          </Link>
          <Link
            href="https://github.com/zeevaki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/zenab-waqi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900"
          >
            LinkedIn
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 text-sm py-8 px-6 text-center">
        <p>© {new Date().getFullYear()} Zenab Waqi. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
