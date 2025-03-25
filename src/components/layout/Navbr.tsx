// /* eslint-disable @typescript-eslint/no-unused-vars */
// 'use client'
// import Image from "next/image"
// import Link from "next/link";
// import { Button } from "../ui/button";
// import { usePathname } from 'next/navigation';
// import { cn } from "@/lib/utils";
// import { useTheme } from "next-themes";
// import { MoonIcon, SunIcon } from "lucide-react";




// function Navbar() {

//   const { theme, setTheme } = useTheme();
//   const pathname = usePathname();

//   const navigation = [
//     {
//     name: 'Features',
//     href: '/'
//     },
//     {
//     name: 'Compare',
//     href: '/compare'
//     },
//     {
//     name: 'Support',
//     href: '/support'
//     },
//     {
//     name: 'Blog',
//     href: '/blog'
//     },
//   ]

//   return (
//     <div className="sticky top-0 w-full border-b bg-background/95 backdrop:blur supports-[backdrop-filter]:bg-background/60: py-[24px] z-[1000]">
//       <header className="header">
//         <div>
//           <Link href={'/'}>
//             {' '}
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               width={135}
//               height={32}
//             />
//           </Link>
//         </div>
//         <nav className="nav">
//           {navigation.map(item => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={cn(
//                 'text-sm font-medium transition-colors hover:text-primary',
//                 pathname === item.href
//                   ? 'text-foreground'
//                   : 'text-foreground/60'
//               )}
//             >
//               {' '}
//               {item.name}{' '}
//             </Link>
//           ))}
//         </nav>
//         <div className="btn-dbl">
//           {' '}
//           <Link
//             href={'/'}
//             className="hidden md:block text-[18px] font-bold text-[#5BB5A2] "
//           >
//             Log in
//           </Link>
//           <Button className="hidden md:block bg-[#5BB5A2] text-[15px] font-medium">
//             Open Account
//           </Button>
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//           >
//             <SunIcon className="sun" />
//             <MoonIcon className="absolute w-5 h-5 transotion-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
//           </Button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Navbar


/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // ✅ Mobile menu state

  const navigation = [
    { name: 'Features', href: '/' },
    { name: 'Compare', href: '/compare' },
    { name: 'Support', href: '/support' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <div className="sticky top-0 w-full border-b bg-background/95 backdrop-blur-md py-4">
      <header className="flex items-center justify-between px-6 md:px-12">
        
        <Link href={'/'}>
          <Image src="/logo.png" alt="Logo" width={135} height={32} />
        </Link>

       
        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

       
        <div className="hidden md:flex items-center gap-4">
          <Link href={'/'} className="text-[18px] font-bold text-[#5BB5A2]">Log in</Link>
          <Button className="bg-[#5BB5A2] text-[15px] font-medium">Open Account</Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

     
      {isOpen && (
        <div className="md:hidden bg-background border-t py-4 z-20">
          <nav className="flex flex-col items-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/60 hover:text-primary"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
            <Link href={'/'} className="text-[18px] font-bold text-[#5BB5A2]">Log in</Link>
            <Button className="bg-[#5BB5A2] text-[15px] font-medium">Open Account</Button>
          
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;

