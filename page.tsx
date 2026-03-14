import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarXpressPH | System Maintenance",
  description: "CarXpressPH is currently undergoing scheduled system maintenance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
