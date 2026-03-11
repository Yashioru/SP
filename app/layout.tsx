import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SELF Festival — Student's EDM & Love Festival",
  description: "The ultimate student EDM festival experience. Three stages, 48 hours of non-stop music.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
