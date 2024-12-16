import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa"; // Avatar Icon

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      email: "johndoe@email.com",
      feedback: "This platform is amazing for developers!",
      avatar: <FaUserCircle size={50} color="#4CAF50" />,
    },
    {
      name: "Jane Smith",
      email: "janesmith@email.com",
      feedback: "A one-stop solution for all my coding needs.",
      avatar: <FaUserCircle size={50} color="#2196F3" />,
    },
    {
      name: "Sam Wilson",
      email: "samwilson@email.com",
      feedback: "Modern design and intuitive features!",
      avatar: <FaUserCircle size={50} color="#FF5722" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="py-16 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">What People Say</h2>

      <div className="relative max-w-3xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentIndex;
            return (
              isActive && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-center bg-gray-800 p-8 rounded-lg shadow-lg"
                >
                  <div className="flex justify-center mb-6">
                    {testimonial.avatar}
                  </div>
                  <p className="text-xl text-gray-300 mb-4">{testimonial.feedback}</p>
                  <h4 className="text-lg font-bold text-emerald-400">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.email}</p>
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </div>

      {/* Pagination dots for better user experience */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-emerald-400" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
