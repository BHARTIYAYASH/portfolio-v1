"use client";

import { useState } from "react";

import Container from "@/components/containers";

import Projects from "@/components/projects";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Timeline from "@/components/timeline";
import GithubGraph from "@/components/githubgraph";
import Skills from "@/components/skills";
import GetInTouch from "@/components/get-in-touch";
import Loader from "@/components/ui/loader"; // Import Loader

export default function Home() {
  const [loading, setLoading] = useState(true); // Loading state

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      action: () => window.open("https://github.com/BHARTIYAYASH", "_blank"),
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      action: () => window.open("https://linkedin.com/in/yash-kataria-2b8b23298", "_blank"),
    },
    {
      name: "Leetcode",
      icon: ({ size, className }: { size?: number; className?: string }) => (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width={size || 24}
          height={size || 24}
          className={className}
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.56 5.768a1.319 1.319 0 0 0-.361.961 1.319 1.319 0 0 0 .361.961l4.961 5.33a1.374 1.374 0 0 0 .961.438 1.374 1.374 0 0 0 .961-.438l4.961-5.33a1.319 1.319 0 0 0 .361-.961 1.319 1.319 0 0 0-.361-.961l-4.961-5.33A1.374 1.374 0 0 0 13.483 0zm-2.404 3.511a2.641 2.641 0 0 1 1.482-.443c.536 0 1.05.207 1.428.577l.002.003 3.678 3.953.003.002a2.029 2.029 0 0 1 0 2.871l-.003.003-3.678 3.953-.002.002a2.026 2.026 0 0 1-1.428.577 2.643 2.643 0 0 1-1.482-.443l-.116-.089a4.897 4.897 0 0 0-3.328-1.371 4.897 4.897 0 0 0-3.328 1.371l-.116.089a2.643 2.643 0 0 1-1.482.443 2.026 2.026 0 0 1-1.428-.577l-.002-.002-3.678-3.953.002-.003a2.029 2.029 0 0 1 0-2.871l.003-.003 3.678-3.953.002-.002a2.026 2.026 0 0 1 1.428-.577c.536 0 1.05.207 1.482.443l.116.089a4.897 4.897 0 0 0 3.328 1.371 4.897 4.897 0 0 0 3.328-1.371l.116-.089z" />
          <path d="M16.596 11.404l-5.33 5.33a2.026 2.026 0 0 1-2.871 0l-5.33-5.33a2.026 2.026 0 0 0-2.871 0l-.003.003a2.029 2.029 0 0 0 0 2.871l.003.003 6.764 6.764a2.026 2.026 0 0 0 2.871 0l6.764-6.764.003-.003a2.029 2.029 0 0 0 0-2.871l-.003-.003a2.026 2.026 0 0 0-2.871 0z" />
        </svg>
      ),
      action: () => window.open("https://leetcode.com/u/YashBhartiya/", "_blank"),
    },
    {
      name: "Email",
      icon: Mail,
      action: () => (window.location.href = "mailto:bhartiyayash6769@gmail.com"),
    },
  ];

  return (
    <>
      {loading && <Loader onLoadComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="relative flex min-h-screen justify-center font-sans overflow-hidden">
          {/* Paper Texture Background */}
          <div className="paper-texture"></div>
          <Container className="min-h-[200vh] px-8 pt-24 md:p-20 md:pb-10 mx-auto ">

            {/* RIGHT BORDER */}
            <div
              className="absolute right-0 top-0 h-full w-6 border-x border-x-(--pattern-fg) 
            bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
            bg-size-[10px_10px] bg-fixed opacity-80 dark:opacity-12"
            ></div>

            {/* LEFT BORDER */}
            <div
              className="absolute left-0 top-0 h-full w-6 border-x border-x-(--pattern-fg) 
            bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
            bg-size-[10px_10px] bg-fixed opacity-80 dark:opacity-12"
            ></div>

            {/* ---------------------------------------- */}
            {/* HEADING + SOCIALS (FIXED SAME LINE) */}
            {/* ---------------------------------------- */}

            <div className="flex w-full flex-wrap items-center justify-between gap-4">
              <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-neutral-900 dark:text-neutral-50">
                <span className="link--elara">Yash Kataria</span>
              </h1>

              <div className="flex flex-wrap gap-4 sm:justify-end">
                {socials.map((social) => (
                  <div
                    key={social.name}
                    className="relative cursor-alias group"
                    onClick={social.action}
                  >
                    <social.icon
                      size={20}
                      className="text-neutral-900 dark:text-neutral-50 opacity-70 hover:opacity-100 transition"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------------------------------- */}
            {/* SUBTEXT */}
            {/* ---------------------------------------- */}

            <div className="text-secondary font-custom2 text-s mt-1">
              <p>
                <span className="text-neutral-950 dark:text-neutral-100 font-semibold"></span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  Pre-final year IT student at VIIT Pune with practical experience in Full-Stack development, specializing in Backend engineering and AI/ML solutions.
                </span>
              </p>

              <p>
                <span className="text-neutral-950 dark:text-neutral-100 font-bold"></span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  Experienced in building production-grade AI applications and government sponsored ML projects.
                </span>
              </p>

              <p>
                <span className="text-neutral-950 dark:text-neutral-100 font-semibold"></span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  Seeking opportunities to apply strong problem-solving skills and a system-building mindset in impactful engineering roles.
                </span>
              </p>
            </div>

            <div className="w-auto border-t border-solid border-[var(--pattern-fg)] opacity-100 dark:opacity-15 my-6 -mx-2 md:-mx-14"></div>



            <Projects />

            <div className="w-auto border-t border-solid border-[var(--pattern-fg)] opacity-100 dark:opacity-15 my-4 -mx-2 md:-mx-14"></div>


            <Timeline></Timeline>



            <GithubGraph></GithubGraph>

            <Skills />

            <GetInTouch />


          </Container>
        </div>
      )}
    </>
  );
}