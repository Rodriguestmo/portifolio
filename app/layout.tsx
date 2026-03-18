import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Thales | Landing pages, tráfego pago e automações de IA",
  description:
    "Landing pages com foco em conversão, gestão de tráfego pago e automações de IA conectadas ao seu funil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${syne.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
