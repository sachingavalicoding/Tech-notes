import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16 px-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-5xl font-extrabold text-white mb-8">About Us</h2>
        <p className="max-w-4xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
          We aim to provide the best tools and resources for developers. Our mission
          is to help you learn, grow, and build amazing projects with ease. Whether you
          are a beginner or an experienced developer, our platform offers valuable content
          for everyone.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div className="flex justify-center items-center lg:w-[70%] w-full mx-auto">
          <img
            src="/coding-img.png"
            alt="About Us"
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-semibold text-white mb-4">What We Offer</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Our platform provides a variety of learning resources for aspiring developers.
            We focus on tutorials, guides, and best practices for building scalable web applications.
          </p>
          <h3 className="text-3xl font-semibold text-white mb-4">Our Vision</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our vision is to empower developers by making learning fun and accessible. We believe that
            with the right tools, anyone can become a proficient developer and build innovative solutions.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
