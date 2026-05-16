import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barry Lantern Oil & Gas Limited",
  description: "Oil & Gas Marketing and Marine Logistics Company in Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <Navbar />
        {children}

        {/* Fixed WhatsApp Button */}
        
         <a href="https://wa.me/2348024729799"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all font-bold text-sm">
          💬 WhatsApp Us
        </a>

{/* Fixed Social Sidebar */}
<div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col">
  <a href="#" className="bg-[#1877f2] text-white w-10 h-10 flex items-center justify-center hover:w-14 transition-all duration-300 text-sm font-bold">
    f
  </a>
  <a href="#" className="bg-[#1da1f2] text-white w-10 h-10 flex items-center justify-center hover:w-14 transition-all duration-300 text-sm font-bold">
    𝕏
  </a>
  <a href="#" className="bg-[#ea4335] text-white w-10 h-10 flex items-center justify-center hover:w-14 transition-all duration-300 text-sm font-bold">
    ✉
  </a>
  <a href="https://wa.me/2348024729799" target="_blank" rel="noopener noreferrer" className="bg-[#25d366] text-white w-10 h-10 flex items-center justify-center hover:w-14 transition-all duration-300 text-sm font-bold">
    ✓
  </a>
  <a href="#" className="bg-[#0a66c2] text-white w-10 h-10 flex items-center justify-center hover:w-14 transition-all duration-300 text-sm font-bold">
    in
  </a>
  <a href="#" className="bg-[#003366] text-white w-10 h-10 flex items-center justify-center hover:w-14 transition-all duration-300 text-sm font-bold">
    +
  </a>
</div>
      </body>
    </html>
  );
}