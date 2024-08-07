import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stops Car Wash - Premium Car Wash Services",
  description:
    "Experience top-quality, eco-friendly car wash services tailored for your vehicle's needs at Stops Car Wash. Your satisfaction is our priority.",
  icons: "/favicon.png",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <Breadcrumb
            pageName="Contact Page"
            description="Contact Stops Car Wash for any inquiries, appointments, or feedback and find our easy-to-access contact details to ensure a seamless experience."
          />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ContactPage;
