import React from "react";

interface ProcessStepProps {
  step: {
    id: string;
    title: string;
    description: string;
    bgColor?: string;
    textColor: string;
    arrowColor?: string;
  };
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step }) => {
  return (
    <div className="flex items-start gap-4 lg:gap-6">
      <div
        className={`bg-[#000000] hover:bg-[#d0ff4f] text-white hover:text-black rounded-3xl px-8 py-6 lg:px-10 lg:py-8 flex-1 min-h-[200px] lg:min-h-[240px] transition-all duration-500 ease-in-out hover:rotate-[5deg] hover:shadow-xl group`}
      >
        <div className="w-full flex justify-between gap-3 items-center mb-4">
          {/* Step Badge */}
          <div className="flex items-center gap-3 bg-[#C5FFEE] rounded-full px-8 py-1 text-black w-fit group-hover:bg-black group-hover:text-white transition-all duration-500 ease-in-out">
            <span className="text-[20px] leading-[34px] tracking-wide">
              {step.id.charAt(0).toUpperCase() + step.id.slice(1)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="23"
              height="15"
              viewBox="0 0 23 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:stroke-black transition-all duration-500 ease-in-out"
            >
              <path
                d="M0 7.5H22M22 7.5C19.5905 7.04545 14.7714 4.90909 14.7714 0M22 7.5C19.5905 7.95455 14.7714 10.0909 14.7714 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-[16px] leading-[18px] font-medium underline pb-1 transition-colors duration-500 ease-in-out group-hover:text-black">
              Read More
            </span>
          </div>
        </div>

        {/* Step Content */}
        <div className="space-y-4">
          <p className="text-[18px] leading-[33px] lg:text-base opacity-90 transition-colors duration-500 ease-in-out">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
