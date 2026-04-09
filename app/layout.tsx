import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monpa | Trade with trust. Pay with confidence.",
  description: "Monpa is a secure escrow service built for Nigeria. Hold your money safely until both parties are satisfied. No more scammers, no more lost payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
