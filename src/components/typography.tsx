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
      className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
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
          'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
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
      className={cn('text-muted-foreground text-xl', className)}
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
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    >
      {children}
    </span>
  );
});
Muted.displayName = 'Muted';

export { Blockquote, H1, H2, H3, H4, InlineCode, Large, Lead, LI, Muted, OL, P, Small, UL };

/* SHADCN HAS TABLE, BUT TABLE COMPONENTS FROM TYPOGRAPHY INCLUDED HERE

const TableContainer = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('my-6 w-full overflow-y-auto', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TableContainer.displayName = 'TableContainer';

const Table = React.forwardRef<HTMLTableElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={cn('w-full', className)}
        {...props}
      >
        {children}
      </table>
    );
  }
);
Table.displayName = 'Table';

const THead = React.forwardRef<HTMLTableSectionElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={cn(className)}
        {...props}
      >
        {children}
      </thead>
    );
  }
);
THead.displayName = 'THead';

const TBody = React.forwardRef<HTMLTableSectionElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        className={cn(className)}
        {...props}
      >
        {children}
      </tbody>
    );
  }
);
TBody.displayName = 'TBody';

const TR = React.forwardRef<HTMLTableRowElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={cn('even:bg-muted m-0 border-t p-0', className)}
        {...props}
      >
        {children}
      </tr>
    );
  }
);
TR.displayName = 'TR';

const TH = React.forwardRef<HTMLTableCellElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <th
        ref={ref}
        className={cn(
          'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
          className
        )}
        {...props}
      >
        {children}
      </th>
    );
  }
);
TH.displayName = 'TH';

const TD = React.forwardRef<HTMLTableCellElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={cn(
          'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
          className
        )}
        {...props}
      >
        {children}
      </td>
    );
  }
);
TD.displayName = 'TD';

export { Table, TableContainer, TBody, TD, TH, THead, TR };

*/
