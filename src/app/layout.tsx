import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import Script from 'next/script'; // 👈 Import Script


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vizentoo",
  description: "Vizentoo charges no hourly fees. Our flat-rate pricing gets you unlimited design work with no barriers. Submit your project, and we’ll pair you…",
  icons: {
    icon: "/images/15.png", // place this file in /public
  },
  other: {
    "google-site-verification": "W8rq2ypu8UtZFI2xGUX0drcOIAbqP6L_NMglP6g0Nr4",
    
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
{/* Start of Tawk.to Script */}
<Script
  id="tawk-to-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/68072e74b57ff7190d14d7bb/1ipe0qu50';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `,
  }}
/>
{/* <!--End of Tawk.to Script--> */}
        <Footer/>
      </body>
    </html>
  );
}
