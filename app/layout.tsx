import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mayank Saini — Full-stack Developer",
  description:
    "B.Tech CSE student at Global Institute of Technology, Jaipur. I ship multi-tenant platforms with realtime sync, AI agents, and durable background jobs — solo, end to end.",
  metadataBase: new URL("https://mayanksaraswal.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans font-normal">
        {children}
      </body>
    </html>
  );
}
