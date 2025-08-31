"use client";
import { useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        padding: "8px 15px",
        borderRadius: "20px",
        border: "2px solid white",
        cursor: "pointer",
        fontWeight: "bold",
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        transition: "all 0.3s ease",
      }}
    >
      {dark ? "🌙 Dark Mode" : "☀ Light Mode"}
    </button>
  );
}