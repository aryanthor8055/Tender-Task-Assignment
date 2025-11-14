import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tender Tasks",
  description: "Tender management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen flex overflow-hidden">
          <Sidebar />

          <div className="flex flex-col flex-1 bg-black overflow-hidden p-4">
            <div className="p-3 flex flex-col h-full w-full border rounded-3xl bg-[#383737] overflow-hidden">
              <Header />
              <main className="main flex-1 overflow-auto p-6">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
