"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [openBox, setOpenBox] = useState<string | null>(null);
  const toggleBox = (box: string) => setOpenBox(openBox === box ? null : box);

  const boxes = [
    {
      title: "🌸 Biodata",
      key: "biodata",
      content: (
        <>
          <p><b>⭐ Nama:</b> Alena Putri Ulfa Rika</p>
          <p><b>🌷 Sekolah:</b> SMKN 8 Malang</p>
          <p><b>📍 Jurusan:</b> Rekayasa Perangkat Lunak</p>
          <p><b>⭐ Kelas:</b> XI RPL A</p>
        </>
      ),
      gradient: "linear-gradient(135deg, #ffd6e0, #e0c3fc)",
    },
    {
      title: "🌍 Sosial Media",
      key: "sosmed",
      content: (
        <>
          <p>📸 Instagram: <a href="https://www.instagram.com/alena_leaaa" target="_blank">alena_leaaa</a></p>
          <p>🎵 TikTok: <a href="https://www.tiktok.com/@alnaptri18" target="_blank">alnaptri18</a></p>
          <p>📧 Email: alenapu433@gmail.com</p>
          <p>📧 WhatsApp: 0822 4522 5047</p>
        </>
      ),
      gradient: "linear-gradient(135deg, #d4fc79, #96e6a1)",
    },
    {
      title: "⚓ Semangat Coding",
      key: "motivation",
      content: (
        <p>
          💡 "Coding itu seperti seni. Setiap baris kode adalah kuas
          yang membentuk masa depan. Jangan pernah takut error,
          karena setiap error adalah langkah menuju solusi!"
        </p>
      ),
      gradient: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Background animasi */}
      <div style={{
        position: "absolute",
        top: 0, left: 0,
        width: "100%", height: "100%",
        background: "linear-gradient(270deg, pink, black, #ffb6c1)",
        backgroundSize: "600% 600%",
        animation: "gradientBG 15s ease infinite",
        zIndex: -1
      }}></div>

      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .glowBox {
          animation: glowAnim 2s ease-in-out infinite alternate;
        }
        @keyframes glowAnim {
          0% { box-shadow: 0 0 20px rgba(255,192,203,0.4), 0 0 35px rgba(255,192,203,0.2); }
          50% { box-shadow: 0 0 30px rgba(255,192,203,0.7), 0 0 50px rgba(255,192,203,0.4); }
          100% { box-shadow: 0 0 20px rgba(255,192,203,0.4), 0 0 35px rgba(255,192,203,0.2); }
        }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "50px", maxWidth: "900px", margin: "0 auto", gap: "30px" }}>
        {/* FOTO */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} whileHover={{ scale: 1.05, rotate: 1.5 }} style={{ display: "flex", justifyContent: "center" }}>
          <img src="/aleno.jpg" alt="Foto Alena" style={{ width: "280px", height: "360px", objectFit: "cover", borderRadius: "30% / 20%", boxShadow: "0 0 20px rgba(255,192,203,0.7), 0 0 40px rgba(0,0,0,0.25)", border: "8px solid white" }} />
        </motion.div>

        {/* JUDUL + DESKRIPSI */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ padding: "30px", background: "black", borderRadius: "20px", boxShadow: "0 8px 25px rgba(0,0,0,0.4), 0 0 40px rgba(255,192,203,0.3)", textAlign: "center", width: "100%", color: "white" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "15px", background: "linear-gradient(90deg, pink, black)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            👋 Haaaaiii semuaaa.. kenalinn aku Alenaaaa ✨
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Haiii.. kenalin aku Alena, aku suka bikin web hehe 😆.  
            Nahh di web ini ada skills, ekskul robotic, dan contact.  
            Maaf kalo masih belum sempurna yaa 🤍
          </p>
        </motion.div>

        {/* GRID KOTAK */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", width: "100%" }}>
          {boxes.map(box => (
            <motion.div key={box.key} className="glowBox" style={{ padding: "20px", background: "black", borderRadius: "15px", fontSize: "16px", fontWeight: "bold", textAlign: "center", cursor: "pointer", position: "relative", transition: "all 0.3s ease", color: "white" }} whileHover={{ scale: 1.05, background: box.gradient }}>
              {box.title}
              <AnimatePresence>
                {openBox === box.key && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} style={{ marginTop: "10px", background: "#222", padding: "15px", borderRadius: "10px", fontSize: "14px", textAlign: "left", boxShadow: "inset 0 2px 6px rgba(0,0,0,0.08)" }}>
                    {box.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* TOMBOL */}
        <motion.a href="/skills" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ padding: "12px 25px", background: "linear-gradient(90deg, #ff758c, #ff7eb3)", color: "white", fontWeight: "bold", borderRadius: "30px", textDecoration: "none", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", transition: "all 0.3s ease" }}>
          🚀 Explore My Skills
        </motion.a>
      </div>
    </div>
  );
}