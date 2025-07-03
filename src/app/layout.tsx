import type { Metadata } from "next";
import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";
import NavigasiMobile from "@/components/NavigasiMobile";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometype-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eep Syaiful Nurohman",
  description: "Personal website of Eep Syaiful Nurohman",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${sometypeMono.variable} antialiased overflow-hidden relative`}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            {/* main nav */}
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className=" w-full max-w-[1130px] mx-auto px-[15px] ">
              <Header />
              <div>{children}</div>
            </div>
            <div className="max-w-[250px]">
              <NavigasiMobile />
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
