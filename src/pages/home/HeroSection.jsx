import { motion } from "framer-motion";
import AnimatedButton from "../../Components/AnimatedButton";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center text-center min-h-screen bg-black px-6">
      {/* Glassmorphic Animated Container */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Image with Animation */}
      <motion.img
        src="/coding-img.png"
        alt="Hero Image"
        className="z-10 w-80 md:w-96 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Text Section */}
      <motion.div className="z-10">
        {/* Heading with Hover Effect */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Experience the Future with <br />
          <motion.span
            className="text-gradient bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
            whileHover={{
              backgroundPosition: "200% center",
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            Endless Possibilities
          </motion.span>
        </motion.h1>

        {/* Paragraph with Subtle Glow on Hover */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ color: "#ffffff", textShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Join us in redefining innovation. Leverage cutting-edge technology to
          unlock your creativity and achieve your dreams.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col justify-center sm:flex-row items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <AnimatedButton text="Get Started" link={"/react"}  />
         <Link to={"https://developer.mozilla.org/en-US/docs/Learn"}> <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all"
          >
            Learn More
          </motion.button></Link>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 flex justify-center items-center w-10 h-10 rounded-full border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
