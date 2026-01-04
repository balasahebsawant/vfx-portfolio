


// import { motion } from "framer-motion";

// const logos = [
//   "/assets/logos/fwx.jpg",
//   "/assets/logos/mpc.jpg",
//   "/assets/logos/yrf.png",
//   "/assets/logos/mikros.png",
//   "/assets/logos/dneg_no_bg.png",
//   "/assets/logos/primefocus.png",
//   "/assets/logos/tata.png",
//   "/assets/logos/dq.svg",
// ];

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen bg-base px-6 flex flex-col justify-between relative overflow-hidden"
//     >
//       {/* Subtle background depth */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,215,0,0.08),transparent_55%)] pointer-events-none" />

//       {/* MAIN HERO CONTENT */}
//       <div className="max-w-7xl mx-auto w-full pt-16 pb-10 relative">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

//           {/* LEFT — TEXT */}
//           <div className="lg:col-span-7 -mt-32">
//             {/* Accent bar */}
//             <motion.div
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transformOrigin="left"
//               transition={{ duration: 0.6 }}
//               className="h-1 w-20 bg-accent mb-8"
//             />

//             {/* NAME */}
//             <motion.h1
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-[3.2rem] md:text-[4.4rem] font-extrabold text-text"
//             >
//               Baba Reddy
//             </motion.h1>

//             {/* DESIGNATION */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className="mt-2 text-lg md:text-xl text-muted font-medium"
//             >
//               Senior Character Animator & VFX Artist
//             </motion.p>

//             {/* TAGLINE */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="mt-8 text-lg md:text-xl text-text max-w-xl leading-relaxed"
//             >
//               Creating believable creature and character performances —
//               grounded in anatomy, physics, and cinematic storytelling
//               for feature films and premium streaming platforms.
//             </motion.p>
//           </div>

//           {/* RIGHT — IMAGE */}
//           <div className="lg:col-span-5 flex flex-col items-center -mt-16">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.9 }}
//               className="relative"
//             >
//               {/* Outer ring */}
//               <div className="absolute inset-[-18px] rounded-full border border-accent/40" />

//               {/* Glow */}
//               <div className="absolute inset-0 rounded-full bg-accent blur-[90px] opacity-20" />

//               <img
//                 src="/assets/images/client.png"
//                 alt="Senior Character Animator"
//                 className="relative
//                            w-[30rem] h-[30rem]
//                            md:w-[34rem] md:h-[34rem]
//                            rounded-full object-cover
//                            shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
//               />
//             </motion.div>
//           </div>

//         </div>
//       </div>

//       {/* LOGO MARQUEE (BOTTOM OF HERO) */}
//       <div className="w-full overflow-hidden border-t border-border py-8 bg-surface">
//         <div className="flex items-center gap-24 whitespace-nowrap animate-marquee">
//           {[...logos, ...logos].map((logo, index) => (
//             <img
//               src={logo}
//               alt="Studio Logo"
//               className="h-10 md:h-12 object-contain
//              opacity-80
//              transition-all duration-300
//              hover:opacity-100 hover:grayscale-0"
//             />

//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";

const logos = [
  "/assets/logos/fwx.jpg",
  "/assets/logos/mpc.jpg",
  "/assets/logos/yrf.png",
  "/assets/logos/mikros.png",
  "/assets/logos/dneg_no_bg.png",
  "/assets/logos/primefocus.png",
  "/assets/logos/tata.png",
  "/assets/logos/dq.svg",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-base px-6 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Subtle background depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,215,0,0.08),transparent_55%)] pointer-events-none" />

      {/* MAIN HERO CONTENT */}
      <div className="max-w-7xl mx-auto w-full pt-16 pb-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* LEFT — TEXT */}
          <div className="lg:col-span-7 -mt-32">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transformOrigin="left"
              transition={{ duration: 0.6 }}
              className="h-1 w-20 bg-accent mb-8"
            />

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[3.2rem] md:text-[4.4rem] font-extrabold text-text"
            >
              Balasaheb Sawant
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-2 text-lg md:text-xl text-muted font-medium"
            >
              Senior Character Animator & VFX Artist
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-text max-w-xl leading-relaxed"
            >
              Creating believable creature and character performances —
              grounded in anatomy, physics, and cinematic storytelling
              for feature films and premium streaming platforms.
            </motion.p>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="lg:col-span-5 flex flex-col items-center -mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="absolute inset-[-18px] rounded-full border border-accent/40" />
              <div className="absolute inset-0 rounded-full bg-accent blur-[90px] opacity-20" />

              <img
                src="/assets/images/client.png"
                alt="Senior Character Animator"
                className="relative
                           w-[30rem] h-[30rem]
                           md:w-[34rem] md:h-[34rem]
                           rounded-full object-cover
                           shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* CONTACT ME BUTTON — RIGHT ALIGNED ABOVE CAROUSEL */}
      <div className="absolute bottom-[13.5rem] right-12 z-20">

        <a
          href="#contact"
          className="
          inline-flex
          items-center
          gap-3
          px-6
          py-3
          rounded-full
          border
          border-border
          bg-surface
          text-text
          font-medium
          transition-all
          hover:bg-accent
          hover:text-black
          "
        >
          Contact Me
          <span className="text-lg">↓</span>
        </a>
      </div>


      {/* LOGO MARQUEE */}
      <div className="w-full overflow-hidden border-t border-border py-6  bg-surface">
        <div className="flex items-center gap-24 whitespace-nowrap animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Studio Logo"
              className="h-10 md:h-12 object-contain opacity-80 transition-all duration-300 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
