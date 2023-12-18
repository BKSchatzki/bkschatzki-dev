import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-screen w-11/12 flex-col items-center justify-center">
      <div className="flex max-w-xs flex-col items-center justify-center sm:max-w-md">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
