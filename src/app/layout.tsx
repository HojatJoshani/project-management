import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const vazirFont = localFont({
    src: "./fonts/Vazirmatn-Medium.woff2",
    weight: "100 900",
  });

export const metadata: Metadata = {
  title: "نرم افزار مدیریت پروژه",
  description: "گروه توسعه آریا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="en">
      <body
        className={`${vazirFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
