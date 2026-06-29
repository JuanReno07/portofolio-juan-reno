import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Yosafat Juan Reno | IT Infrastructure & Senior Support Officer",
  description: "Portfolio of Yosafat Juan Reno, an IT Infrastructure and Senior Support Officer experienced in enterprise networking, server administration, monitoring, network security, CCTV infrastructure, and IT support operations.",
  keywords: [
    "IT Infrastructure",
    "Senior Support Officer",
    "Network Engineer",
    "Cikarang",
    "Bekasi",
    "Indonesia",
    "PT Prokemas Adhikari Kreasi",
    "Fortigate",
    "Mikrotik Firewall",
    "Cisco Switches",
    "Ruckus Access Points",
    "Zabbix Monitoring",
    "Windows Server Admin",
    "Active Directory GPO",
  ],
  authors: [{ name: "Yosafat Juan Reno" }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yosafat Juan Reno | IT Infrastructure & Senior Support Officer",
    description: "Portfolio of Yosafat Juan Reno, an IT Infrastructure and Senior Support Officer experienced in enterprise networking, server administration, monitoring, network security, CCTV infrastructure, and IT support operations.",
    url: siteUrl,
    siteName: "Yosafat Juan Reno Portfolio",
    images: [
      {
        url: "/images/yosafat-juan-reno-portrait.jpg",
        width: 800,
        height: 1000,
        alt: "Yosafat Juan Reno - IT Infrastructure & Senior Support Officer",
      },
    ],
    locale: "en_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yosafat Juan Reno | IT Infrastructure & Senior Support Officer",
    description: "Portfolio of Yosafat Juan Reno, an IT Infrastructure and Senior Support Officer experienced in enterprise networking, server administration, monitoring, network security, CCTV infrastructure, and IT support operations.",
    images: ["/images/yosafat-juan-reno-portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data definitions - Person only
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yosafat Juan Reno",
    "jobTitle": "IT Infrastructure & Senior Support Officer",
    "email": "yosafat.juan07@gmail.com",
    "telephone": "+6289626804474",
    "worksFor": {
      "@type": "Organization",
      "name": "PT Prokemas Adhikari Kreasi",
      "location": {
        "@type": "Place",
        "name": "Cikarang, Indonesia"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bekasi",
      "addressRegion": "West Java",
      "addressCountry": "ID"
    },
    "url": siteUrl,
    "sameAs": [] // Removed unverified placeholders
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        {/* Favicon placeholders */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>" />
      </head>
      <body className="font-sans antialiased text-slate-200 bg-[#0B0F19] min-h-screen relative flex flex-col">
        {children}
      </body>
    </html>
  );
}
