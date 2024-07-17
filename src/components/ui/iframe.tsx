import * as React from 'react';

interface Props {
  src: string;
  title?: string;
  [key: string]: any;
}

const IFrame = React.forwardRef<React.IframeHTMLAttributes<HTMLIFrameElement>, Props>(
  ({ src, title }: { src: string; title?: string }) => {
    return (
      <iframe
        width="100%"
        height="100%"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }
);
IFrame.displayName = 'IFrame';

export { IFrame };
