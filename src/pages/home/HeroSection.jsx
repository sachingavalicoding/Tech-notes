const HeroSection = () => {
    return (
      <div className="relative flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <h1 className="text-5xl md:text-7xl font-extrabold animate-fade-in mb-4">
          Welcome to <span className="text-emerald-500">Your Website</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl animate-fade-in delay-200">
          Build, Learn, and Explore with the most innovative platform.
        </p>
        <button className="mt-6 px-6 py-3 bg-emerald-500 text-gray-900 font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
          Get Started
        </button>
        <div className="absolute bottom-10 w-8 h-8 animate-bounce text-gray-100">
          ↓
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  