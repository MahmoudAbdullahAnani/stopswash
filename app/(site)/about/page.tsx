import About from "@/components/About";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

const AboutPage = () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <Breadcrumb
            pageName="About Page"
            description="Discover how Stops Car Wash delivers exceptional, eco-friendly car wash services with cutting-edge technology and a commitment to customer satisfaction and sustainability."
          />
        </div>
      </section>
      {/* <AboutSectionOne />
          <AboutSectionTwo /> */}
      <About />
      <CTA />
      <FAQ />
    </>
  );
};

export default AboutPage;
