"use client";

import { motion } from "framer-motion";
import { 
  User,          // Pengganti Github
  Briefcase,     // Pengganti Linkedin
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe 
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] z-0" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center space-y-6"
        >
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium inline-block backdrop-blur-md">
            Available for new projects 🚀
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            Creative <span className="text-blue-500">Developer</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light">
            Mahasiswa Ilmu Komunikasi UPNVY yang fokus pada pengembangan web modern menggunakan Next.js dan Flutter.
          </p>
          
          <div className="flex gap-4 justify-center pt-4">
            <Link href="#projects" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition">
              View Work
            </Link>
            <div className="flex gap-2">
              {/* PAKAI USER SEBAGAI PENGGANTI GITHUB */}
              <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition"><User size={20}/></a>
              {/* PAKAI BRIEFCASE SEBAGAI PENGGANTI LINKEDIN */}
              <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition"><Briefcase size={20}/></a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- BENTO GRID PROJECTS --- */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Terminal className="text-blue-500" /> Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-3 h-[400px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative shadow-2xl shadow-blue-500/20"
          >
            <div className="z-10">
              <h3 className="text-3xl font-bold text-white">SIP-MAGANG</h3>
              <p className="text-white/80 mt-2 max-w-sm font-medium">Sistem Informasi Presensi Magang dengan Geofencing untuk Disdikpora DIY.</p>
            </div>
            <div className="z-10 flex gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-md font-bold uppercase tracking-wider">Next.js 15</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-md font-bold uppercase tracking-wider">Prisma</span>
            </div>
            <Globe className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10 group-hover:rotate-12 transition-transform duration-700" />
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 h-[400px] bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between group"
          >
            <h3 className="text-xl font-bold text-blue-500">Futsal FTI UPNVY</h3>
            <p className="text-sm text-gray-400">Branding & Partnership Management for NCFS 2026.</p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-blue-500 transition-colors">
              <ExternalLink size={20} className="text-gray-500 group-hover:text-blue-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-6 uppercase italic">Expertise.</h2>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Mengkombinasikan teori komunikasi dengan implementasi teknis untuk menghasilkan produk digital yang intuitif.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Code2 />, name: "Frontend", tools: "Next.js, React" },
              { icon: <Cpu />, name: "Mobile", tools: "Flutter, Dart" },
              { icon: <Terminal />, name: "Backend", tools: "Prisma, SQL" },
              { icon: <Globe />, name: "Others", tools: "Git, Vercel" },
            ].map((skill, i) => (
              <div key={i} className="p-6 bg-[#0a0a0a] rounded-2xl border border-white/5 hover:border-blue-500/50 transition duration-300 group">
                <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h4 className="font-bold text-white">{skill.name}</h4>
                <p className="text-[10px] text-gray-500 mt-1 font-bold uppercase tracking-widest">{skill.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}