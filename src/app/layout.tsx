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
        
         <a href="https://wa.me/2348131595373"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all font-bold text-sm">
          💬 WhatsApp Us
        </a>


      </body>
    </html>
  );
}