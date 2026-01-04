import { motion } from "framer-motion";

export default function Showreel() {
  return (
    <section
      id="showreel"
      className="bg-black px-6 pt-24 pb-20"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading block */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Showreel
          </motion.h2>

          <p className="mt-2 text-gray-400">
            30 years of bringing characters to life
          </p>

          <div className="mx-auto mt-4 mb-4 h-px w-28 bg-yellow-400/40" />

        </div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto"
        >
          {/* 16:9 wrapper */}
          <div className="relative w-full aspect-video border-[10px] border-yellow-400 rounded-xl overflow-hidden">

            <video
              controls
              preload="metadata"
              className="w-full h-full object-cover bg-black"
              poster="/assets/images/showreel-poster.jpg"
            >
              <source
                src="/assets/videos/showreel.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

          </div>
        </motion.div>

        {/* Caption */}
        <p className="mt-8 text-center text-sm text-gray-500 tracking-wide">
          Feature Films • Streaming Originals • Creature & Character Animation
        </p>

      </div>
    </section>
  );
}
