import './globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Brendan K. Schatzki, Cool Stuff',
  description:
    "Here you can find Brendan's stray thoughts. You say, \"Where's your cool stuff? Scroll down to see how cool it is.",
  icons: {
    icon: '/BrendanKSchatzki-Favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased selection:bg-primary selection:text-background',
          fontSans.variable
        )}
      >
        {/* <NetlifyForm /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={['light', 'dark', 'system']}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
