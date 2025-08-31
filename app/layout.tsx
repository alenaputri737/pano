import type { Metadata } from "next";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js simple layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}