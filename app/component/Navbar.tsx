"use client";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#eee",
      }}
    >
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/robotic">Robotic</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <DarkModeToggle />
    </nav>
  );
}