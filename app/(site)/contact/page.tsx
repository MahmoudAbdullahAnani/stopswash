import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

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
