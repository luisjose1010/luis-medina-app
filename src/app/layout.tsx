import type { Metadata } from "next";
import { inter } from "@/assets/styles/fonts";
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Luis Medina App",
  description: "Aplicación de tipo portafolio de Luis José Medina Sandoval",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
