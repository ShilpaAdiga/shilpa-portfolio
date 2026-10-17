"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
  const delay = activeStage === 4 ? 4000 : 2500;

  const timeout = setTimeout(() => {
    setActiveStage((current) =>
      current === 4 ? 0 : current + 1
    );
  }, delay);

  return () => clearTimeout(timeout);
}, [activeStage]);
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      {/* Navigation */}
      <nav id="top" className="flex items-center justify-between px-8 py-6">
        <div className="text-lg font-semibold tracking-wide">
          SHILPA ADIGA
        </div>

        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#work" className="hover:text-white">
            WORK
          </a>
          <a href="#about" className="hover:text-white">
            ABOUT
          </a>
          <a href="#contact" className="hover:text-white">
            CONTACT
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden px-8">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT — Your message */}
          <div>
            {/* Label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-green-400" />

              <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                Data • Quality • Automation
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              I build reliable
              <br />
              <span className="text-gray-500">
                data workflows.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              I work with data extraction, validation, transformation and
              analysis — using Python, SQL and data-focused tools to turn
              messy information into reliable datasets.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
              >
                View Projects →
              </a>

              <a
                href="#about"
                className="rounded-full border border-gray-700 px-7 py-3 text-sm font-medium text-white transition hover:border-gray-400"
              >
                About Me
              </a>
            </div>
          </div>

          {/* RIGHT — Data workflow */}
          <div className="relative">

            {/* Small heading */}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Data Workflow
              </span>

              <span className="flex items-center gap-2 text-xs text-gray-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              ACTIVE
            </span>
            </div>

            {/* Workflow container */}
            <div className="rounded-2xl border border-gray-800 bg-[#151515] p-4">

              {/* Extract */}
              <div className="rounded-xl border border-gray-800 bg-[#111111] p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-gray-500">
                      01
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                      Extract
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Web • API • CSV
                    </p>
                  </div>

                  <span
                    className={`text-xs ${
                      activeStage === 0
                        ? "text-green-400"
                        : activeStage > 0
                          ? "text-gray-500"
                          : "text-gray-500"
                    }`}
                  >
                    {activeStage === 0
                      ? "ACTIVE"
                      : activeStage > 0
                        ? "COMPLETE"
                        : "READY"}
                  </span>
                </div>
              </div>

              {/* Connector */}
              <div className="ml-8 h-5 border-l border-dashed border-gray-700" />

              {/* Validate */}
              <div className="rounded-xl border border-gray-800 bg-[#111111] p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-gray-500">
                      02
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                      Validate
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Quality • Cleaning • Checks
                    </p>
                  </div>

                  <span
                    className={`text-xs ${
                      activeStage === 1 ? "text-green-400" : "text-gray-500"
                    }`}
                  >
                    {activeStage === 1
                      ? "ACTIVE"
                      : activeStage > 1
                        ? "COMPLETE"
                        : "READY"}
                  </span>
                </div>
              </div>

              {/* Connector */}
              <div className="ml-8 h-5 border-l border-dashed border-gray-700" />

              {/* Transform */}
              <div className="rounded-xl border border-gray-800 bg-[#111111] p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-gray-500">
                      03
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                      Transform
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Clean • Normalize • Structure
                    </p>
                  </div>

                  <span                    
                    className={`text-xs ${
                    activeStage === 2 ? "text-green-400" : "text-gray-500"
                  }`}
                >
                  {activeStage === 2
                    ? "ACTIVE"
                    : activeStage > 2
                      ? "COMPLETE"
                      : "READY"}
                </span>
                </div>
              </div>

              {/* Connector */}
              <div className="ml-8 h-5 border-l border-dashed border-gray-700" />

              {/* Analyze */}
              <div className="rounded-xl border border-gray-800 bg-[#111111] p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-gray-500">
                      04
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                      Analyze
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Python • SQL • Insights
                    </p>
                  </div>

                  <span
                    className={`text-xs ${
                      activeStage === 3 ? "text-green-400" : "text-gray-500"
                    }`}
                  >
                    {activeStage === 3
                      ? "ACTIVE"
                      : activeStage > 3
                        ? "COMPLETE"
                        : "READY"}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Work placeholder */}
      
      <section id="work" className="bg-white px-8 py-24 text-black">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Selected Work
          </p>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-bold">
              Projects
            </h2>

            <p className="max-w-md text-sm leading-6 text-gray-600">
              Practical projects focused on data extraction, quality,
              automation and searchable data.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-medium text-green-700">
                01 / Data Quality
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Automated Data Validation
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Build a Python pipeline to detect missing values, duplicates,
                invalid data types and inconsistent records in CSV files.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "pandas", "SQL"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gray-400">
                In Progress
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-medium text-green-700">
                02 / Data Engineering
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Web Data Extraction Pipeline
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Extract data from permitted websites or APIs, clean and
                normalize the results, and store structured records.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "BeautifulSoup", "APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gray-400">
                Planned
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-medium text-green-700">
                03 / Search & Data
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Searchable Data with Elasticsearch
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Index structured records in Elasticsearch and build
                search and filtering features for exploring the data.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "Elasticsearch", "JSON"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gray-400">
                Planned
              </p>
            </article>
          </div>
        </div>
      </section>


      {/* About placeholder */}
      
      <section
        id="about"
        className="bg-[#111111] px-8 py-24 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            About
          </p>

          <div className="mt-4 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold leading-tight">
                Data, quality
                <br />
                & automation.
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-gray-400">
                I work with data extraction, cleaning and validation,
                using Python and data-focused tools to turn raw information
                into structured, reliable datasets.
              </p>

              <p className="mt-4 max-w-lg leading-7 text-gray-400">
                My experience includes web scraping, data quality checks
                and preparing data for downstream use. I'm continuing to
                strengthen my skills in SQL, automation and data engineering
                through hands-on projects.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-gray-500">01</p>
                <h3 className="mt-4 font-semibold">Data Extraction</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Collecting structured data from websites, APIs and files.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-gray-500">02</p>
                <h3 className="mt-4 font-semibold">Data Quality</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Checking formats, missing values and data consistency.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-gray-500">03</p>
                <h3 className="mt-4 font-semibold">Python & SQL</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Working with data through scripting and queries.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-gray-500">04</p>
                <h3 className="mt-4 font-semibold">Continuous Learning</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Building practical projects to deepen my engineering skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact placeholder */}
      
      <section
        id="contact"
        className="bg-white px-8 py-24 text-black"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Contact
          </p>

          <div className="mt-4 grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="text-4xl font-bold">
                Let's connect.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-gray-600">
                I'm interested in opportunities involving data engineering,
                Python automation, data extraction and data quality.
                If you think my experience could be a fit, I'd love to hear from you.
              </p>

              <a
                href="mailto:shilpaadiga09@gmail.com"
                className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Get in touch ↗
              </a>
            </div>

            <div className="flex flex-col border-t border-gray-200 md:border-t-0">
              <a
                href="https://www.linkedin.com/in/shilpa-adiga-569838169/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-gray-200 py-5 transition hover:text-green-700"
              >
                <span className="font-medium">LinkedIn</span>
                <span>↗</span>
              </a>

              <a
                href="https://github.com/ShilpaAdiga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-gray-200 py-5 transition hover:text-green-700"
              >
                <span className="font-medium">GitHub</span>
                <span>↗</span>
              </a>

              <a
                href="mailto:shilpaadiga09@gmail.com"
                className="flex items-center justify-between border-b border-gray-200 py-5 transition hover:text-green-700"
              >
                <span className="font-medium">Email</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    <footer className="border-t border-gray-800 bg-[#111111] px-8 py-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-gray-400 sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} Shilpa Adiga. Built with Next.js.
        </p>

        <a
          href="#top"
          className="transition hover:text-white"
        >
          Back to top ↑
        </a>
      </div>
    </footer>


    </main>
  );
}