import React, { ReactNode } from "react";

interface TContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ className, children }: TContainerProps) {
  return (
    <div className={`${className} max-w-[1440px] mx-auto px-3 md:p-4]`}>
      {children}
    </div>
  );
}
