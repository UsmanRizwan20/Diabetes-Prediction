import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepHealth AI - Diabetes Prediction",
  description: "Predictive diabetes risk assessment using deep learning.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="antialiased selection:bg-primary/30 selection:text-primary min-h-full flex flex-col">
        <Navbar />
        <main className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.20))]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
