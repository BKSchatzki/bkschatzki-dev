import { ReactNode } from 'react';

const ContentWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex max-w-xs flex-col items-center justify-center sm:max-w-md">
      {children}
    </div>
  );
};

export default ContentWrapper;
