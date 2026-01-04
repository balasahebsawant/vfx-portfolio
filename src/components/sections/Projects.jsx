// import { motion } from "framer-motion";
// import projects from "../../data/projects";

// export default function Projects() {
//   return (
//     <section id="projects" className="bg-white px-6 py-24">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <h2 className="text-4xl font-bold mb-14">
//           Selected Projects
//         </h2>

//         {/* GRID — 4 desktop, 2 tablet, 1 mobile */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               whileHover={{
//                 y: -14,
//                 scale: 1.08,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 20,
//               }}
//               className="
//                 bg-white
//                 border-2 border-black
//                 rounded-2xl
//                 overflow-hidden
//                 flex flex-col
//                 cursor-pointer
//               "
//             >

//               {/* POSTER — clean, no overlays */}
//               <div className="w-full flex justify-center bg-white pt-4">
//                 <img
//                   src={project.poster}
//                   alt={project.title}
//                   className="
//                     w-[180px]
//                     h-auto
//                     object-contain
//                     rounded-md
//                   "
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-5 flex flex-col flex-grow">

//                 {/* TITLE */}
//                 <h3 className="text-lg font-semibold">
//                   {project.title}
//                 </h3>

//                 {/* ROLE / YEAR + STUDIO LOGO */}
//                 <div className="mt-1 flex items-center justify-between gap-3">
//                   <p className="text-sm text-gray-600">
//                     {project.role} • {project.year}
//                   </p>

//                   {project.studioLogo && (
//                     <img
//                       src={project.studioLogo}
//                       alt="Studio"
//                       className="
//                         h-6
//                         object-contain
//                         opacity-70
//                         grayscale
//                       "
//                     />
//                   )}
//                 </div>

//                 {/* DESCRIPTION */}
//                 <p className="text-sm text-gray-700 mt-3 leading-relaxed flex-grow">
//                   {project.description}
//                 </p>

//                 {/* LINKS */}
//                 <div className="mt-4 flex gap-6 text-sm font-medium text-black">
//                   <button className="underline hover:opacity-70">
//                     View Credits
//                   </button>

//                   <a
//                     href={project.trailer}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline hover:opacity-70"
//                   >
//                     Watch Trailer
//                   </a>
//                 </div>

//               </div>

//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-14">
          Signature Projects
        </h2>

        {/* GRID — 4 desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">


          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -14, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="
                relative
                bg-white
                border-2 border-black
                rounded-2xl
                overflow-hidden
                flex flex-col
                cursor-pointer
              "
            >

              {/* POSTER */}
              <div className="w-full flex justify-center bg-white pt-4">
                <img
                  src={project.poster}
                  alt={project.title}
                  className="
                    w-[180px]
                    h-auto
                    object-contain
                    rounded-md
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-grow">

                {/* TITLE */}
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                {/* ROLE / YEAR */}
                <p className="text-sm text-gray-600 mt-1">
                  {project.role} • {project.year}
                </p>

                {project.studioLogo && (
                  <img
                    src={project.studioLogo}
                    alt="Studio"
                    className={`
                    absolute
                    bottom-4
                    right-4
                    object-contain
                    ${project.studioLogo.includes("mikros") ? "h-6" : "h-8"}
                    `}
                  />
                )}

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-700 mt-3 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* LINKS */}
                <div className="mt-4 flex gap-6 text-sm font-medium text-black">
                  <button className="underline hover:opacity-70">
                    View Credits
                  </button>

                  <a
                    href={project.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70"
                  >
                    Watch Trailer
                  </a>
                </div>
              </div>

              {/* STUDIO LOGO — BOTTOM RIGHT (FULL COLOR) */}
              {/* {project.studioLogo && (
                <img
                  src={project.studioLogo}
                  alt="Studio"
                  className="
                    absolute
                    bottom-4
                    right-4
                    h-8
                    object-contain
                  "
                />
              )} */}

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
