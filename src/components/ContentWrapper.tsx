import { ReactNode } from "react";

const ContentWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex max-w-xs flex-col items-center justify-center pb-16 sm:max-w-md">
      {children}
    </div>
  );
};

export default ContentWrapper;
