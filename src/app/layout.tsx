import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "DailyTour App",
  description: "Make tour from Pakistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


