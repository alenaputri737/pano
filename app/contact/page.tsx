"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Background animasi gradient */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(270deg, #000000, #1e3a8a, #000000)",
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

      <div style={{ padding: "50px", display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
        
        {/* Foto Lena dengan glow */}
        <div style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 0 25px #00ffff, 0 0 50px #1e3a8a",
          border: "5px solid #fff",
        }}>
          <Image src="/lena.jpg" alt="Lena" width={220} height={220} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <h1 style={{ fontSize: "60px", fontWeight: "bold", background: "linear-gradient(90deg, black, blue)", WebkitBackgroundClip: "text", color: "transparent", textAlign: "center" }}>
         ⭐ CONTACT MEE ⭐
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%", maxWidth: "500px" }}>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your Name"
            required
            style={{ padding: "12px", borderRadius: "12px", border: "1px solid #ccc", fontSize: "14px", width: "100%" }}
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your Email"
            required
            style={{ padding: "12px", borderRadius: "12px", border: "1px solid #ccc", fontSize: "14px", width: "100%" }}
          />
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Your Message"
            required
            rows={5}
            style={{ padding: "12px", borderRadius: "12px", border: "1px solid #ccc", fontSize: "14px", width: "100%", resize: "none" }}
          />

          <button
            onClick={handleSubmit}
            style={{
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(90deg, black, #1e3a8a)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
              boxShadow: "0 0 10px #00ffff",
              transition: "0.3s",
            }}
            onMouseEnter={(btn) => btn.currentTarget.style.boxShadow = "0 0 20px #00ffff, 0 0 40px #1e3a8a"}
            onMouseLeave={(btn) => btn.currentTarget.style.boxShadow = "0 0 10px #00ffff"}
          >
            Send Message
          </button>

          {submitted && <p style={{ color: "#00ffcc", textAlign: "center", fontWeight: "bold" }}>Thank you! Your message has been sent.</p>}
        </div>
      </div>
    </div>
  );
}