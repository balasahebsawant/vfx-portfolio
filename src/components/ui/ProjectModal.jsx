import { motion } from "framer-motion";

export default function ProjectModal({ isOpen, onClose, image, title }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80">
      
      {/* Click outside to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-black border-[2px] border-yellow-400 rounded-xl max-w-4xl w-full p-6"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl hover:text-yellow-400"
        >
          ✕
        </button>

        <h3 className="text-white text-xl font-semibold mb-4">
          {title}
        </h3>

        <img
          src={image}
          alt={title}
          className="w-full rounded-lg"
        />
      </motion.div>
    </div>
  );
}
