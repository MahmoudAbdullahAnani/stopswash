"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="dark:bg-black">
        <Providers>
          <Header />
          <FloatingWhatsApp
            accountName="Stops Car Wash"
            phoneNumber={"971566688874"}
            notification={true}
            notificationLoop={1}
            notificationDelay={20}
            darkMode={true}
          />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
