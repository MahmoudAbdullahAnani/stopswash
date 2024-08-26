"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "node_modules/react-modal-video/css/modal-video.css";

const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";

import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
const GA_TRACKING_ID = "G-SPNF9L10Q9";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Check if window is available
    if (typeof window !== "undefined") {
      // Initialize Google Analytics
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];

      // @ts-ignore
      function gtag() {
        // @ts-ignore
        window.dataLayer.push(arguments);
      }
      // @ts-ignore
      gtag("js", new Date());
      // @ts-ignore
      gtag("config", GA_TRACKING_ID, {
        page_path: window.location.pathname,
      });

      // Track page views on route changes
      const handleRouteChange = (url: string) => {
        // @ts-ignore
        gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      };

      // Observe route changes
      const { pathname } = window.location;
      window.addEventListener("popstate", () => handleRouteChange(pathname));

      return () => {
        window.removeEventListener("popstate", () =>
          handleRouteChange(pathname),
        );
      };
    }
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <FloatingWhatsApp
            accountName="Stops Car Wash"
            phoneNumber={"971566688874"}
            notification={true}
            notificationLoop={1}
            notificationDelay={20}
            darkMode={true}
          />
          <Lines />
          <Header />
          <ToasterContext />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
          </Script>
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
