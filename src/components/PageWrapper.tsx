import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-screen w-11/12 flex-col items-center justify-center py-16 sm:py-24">
      {children}
    </div>
  );
};

export default PageWrapper;