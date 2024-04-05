'use client'
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import Header from "./components/Header";
import { cn } from "@/lib/utils";
import Footer from "./components/Footer";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
