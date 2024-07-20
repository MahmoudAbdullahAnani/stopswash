"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const [more, setMore] = useState(false);
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="Experience premium, customizable, and eco-friendly car wash services designed for your convenience at Stops Car Wash."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData
              .slice(0, more ? featuresData.length : 6)
              .map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
          </div>
          <div className="text-center">
            <button
              className="mx-auto my-5 rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              onClick={() => setMore(!more)}
            >
              {more ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
