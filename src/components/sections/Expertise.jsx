// import { motion } from "framer-motion";

// const tools = [
//   {
//     name: "Autodesk Maya",
//     description:
//       "Advanced character animation, rigging, and creature workflows used across feature films and premium streaming.",
//     logo: "/assets/tools/maya.png",
//   },
//   {
//     name: "ShotGrid (Shotgun)",
//     description:
//       "Production tracking, pipeline coordination, and animation delivery across large studio teams.",
//     logo: "/assets/tools/shotgun.png",F
//   },
//   {
//     name: "Blender",
//     description:
//       "Supplementary tool for previs, motion studies, layout exploration, and rapid iteration workflows.",
//     logo: "/assets/tools/blender.png",
//   },
// ];

// const specializations = [
//   "Quadruped Character Animation",
//   "Creature Performance & Motion Study",
//   "Character Rigging & Setup",
//   "Motion Capture Cleanup & Enhancement",
//   "Feature Film & Streaming Pipelines",
// ];

// export default function Expertise() {
//   return (
//     <section id="expertise" className="bg-black px-6 py-28 text-white">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="text-center mb-20">
//           <h2 className="text-5xl md:text-6xl font-bold mb-6">
//             Expertise & Tools
//           </h2>

//           <p className="text-lg md:text-xl text-gray-400">
//             Master of Quadruped & Creature Character Animation
//           </p>

//         </div>

//         {/* TOOLS */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28">
//           {tools.map((tool) => (
//             <motion.div
//               key={tool.name}
//               whileHover={{ y: -8 }}
//               transition={{ type: "spring", stiffness: 220, damping: 18 }}
//               className="
//                 border border-white/10
//                 rounded-2xl
//                 p-8
//                 bg-black
//                 flex flex-col
//                 gap-6
//               "
//             >
//               {/* LOGO */}
//               <div className="
//   inline-flex
//   items-center
//   justify-center
//   bg-white
//   rounded-lg
//   p-3
//   w-fit
// ">
//                 <img
//                   src={tool.logo}
//                   alt={tool.name}
//                   className="
//       h-8
//       w-auto
//       object-contain
//     "
//                 />
//               </div>


//               {/* TEXT */}
//               <div>
//                 <h3 className="text-xl font-semibold">
//                   {tool.name}
//                 </h3>
//                 <p className="mt-3 text-sm text-gray-400 leading-relaxed">
//                   {tool.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CORE SPECIALIZATIONS */}
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-2xl font-semibold mb-10">
//             Core Specializations
//           </h3>

//           <div className="flex flex-wrap justify-center gap-6">
//             {specializations.map((item) => (
//               <motion.div
//                 key={item}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 260, damping: 16 }}
//                 className="
//                   px-6 py-3
//                   border border-white/15
//                   rounded-full
//                   text-sm
//                   tracking-wide
//                   text-gray-200
//                 "
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

const tools = [
  {
    name: "Autodesk Maya",
    description:
      "Advanced character animation, rigging, and creature workflows used across feature films and premium streaming.",
    logo: "/assets/tools/maya.png",
  },
  {
    name: "ShotGrid (Shotgun)",
    description:
      "Production tracking, pipeline coordination, and animation delivery across large studio teams.",
    logo: "/assets/tools/shotgun.png",
  },
  {
    name: "Blender",
    description:
      "Supplementary tool for previs, motion studies, layout exploration, and rapid iteration workflows.",
    logo: "/assets/tools/blender.png",
  },
];

const specializations = [
  "Quadruped Character Animation",
  "Creature Performance & Motion Study",
  "Character Rigging & Setup",
  "Motion Capture Cleanup & Enhancement",
  "Feature Film & Streaming Pipelines",
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-black px-6 py-32 text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Expertise & Tools
          </h2>

          <p className="text-lg md:text-xl text-gray-400">
            Master of Quadruped & Creature Character Animation
          </p>
        </div>

        {/* TOOLS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="
                border border-white/15
                rounded-2xl
                p-10
                bg-black
                flex flex-col
                gap-6
              "
            >
              {/* LOGO */}
              <div className="inline-flex items-center justify-center bg-white rounded-xl p-4 w-fit">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-9 w-auto object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-2xl font-semibold">
                  {tool.name}
                </h3>
                <p className="mt-4 text-base text-gray-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CORE SPECIALIZATIONS */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-12">
            Core Specializations
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {specializations.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className="
                  px-7 py-3
                  border border-white/20
                  rounded-full
                  text-base
                  tracking-wide
                  text-gray-200
                "
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


