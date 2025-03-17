import * as React from 'react';

import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const H1 = React.forwardRef<HTMLHeadingElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        'scroll-m-20 text-3xl font-extrabold tracking-tight header-space:text-4xl 2xl:text-5xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
});
H1.displayName = 'H1';

const H2 = React.forwardRef<HTMLHeadingElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
});
H2.displayName = 'H2';

const H3 = React.forwardRef<HTMLHeadingElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  );
});
H3.displayName = 'H3';

const H4 = React.forwardRef<HTMLHeadingElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <h4
      ref={ref}
      className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </h4>
  );
});
H4.displayName = 'H4';

const P = React.forwardRef<HTMLParagraphElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
P.displayName = 'P';

const Blockquote = React.forwardRef<HTMLQuoteElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={cn('mt-6 border-l-2 pl-6 italic', className)}
        {...props}
      >
        {children}
      </blockquote>
    );
  }
);
Blockquote.displayName = 'Blockquote';

const UL = React.forwardRef<HTMLUListElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      {...props}
    >
      {children}
    </ul>
  );
});
UL.displayName = 'UL';

const OL = React.forwardRef<HTMLOListElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <ol
      ref={ref}
      className={cn('my-6 ml-6 list-decimal [&>li]:mt-2', className)}
      {...props}
    >
      {children}
    </ol>
  );
});
OL.displayName = 'OL';

const LI = React.forwardRef<HTMLLIElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={cn(className)}
      {...props}
    >
      {children}
    </li>
  );
});
LI.displayName = 'LI';

const InlineCode = React.forwardRef<HTMLElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(
          'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  }
);
InlineCode.displayName = 'InlineCode';

const Lead = React.forwardRef<HTMLSpanElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('text-xl text-muted-foreground', className)}
      {...props}
    >
      {children}
    </span>
  );
});
Lead.displayName = 'Lead';

const Large = React.forwardRef<HTMLSpanElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('text-lg font-semibold', className)}
      {...props}
    >
      {children}
    </span>
  );
});
Large.displayName = 'Large';

const Small = React.forwardRef<HTMLSpanElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('text-sm font-medium leading-none', className)}
      {...props}
    >
      {children}
    </span>
  );
});
Small.displayName = 'Small';

const Muted = React.forwardRef<HTMLSpanElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </span>
  );
});
Muted.displayName = 'Muted';

const Anchor = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'font-medium text-primary underline underline-offset-4 hover:brightness-200',
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);
Anchor.displayName = 'Anchor';

export { Anchor, Blockquote, H1, H2, H3, H4, InlineCode, Large, Lead, LI, Muted, OL, P, Small, UL };
