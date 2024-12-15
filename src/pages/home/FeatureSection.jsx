const FeatureSection = () => {
    const features = [
      { title: 'Fast & Reliable', description: 'Optimized for speed and performance.' },
      { title: 'Modern Design', description: 'Beautiful, responsive, and functional.' },
      { title: 'Easy to Use', description: 'Intuitive interface for everyone.' },
    ];
  
    return (
      <div className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 text-emerald-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeatureSection;
  