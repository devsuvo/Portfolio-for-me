import { Inter, Sora, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CursorGlow from "@/components/CursorGlow";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const serif = Instrument_Serif({ subsets: ["latin"], variable: "--font-serif", weight: "400", style: ["normal", "italic"] });

export const metadata = {
  title: { default: `${profile.name} | ${profile.designation}`, template: `%s | ${profile.name}` },
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${serif.variable}`}>
      <body>
        <div className="bg-grid" aria-hidden />
        <div className="blob b1" aria-hidden /><div className="blob b2" aria-hidden /><div className="blob b3" aria-hidden />
        <CursorGlow />
        <Navbar />
        <Reveal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
