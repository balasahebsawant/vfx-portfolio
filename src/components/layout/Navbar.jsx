

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-base border-b border-border z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <a href="#hero" className="text-xl font-bold text-text">
//           ANIMATOR<span className="text-accent">.</span>
//         </a>

//         {/* Links */}
//         <ul className="flex gap-8 text-sm uppercase tracking-wide">
//           {["Home", "Showreel", "Projects", "Expertise", "Experience", "Contact"].map(
//             (item) => (
//               <li key={item}>
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   className="text-text hover:text-accent"
//                 >
//                   {item}
//                 </a>
//               </li>
//             )
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch navbar style after hero section
      setIsDark(window.scrollY > window.innerHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300
        ${
          isDark
            ? "bg-black/90 border-white/10 text-white"
            : "bg-base/90 border-border text-text"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold tracking-wide">
        ANIMATIOR<span className="text-accent">.</span>
        </a>

        {/* Links */}
        <ul className="flex gap-8 text-sm uppercase tracking-wide">
          {["Home", "Showreel", "Projects", "Expertise", "Experience", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors
                    ${
                      isDark
                        ? "text-white hover:text-accent"
                        : "text-text hover:text-accent"
                    }`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
