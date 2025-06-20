import React from "react";
import Container from "../../ui/Container";
import SectionButton from "../../ui/SectionButton";
import ProcessStep from "./ProcessStep";

export default function Process() {
  const processSteps = [
    {
      id: "discovery",
      title: "Discovery",
      description:
        "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
      bgColor: "bg-black",
      textColor: "text-black",
      arrowColor: "text-gray-400",
    },
    {
      id: "strategy",
      title: "Strategy",
      description:
        "Every end-to-end project of ours begins with a cohesive pre-build strategy. From brand ID consultation to in-depth code reviews, we're here to set the stage for success.",
      bgColor: "bg-black",
      textColor: "text-black",
      arrowColor: "text-gray-600",
    },
    {
      id: "design",
      title: "Design",
      description:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
      bgColor: "bg-black",
      textColor: "text-black",
      arrowColor: "text-gray-400",
    },
    {
      id: "build",
      title: "Build",
      description:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
      bgColor: "bg-black",
      textColor: "text-black",
    },
  ];

  return (
    <div className="-mt-3 p-1 bg-transparent">
      <Container className="px-4 sm:px-8 md:px-12 py-12 md:py-16 bg-[#141414] text-white rounded-3xl md:rounded-4xl">
        {/* Header */}
        <div className="mb-12 lg:mb-20 flex flex-col md:flex-row gap-3 md:gap-10">
          <SectionButton variant="dark">Work Process</SectionButton>
          <h2 className="text-white text-[42px] md:text-[58px] font-bold">
            My Work Process
          </h2>
        </div>

        {/* Process Steps - Mobile Stack */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, index) => (
            <div key={step.id}>
              <ProcessStep step={step} />
              {index < processSteps.length - 1 && (
                <div className="flex justify-center py-4">
                  <svg
                    className="w-6 h-6 text-gray-400 rotate-90 transition-colors duration-500 ease-in-out"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Steps - Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-3">
          {/* Top Row */}
          <ProcessStep step={processSteps[0]} />
          <ProcessStep step={processSteps[1]} />

          {/* Bottom Row */}
          <ProcessStep step={processSteps[2]} />
          <ProcessStep step={processSteps[3]} />
        </div>
      </Container>
    </div>
  );
}
