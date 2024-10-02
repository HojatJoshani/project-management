import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";

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
      <body className={`${vazirFont.className} antialiased`}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
