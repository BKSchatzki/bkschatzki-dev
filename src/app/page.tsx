import Contact from '@/components/sections/Contact';
import CoolStuff from '@/components/sections/CoolStuff';
import Directory from '@/components/sections/Directory';
import Footer from '@/components/sections/Footer';
import NameHeader from '@/components/sections/NameHeader';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <div className="mx-auto flex flex-col items-center justify-start gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-center lg:px-8">
      <div className="no-scrollbar flex max-w-3xl flex-col gap-12 pt-10 lg:sticky lg:top-0 lg:max-h-[100dvh] lg:max-w-lg lg:overflow-y-auto lg:pb-10">
        <NameHeader />
        <Skills />
        <Contact />
      </div>
      <div className="flex max-w-3xl flex-col gap-10 pb-10 lg:pt-10">
        <Directory />
        <CoolStuff />
        <Footer />
      </div>
    </div>
  );
}
