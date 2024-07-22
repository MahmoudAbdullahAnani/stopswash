import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stops Car Wash - Premium Car Wash Services",
  description:
    "Experience top-quality, eco-friendly car wash services tailored for your vehicle's needs at Stops Car Wash. Your satisfaction is our priority.",
  icons: "/favicon.png",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
