import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS first steps",
  description: "Learn NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>Header</header>
        {children}
      </body>
    </html>
  );
}
