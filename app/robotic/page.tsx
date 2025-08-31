"use client";
import { useState } from "react";
import Image from "next/image";

export default function Robotic() {
  const [showPanelDesc, setShowPanelDesc] = useState(false);
  const [showTrainerDesc, setShowTrainerDesc] = useState(false);
  const [showProjectDesc, setShowProjectDesc] = useState(false);

  const holograms = ["#FFD6D6", "#D6F5FF", "#D6FFE6"];

  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      
      {/* Background gelap animasi */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(270deg, #0a0a0a, #1e3a8a, #0a0a0a)",
        backgroundSize: "600% 600%",
        animation: "gradientBG 15s ease infinite",
        zIndex: -1
      }}></div>

      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div style={{ padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
        <h1 style={{
          fontSize: "60px",
          fontWeight: "bold",
          background: "linear-gradient(90deg, black, blue)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textAlign: "center"
        }}>
          📍 PROJECT ROBOTIC 📍
        </h1>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          
          {/* Foto 1 - Panel */}
          <div style={{
            borderRadius: "20px",
            padding: "15px",
            boxShadow: "0 0 20px #FFD6D6, 0 0 40px #FFD6D6",
            width: "250px",
            textAlign: "center",
            background: holograms[0],
            transition: "0.3s"
          }}>
            <Image src="/robot1.jpg" alt="Panel" width={250} height={150} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
            <button
              onClick={() => setShowPanelDesc(!showPanelDesc)}
              style={{
                marginTop: "10px",
                padding: "8px 15px",
                borderRadius: "12px",
                border: "none",
                background: "linear-gradient(90deg, black, blue)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "13px",
                boxShadow: "0 0 10px #0000ff",
                transition: "0.3s"
              }}
              onMouseEnter={(btn) => btn.currentTarget.style.boxShadow = "0 0 20px #0000ff, 0 0 40px #00ffff"}
              onMouseLeave={(btn) => btn.currentTarget.style.boxShadow = "0 0 10px #0000ff"}
            >
              Lihat Deskripsi
            </button>
            {showPanelDesc && (
              <div style={{
                marginTop: "10px",
                padding: "10px",
                borderRadius: "12px",
                background: "#f0f0f0",
                textAlign: "center",
                fontSize: "13px",
                color: "#333",
                lineHeight: "1.4",
              }}>
                Panel: Robot ini menampilkan panel kontrol interaktif untuk eksperimen dan pengujian sistem.
              </div>
            )}
          </div>

          {/* Foto 2 - Trainer PLC */}
          <div style={{
            borderRadius: "20px",
            padding: "15px",
            boxShadow: "0 0 20px #D6F5FF, 0 0 40px #D6F5FF",
            width: "250px",
            textAlign: "center",
            background: holograms[1],
            transition: "0.3s"
          }}>
            <Image src="/robot2.jpg" alt="Trainer PLC" width={250} height={150} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
            <button
              onClick={() => setShowTrainerDesc(!showTrainerDesc)}
              style={{
                marginTop: "10px",
                padding: "8px 15px",
                borderRadius: "12px",
                border: "none",
                background: "linear-gradient(90deg, black, blue)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "13px",
                boxShadow: "0 0 10px #0000ff",
                transition: "0.3s"
              }}
              onMouseEnter={(btn) => btn.currentTarget.style.boxShadow = "0 0 20px #0000ff, 0 0 40px #00ffff"}
              onMouseLeave={(btn) => btn.currentTarget.style.boxShadow = "0 0 10px #0000ff"}
            >
              Lihat Deskripsi
            </button>
            {showTrainerDesc && (
              <div style={{
                marginTop: "10px",
                padding: "10px",
                borderRadius: "12px",
                background: "#f0f0f0",
                textAlign: "center",
                fontSize: "13px",
                color: "#333",
                lineHeight: "1.4",
              }}>
                Trainer PLC: Robot ini digunakan sebagai trainer PLC untuk belajar program dan kontrol otomatis.
              </div>
            )}
          </div>

          {/* Foto 3 - Hasil Project */}
          <div style={{
            borderRadius: "20px",
            padding: "15px",
            boxShadow: "0 0 20px #D6FFE6, 0 0 40px #D6FFE6",
            width: "250px",
            textAlign: "center",
            background: holograms[2],
            transition: "0.3s"
          }}>
            <Image src="/robot3.jpg" alt="Hasil Project" width={250} height={150} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
            <button
              onClick={() => setShowProjectDesc(!showProjectDesc)}
              style={{
                marginTop: "10px",
                padding: "8px 15px",
                borderRadius: "12px",
                border: "none",
                background: "linear-gradient(90deg, black, blue)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "13px",
                boxShadow: "0 0 10px #0000ff",
                transition: "0.3s"
              }}
              onMouseEnter={(btn) => btn.currentTarget.style.boxShadow = "0 0 20px #0000ff, 0 0 40px #00ffff"}
              onMouseLeave={(btn) => btn.currentTarget.style.boxShadow = "0 0 10px #0000ff"}
            >
              Lihat Deskripsi
            </button>
            {showProjectDesc && (
              <div style={{
                marginTop: "10px",
                padding: "10px",
                borderRadius: "12px",
                background: "#f0f0f0",
                textAlign: "center",
                fontSize: "13px",
                color: "#333",
                lineHeight: "1.4",
              }}>
                Hasil Project: Ini adalah hasil proyek robotic yang berhasil dibuat.
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}