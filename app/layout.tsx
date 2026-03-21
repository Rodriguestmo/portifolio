import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Thales Miguel | Marketing Digital & Tecnologia",
  description:
    "Especialista em landing pages de alta conversão, tráfego pago e IA personalizada. Monto a operação digital completa para transformar cliques em clientes reais.",
  metadataBase: new URL("https://thalesmiguel.com.br"),
  openGraph: {
    title: "Thales Miguel | Marketing Digital & Tecnologia",
    description:
      "Especialista em landing pages de alta conversão, tráfego pago e IA personalizada. Monto a operação digital completa para transformar cliques em clientes reais.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://thalesmiguel.com.br/#person",
        name: "Thales Miguel",
        jobTitle: "Especialista em Marketing Digital e Tecnologia",
        email: "thalesmiguel.tech@gmail.com",
        url: "https://thalesmiguel.com.br",
        sameAs: ["https://wa.me/5535984128420"],
        knowsAbout: [
          "Landing Pages",
          "Tráfego Pago",
          "Meta Ads",
          "Google Ads",
          "IA Personalizada",
          "WhatsApp",
          "CRM",
          "Automação",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://thalesmiguel.com.br/#service",
        name: "Thales Miguel — Marketing Digital & Tecnologia",
        description:
          "Landing pages de alta conversão, tráfego pago estratégico e IA personalizada para transformar cliques em clientes reais.",
        url: "https://thalesmiguel.com.br",
        provider: { "@id": "https://thalesmiguel.com.br/#person" },
        areaServed: "BR",
        availableLanguage: "Portuguese",
        serviceType: [
          "Landing Page",
          "Tráfego Pago",
          "IA Personalizada",
          "WhatsApp Automation",
          "CRM Integration",
        ],
      },
    ],
  };

  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
