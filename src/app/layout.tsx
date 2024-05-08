
"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
// import "bootstrap/dist/js/bootstrap"; // Import bootstrap CSS
import "./globals.css";
import Head from "next/head";
import TopHeader from "@/components/TopHeader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";
import NextTopLoader from 'nextjs-toploader';
import { useEffect } from 'react'
import SEO from "@/components/Seo";
import { usePathname } from 'next/navigation'


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "NextClinic",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}
  : Readonly<{
  children: React.ReactNode;
}>
) {

  useEffect(() => {
     if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  }, [])
  
const pathName = usePathname();

  if (pathName == "/admin" || pathName=="/admin/register" || pathName =="/admin/doctors") {
    return (
    <html lang="en">
      <SEO pageTitle="NextClinic" pageDescription="Websites of a great clinic"/>
      <body>
      
        <NextTopLoader
        color="#ddd"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {children}
      
      </body>
       </html>
  );
  } else {
     return (
    
       <html lang="en">
      <SEO pageTitle="NextClinic" pageDescription="Websites of a great clinic"/>
      <body>
        <TopHeader/>
        <Nav />
        {/* #0d6efd */}
        <NextTopLoader
        color="#0d6efd"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {children}
      <Footer/>
      </body>
    </html>
  );
  }

  
}
