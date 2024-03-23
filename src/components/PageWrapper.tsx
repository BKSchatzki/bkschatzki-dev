import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex h-[100dvh] w-11/12 flex-col items-center justify-center sm:py-24">
      {children}
    </div>
  );
};

export default PageWrapper;
