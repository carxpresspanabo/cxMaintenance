import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CarXpressPH Maintenance",
  description: "CarXpressPH is currently running a scheduled system maintenance.",
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
