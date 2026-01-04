import { motion } from "framer-motion";

const experience = [
  {
    role: "Senior VFX Animator",
    company: "FutureWorks",
    location: "Mumbai",
    period: "Sep 2024 – Present",
    points: [
      "Delivered production-ready character animation for high-profile Bollywood feature films.",
      "Led key animation sequences for projects including Kantara and Kesari 2 and Rana Naidu S-2",
      "Maintained studio-level quality benchmarks across complex VFX production pipelines.",
    ],
  },

  {
    role: "Key Animator",
    company: "MPC – VFX",
    location: "Mumbai",
    period: "Jun 2022 – Aug 2023",
    points: [
      "Created hyper-realistic animation for flying creatures and quadrupeds.",
      "Delivered key animation for Netflix series The Witcher: Blood Origin.",
      "Contributed to Amazon Prime’s Poacher and feature film Leo (2023).",
    ],
  },

  {
    role: "Senior Animation Artist",
    company: "yFX Studios Pvt. Ltd.",
    location: "Mumbai",
    period: "Dec 2021 – Jun 2022",
    points: [
      "Delivered high-end VFX character animation for major Bollywood productions.",
      "Contributed to the feature film Pathaan (2023) with production-ready animation shots.",
    ],
  },

  {
    role: "Senior Animation Artist",
    company: "Mikros Animation (Technicolor Creative Studios)",
    location: "Bengaluru",
    period: "Mar 2021 – Sep 2021",
    points: [
      "Delivered CG character animation for animated feature film OZI.",
      "Collaborated closely with global teams to maintain consistency across animation sequences.",
    ],
  },

  {
    role: "Senior Animator",
    company: "DNEG",
    location: "Mumbai",
    period: "Apr 2018 – Feb 2021",
    points: [
      "Delivered feature-quality animation for major international animated films.",
      "Contributed to projects including The Legend of Hanuman, Rock Dog, and 100% Wolf.",
      "Maintained performance realism across stylized and semi-realistic animation styles.",
    ],
  },

  {
    role: "Senior 3D Animator",
    company: "Prime Focus Ltd.",
    location: "Mumbai",
    period: "Jul 2012 – Apr 2018",
    points: [
      "Delivered high-quality 3D animation across feature films and large-scale VFX projects.",
      "Built strong animation fundamentals while contributing to multiple studio pipelines.",
    ],
  },

  {
    role: "Senior Animator",
    company: "Tata Elxsi",
    location: "Mumbai",
    period: "May 2006 – Jul 2012",
    points: [
      "Delivered character animation across television, feature projects like Arjun the Warrior Prince.",
      "Strengthened advanced animation techniques within structured studio pipelines.",
    ],
  },

  {
    role: "2D Key Animator",
    company: "DQ Entertainment",
    location: "Hyderabad",
    period: "Apr 2003 – Apr 2006",
    points: [
      "Delivered high-quality 2D key animation for international animated productions.",
      "Played a key role in maintaining performance consistency across long-format projects.",
    ],
  },

  {
    role: "Senior 2D Animator",
    company: "Silverline Animation Technologies",
    location: "Mumbai",
    period: "Mar 1997 – Apr 2003",
    points: [
      "Built strong animation fundamentals through long-format 2D animation projects.",
      "Contributed to multiple broadcast and feature animation productions.",
    ],
  },
];


export default function Timeline() {
  return (
    <section id="experience" className="bg-white px-6 py-28">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-20">
          Experience
        </h2>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

          {/* VERTICAL LINE */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300" />

          {/* ITEMS */}
          <div className="space-y-20">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-16"
              >
                {/* YELLOW DOT — PERFECTLY ALIGNED */}
                <div className="
                  absolute
                  left-4
                  top-1
                  -translate-x-1/2
                  w-3
                  h-3
                  rounded-full
                  bg-yellow-400
                " />

                {/* CONTENT */}
                <h3 className="text-xl font-semibold">
                  {item.role}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  {item.company} · {item.location}
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  {item.period}
                </p>

                <ul className="space-y-2 text-gray-700">
                  {item.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      — {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
