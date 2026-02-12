import type { ReactNode } from "react";
import { Montserrat, Oswald } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-oswald",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${oswald.variable}`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%233FD0FF'/></svg>"
        />
      </head>
      <body className="font-sans bg-[#030D16] text-text leading-relaxed">
        {children}
      </body>
    </html>
  );
}
