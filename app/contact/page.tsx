import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Contact Stops Car Wash for any inquiries, appointments, or feedback and find our easy-to-access contact details to ensure a seamless experience."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
