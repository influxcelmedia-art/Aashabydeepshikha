import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AASHA by Deep Shikha",
  description: "Luxury fashion and lifestyle brand",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
