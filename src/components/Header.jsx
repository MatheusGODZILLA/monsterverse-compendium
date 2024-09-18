import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <header className="bg-black fixed w-full z-20 shadow-lg p-4">
    <div className="container mx-auto flex items-center justify-between">
      <Image src="/img/mv_logo_fullsize.a77f295.png" alt="logo" width={80} height={50} className="ml-2 w-24 h-auto" />
      <nav className="flex items-center space-x-6">
        <Link href="/" className="text-[#F29C6B] text-lg hover:text-white transition-transform duration-200 ease-in-out hover:scale-105 group cursor-pointer">Home</Link>
        <Link href="/" className="text-[#F29C6B] text-lg hover:text-white transition-transform duration-200 ease-in-out hover:scale-105 group cursor-pointer">Titans</Link>
        <Link href="/" className="text-[#F29C6B] text-lg hover:text-white transition-transform duration-200 ease-in-out hover:scale-105 group cursor-pointer">Timeline</Link>
      </nav>
    </div>
  </header>
);

export default Header;