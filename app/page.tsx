// src/app/page.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, Code2, Globe, Terminal, Cpu, 
  GithubIcon, LinkedinIcon, UserCircle2 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Variabel Animasi Halus
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <div className="space-y-32 md:space-y-48 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION - "Tech-Kalcer Jogja" */}
      <motion.section 
        className="relative h-[95vh] flex flex-col items-start justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 border-b border-card"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Efek Spotlight Mint di Background */}
        <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[150px] z-0" />
        
        <div className="relative z-10 w-full max-w-[90vw] space-y-8 mt-16">
          <motion.div 
            className="flex items-center gap-3 border border-accent/20 px-4 py-2 rounded-full text-xs md:text-sm text-accent bg-accent/5 backdrop-blur-sm w-fit"
            whileHover={{ scale: 1.03 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            CREATIVE DEV / ILKOM UPNVY '22
          </motion.div>
          
          {/* Tipografi Raksasa & Berani */}
          <h1 className="text-kalcer-hero">
            MEMBANGUN<br />
            W<span className="text-accent">E</span>B YANG<br />
            B<span className="text-accent">E</span>RANI.
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-card">
            <p className="max-w-xl text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              Hai, saya Vano. Fokus pada detail, performa tinggi, dan animasi halus. Gabungan estetika komunikasi dan kekuatan teknologi modern.
            </p>
            <div className="flex gap-4">
              <Link href="#projects" className="flex items-center gap-3 bg-accent text-background px-8 py-4 rounded-full font-bold hover:bg-white transition-colors text-lg group">
                Lihat Proyek <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. PROYEK SECTION (Bento Grid Responsif) */}
      <motion.section 
        id="projects"
        className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">// Selected Works</span>
            <h2 className="text-kalcer-title">Karya Pilihan.</h2>
          </div>
          <p className="max-w-md text-gray-500 text-base md:text-lg">Tampilan modern, performa optimal, dan solusi digital yang berdampak.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {/* Project 1 - Besar (Presensi Magang) */}
          <motion.div 
            className="md:col-span-6 lg:col-span-3 relative group overflow-hidden rounded-[2.5rem] bg-card border border-card p-10 h-[450px] md:h-[500px] flex flex-col justify-between"
            variants={fadeIn}
            whileHover={{ borderColor: '#00ff88', y: -8, transition: { duration: 0.3 } }}
          >
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-accent/20 z-0"></div>
            {/* Opsi: Tambah Image dari public/ */}
            {/* <Image src="/project1.jpg" alt="SIP-Magang" fill className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700 z-[-1]" /> */}

            <div className="relative z-10 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">SIP-MAGANG</h3>
                <div className="p-3 bg-background rounded-full border border-card"><Globe className="text-accent" size={24} /></div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 max-w-lg font-light leading-relaxed">
                Sistem Informasi Presensi Magang berbasis Geofencing untuk Disdikpora DIY. Akurat, modern, dan efisien.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Next.js 15', 'Prisma', 'PostgreSQL', 'Tailwind CSS'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-background border border-card text-xs font-mono uppercase tracking-widest text-gray-400 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <Link href="#" className="relative z-10 w-fit flex items-center gap-3 text-accent font-bold group-hover:underline text-lg">
              Detail Kasus <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Project 2 - Kecil (Futsal FTI UPNVY) */}
          <motion.div 
            className="md:col-span-3 lg:col-span-1 h-[450px] md:h-[500px] rounded-[2.5rem] bg-[#00ff88]/5 border border-accent/20 p-10 flex flex-col justify-between group hover:bg-[#00ff88]/10 transition-colors"
            variants={fadeIn}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="space-y-4">
              <Code2 className="text-accent mb-6" size={40} />
              <h3 className="text-2xl font-bold text-white leading-tight">Futsal FTI<br />UPNVY Branding</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Manajemen branding dan kemitraan strategis untuk NCFS 2026.
              </p>
            </div>
            <div className="text-xs font-mono text-accent uppercase tracking-wider">Communication & Brand Strategy</div>
          </motion.div>

          {/* Opsi: Tambah Project 3 di sini (Akan responsif nambah grid) */}
        </motion.div>
      </motion.section>

      {/* 3. EXPERTISE SECTION (Layout Staggered/Tak Rata ala Kalcer) */}
      <motion.section 
        id="expertise"
        className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">// Skillset</span>
            <h2 className="text-kalcer-title">Expertise.</h2>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-lg">
              Mengkombinasikan teori komunikasi dengan implementasi teknis untuk menghasilkan produk digital yang intuitif dan berdampak.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
            {/* Skill Cards - Kita buat efek tak rata di g-grid-cols-2 */}
            {[
              { icon: <Code2 />, name: "Frontend", tools: "Next.js, React, Tailwind", desc: "Membangun UI yang cepat, responsif, dan estetik." },
              { icon: <Cpu />, name: "Mobile", tools: "Flutter, Dart", desc: "Pengembangan aplikasi mobile lintas platform." },
              { icon: <Terminal />, name: "Backend", tools: "Prisma, SQL, Node.js", desc: "Manajemen database dan logika server yang solid." },
              { icon: <Globe />, name: "Others", tools: "Git, Vercel, Figma", desc: "Kolaborasi tim dan deployment workflow modern." },
            ].map((skill, i) => (
              <div key={i} className={`p-8 bg-card rounded-[2rem] border border-card hover:border-accent/30 transition-all group ${i === 1 ? 'sm:mt-12' : ''} ${i === 3 ? 'sm:mt-12' : ''}`}>
                <div className="text-accent mb-6 p-4 bg-background rounded-2xl w-fit border border-card group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h4 className="text-2xl font-bold text-white">{skill.name}</h4>
                <p className="text-[10px] text-gray-500 font-mono font-bold uppercase tracking-widest mt-2">{skill.tools}</p>
                <p className="text-gray-400 mt-4 leading-relaxed font-light">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      
    </div>
  );
}