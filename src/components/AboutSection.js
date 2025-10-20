"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full bg-white text-black font-semibold py-32 px-6 md:px-16 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold text-green-800 mb-10 text-center"
          variants={item}
        >
          About Us
        </motion.h1>

        {/* Description */}
        <motion.div
          className="text-gray-900 italic text-lg md:text-xl leading-relaxed mb-20 text-justify space-y-4"
          variants={item}
        >
          <p>
            Newark Central Masjid is part of the Alaaka Association of New Jersey,
            serving our community through worship, education, and outreach. Alaaka
            Association of New Jersey is a non-profit (501 c) community-based
            organization formed in 2003 and headquartered in Newark, New Jersey.
          </p>

          <p>
            We have observed a steady growth in the mostly West African Muslim
            migrants in the Newark metro, who, among other challenges, faced
            assimilation problems. Alaaka has been providing support, helping
            members navigate cultural and social integration.
          </p>

          <p>
            With a significant presence of African Americans whose insight and
            assistance has immensely helped in the socio-cultural education of the
            community, Alaaka is fulfilling the dreams of the founding members. The
            organization provides religious and cultural education, community-based
            services, and promotes inter-religious dialogue among its core objectives.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="bg-green-50 border border-green-200 rounded-2xl shadow-md p-10 max-w-3xl flex flex-col gap-4"
          variants={container}
        >
          <motion.h2
            className="text-3xl font-semibold text-green-700 mb-6 text-center"
            variants={item}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-gray-800 italic text-lg md:text-xl text-center leading-relaxed"
            variants={item}
          >
            To empower the Newark Muslim community through worship, education, and
            outreach programs. We aim to nurture spiritual growth, foster cultural
            understanding, and develop the intellectual, moral, and social capacity of
            our members, ensuring a positive impact on both individuals and the wider
            community.
          </motion.p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="bg-green-50 border border-green-200 rounded-2xl shadow-md p-10 max-w-3xl flex flex-col gap-4"
          variants={container}
        >
          <motion.h2
            className="text-3xl font-semibold text-green-700 mb-6 text-center"
            variants={item}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-gray-800 italic text-lg md:text-xl text-center leading-relaxed"
            variants={item}
          >
            To create a community that will serve as a model for peaceful coexistence
            among religions. We also hope to promote the intellectual, moral, and
            vocational capacity of our members with the aim of transforming the lives of
            our members and the community at large.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
