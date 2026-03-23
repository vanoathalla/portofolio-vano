"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Briefcase, MessageSquare } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      {/* Navbar Minimalis - Cocok di HP & Desktop */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Vano.
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cyan-400 font-mono mb-4">Halo, nama saya</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Vano Athalla.
            </h1>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
              Saya membangun aplikasi web & mobile.
            </h3>
            <p className="text-slate-400 max-w-xl leading-relaxed text-lg mb-10">
              Mahasiswa Teknik Informatika yang fokus pada pengembangan aplikasi modern dengan pengalaman dalam JavaScript, React, dan sistem manajemen database.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/vanoathalla" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">
                <Linkedin size={24} />
              </a>
              <a href="mailto:email@kamu.com" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Project Pilihan</h2>
            <div className="h-[1px] bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: Presensi Magang */}
            <ProjectCard 
              title="Aplikasi Presensi Magang"
              description="Sistem manajemen absensi menggunakan Next.js dan Prisma. Memiliki fitur role admin, rekap data, dan notifikasi realtime."
              tech={["Next.js", "Prisma", "Tailwind"]}
              link="https://github.com/vanoathalla/presensi-magang"
            />
            {/* Project 2: Versi Mobile lainnya */}
            <ProjectCard 
              title="Mobile UI Library"
              description="Explorasi desain antarmuka aplikasi mobile yang responsif dan interaktif menggunakan React Native."
              tech={["React Native", "Expo", "Framer"]}
              link="#"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="about">
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code2 className="text-cyan-400" /> Keahlian Utama
            </h2>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Git", "UI/UX Design"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-10 text-slate-500 text-sm border-t border-slate-900">
        © {new Date().getFullYear()} Vano Athalla. Built with Next.js.
      </footer>
    </div>
  );
}

// Komponen Card Project agar rapi
function ProjectCard({ title, description, tech, link }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between group"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
            <Briefcase size={24} />
          </div>
          <a href={link} className="text-slate-400 hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((t: string) => (
          <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}