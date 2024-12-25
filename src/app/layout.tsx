import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamilcar",
  description: "Hamilcar, services et solutions Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
