"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (name: string) => setOpen(open === name ? null : name);

  const data = [
    {
      title: "HTML",
      img: "/images/html.jpg",
      desc: "HTML (HyperText Markup Language) adalah bahasa dasar untuk membuat struktur website. Bisa membuat heading, paragraf, gambar, link, dan elemen lain di halaman web.",
    },
    {
      title: "CSS",
      img: "/images/css.jpg",
      desc: "CSS (Cascading Style Sheets) untuk mempercantik tampilan website. Bisa mengatur warna, font, layout, animasi, dan responsivitas.",
    },
    {
      title: "JavaScript",
      img: "/images/js.jpg",
      desc: "JavaScript untuk membuat website interaktif. Bisa membuat animasi, validasi form, logika, game sederhana, dan fitur dinamis.",
    },
    {
      title: "React",
      img: "/images/react.jpg",
      desc: "React library JS untuk membangun UI modern. Bisa membuat komponen reusable, manajemen state, dan website lebih cepat.",
    },
    {
      title: "GitHub",
      img: "/images/github.jpg",
      desc: "GitHub untuk menyimpan, berbagi, dan berkolaborasi proyek coding. Bisa memantau versi kode, merge, dan kerja tim.",
    },
    {
      title: "Vercel",
      img: "/images/vercel.jpg",
      desc: "Vercel hosting khusus untuk Next.js dan proyek frontend. Cepat, mudah, dan mendukung deployment otomatis.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        background: "linear-gradient(270deg, #000000, #5b0d7d, #000000)",
        backgroundSize: "600% 600%",
        animation: "gradientMove 15s ease infinite",
      }}
    >
      <style>{`
        @keyframes gradientMove {
          0% {background-position:0% 50%;}
          50% {background-position:100% 50%;}
          100% {background-position:0% 50%;}
        }
      `}</style>

      <h1
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          background: "linear-gradient(90deg, black, purple)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textAlign: "center",
        }}
      >
        ⚡ MY SKILLS ⚡
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {data.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px #fff, 0 0 50px #bb00ff",
            }}
            onClick={() => toggle(item.title)}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
              borderRadius: "20px",
              padding: "20px",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0 6px 20px rgba(255,255,255,0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image
                src={item.img}
                alt={item.title}
                width={80}
                height={80}
                style={{
                  borderRadius: "12px",
                  filter: "drop-shadow(0 0 8px #bb00ff)",
                }}
              />
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  background: "linear-gradient(90deg, black, purple)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {item.title}
              </h3>
            </div>

            <AnimatePresence>
              {open === item.title && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    marginTop: "15px",
                    background: "#ffffff11",
                    padding: "15px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(255,255,255,0.2)",
                    fontSize: "14px",
                    color: "#fff",
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}