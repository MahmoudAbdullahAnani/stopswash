"use client";
import React, { useState } from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  const [more, setMore] = useState(false);

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "SOLID FEATURES",
              subtitle: "Core Features of Solid",
              description: `Experience premium, customizable, and eco-friendly car wash services designed for your convenience at Stops Car Wash.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData
              .slice(0, more ? featuresData.length : 6)
              .map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))}
            {/* <!-- Features item End --> */}
          </div>
          <div className="text-center">
            <button
              className="mx-auto my-5 rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              onClick={() => setMore(!more)}
            >
              {more ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
