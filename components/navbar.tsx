// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { ModeToggle } from "@/components/mode-toggle";
// import { Menu, X } from "lucide-react";
// import { cn } from "@/lib/utils";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <>
//       {/* Fixed Navbar */}
//       <div className="fixed top-0 left-0 w-full z-50 border-b bg-white dark:bg-gray-900">
//         <div className="flex h-16 items-center px-4 mx-auto justify-center relative">
//           {/* Logo aligned to the left */}
//           <Link
//             href="/"
//             className="flex items-center space-x-3 absolute left-4"
//           >
//             <span className="font-bold text-xl">The Capital Box</span>
//           </Link>

//           {/* Desktop Menu (Centered) */}
//           <div className="hidden lg:flex space-x-6">
//             <NavLinks className="flex space-x-6" />
//           </div>

//           {/* Mode Toggle aligned to the right */}
//           <div className="hidden lg:block absolute right-4">
//             <ModeToggle />
//           </div>

//           {/* Hamburger Menu Button (Mobile) */}
//           <button
//             className="lg:hidden p-2 focus:outline-none absolute right-4"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden flex flex-col items-center space-y-4 pb-4">
//             <NavLinks className="flex flex-col space-y-3" />
//             <ModeToggle />
//           </div>
//         )}
//       </div>

//       {/* Page Content - Add padding to prevent overlap */}
//       <div className="pt-16">{/* Your page content goes here */}</div>
//     </>
//   );
// }

// function NavLinks({ className }: { className?: string }) {
//   return (
//     <nav className={cn("space-x-6", className)}>
//       {navItems.map((item) => (
//         <Link
//           key={item.href}
//           href={item.href}
//           className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//         >
//           {item.label}
//         </Link>
//       ))}
//     </nav>
//   );
// }

// const navItems = [
//   { href: "/about", label: "About" },
//   { href: "/tax", label: "Tax Solutions" },
//   { href: "/risk", label: "Risk Management" },
//   { href: "/retirement", label: "Retirement Solutions" },
//   { href: "/networking", label: "Networking Solutions" },
//   { href: "/careers", label: "Careers" },
//   { href: "/contact", label: "Contact" },
// ];
"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 border-b bg-white dark:bg-gray-900">
        <div className="flex h-16 items-center px-4 mx-auto justify-center relative">
          {/* Logo aligned to the left */}
          <Link
            href="/"
            className="flex items-center space-x-3 absolute left-4"
          >
            <span className="font-bold text-xl">The Capital Box</span>
          </Link>

          {/* Desktop Menu (Centered) */}
          <div className="hidden lg:flex space-x-6">
            <NavLinks className="flex space-x-6" />
          </div>

          {/* Mode Toggle aligned to the right */}
          <div className="hidden lg:block absolute right-4">
            <ModeToggle />
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="lg:hidden p-2 focus:outline-none absolute right-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center space-y-4 pb-4">
            <NavLinks className="flex flex-col space-y-3" />
            <ModeToggle />
          </div>
        )}
      </div>

      {/* Page Content - Add padding to prevent overlap */}
      <div className="pt-16">{/* Your page content goes here */}</div>
    </>
  );
}

function NavLinks({ className }: { className?: string }) {
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  return (
    <nav className={cn("space-x-6", className)}>
      <Link
        href="/about"
        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        About
      </Link>

      {/* Services Dropdown with Click Handler */}
      <div className="relative">
        <button
          className=" select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center"
          onClick={() => setIsServicesOpen(!isServicesOpen)}
        >
          Services <ChevronDown size={16} className="ml-1" />
        </button>

        {isServicesOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md flex flex-col z-50">
            {serviceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                onClick={() => setIsServicesOpen(false)} // Close on click
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/careers"
        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        Careers
      </Link>
      <Link
        href="/contact"
        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        Contact
      </Link>
    </nav>
  );
}

const serviceItems = [
  { href: "/tax", label: "Tax Solutions" },
  { href: "/risk", label: "Risk Management" },
  { href: "/retirement", label: "Retirement Solutions" },
  // { href: "/networking", label: "Networking Solutions" },
];
