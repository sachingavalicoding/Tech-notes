import Button from "../components/Button";

const HeroSection = () => {
  return (
    <main className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 min-h-screen px-6 py-10 flex flex-col lg:flex-row items-center gap-10">
      {/* Hero Image */}
      <div className="flex justify-center">
        <img
          src="/assets/hero-img.png"
          alt="hero image"
          className="w-full max-w-sm lg:max-w-lg drop-shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 text-white">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Hello ji, How are you?
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
          Welcome to the modern web development platform! Learn HTML, CSS,
          JavaScript, and much more with interactive and easy-to-use resources.
        </p>
        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
          Start your journey today with our notes, programs, and assignments
          designed for every developer.
        </p>
        <div className="flex gap-4">
          <Button
            text="Read More"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 transition-transform transform hover:scale-105"
          />
          <Button
            text="Explore More"
            className="bg-gray-700 hover:bg-gray-800 text-white rounded-lg px-6 py-3 transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
