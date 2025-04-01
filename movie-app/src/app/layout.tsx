"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import { useState ,useContext} from "react";
import { DarkContext, DarkProvider } from "./components/MoviesProvider";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

  // export const metadata = {
  //   title: "Create Next App",
  //   description: "Generated by create next app",
  // };

export default function RootLayout({ children }: PropsWithChildren) {

  return (
    <html lang="en">
      <DarkProvider>  
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navigation/>
        {children}
        <Footer/>
      </body>
      </DarkProvider>
    </html>
  );
}
