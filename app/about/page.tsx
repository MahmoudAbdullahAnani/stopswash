import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Discover how Stops Car Wash delivers exceptional, eco-friendly car wash services with cutting-edge technology and a commitment to customer satisfaction and sustainability."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
