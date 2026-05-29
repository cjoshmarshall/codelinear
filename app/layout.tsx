import type { Metadata } from "next";
import { Chivo_Mono, Archivo, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Codelinear",
  description: "Assignment for Codelinear - SDE Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        archivo.variable,
        chivoMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col text-white-smoke bg-dark font-archivo">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
