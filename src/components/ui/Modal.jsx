// import { motion } from "framer-motion";

// export default function Modal({ isOpen, onClose, children }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/80"
//         onClick={onClose}
//       />

//       {/* Content */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         className="relative bg-black border border-yellow-400 rounded-xl p-6 max-w-4xl w-full z-10"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-yellow-400 text-xl"
//         >
//           ✕
//         </button>

//         {children}
//       </motion.div>
//     </div>
//   );
// }


import { motion } from "framer-motion";

export default function ProjectModal({ image, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative max-w-4xl w-full"
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-sm uppercase tracking-wide"
        >
          Close
        </button>

        <img
          src={image}
          alt="Project Preview"
          className="w-full rounded-lg border-4 border-yellow-400"
        />
      </motion.div>
    </div>
  );
}
