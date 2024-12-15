import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'John Doe', feedback: 'This platform is amazing for developers!' },
    { name: 'Jane Smith', feedback: 'A one-stop solution for all my coding needs.' },
    { name: 'Sam Wilson', feedback: 'Modern design and intuitive features!' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="py-16 px-6 bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10">What People Say</h2>
      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-xl text-gray-300 animate-fade-in">
          {testimonials[activeIndex].feedback}
        </p>
        <h4 className="mt-4 text-lg font-bold text-emerald-400">
          - {testimonials[activeIndex].name}
        </h4>
      </div>
    </div>
  );
};

export default TestimonialsSection;
