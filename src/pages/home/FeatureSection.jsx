import { FaReact, FaPython, FaJava } from 'react-icons/fa'; // Import necessary icons

const FeatureSection = () => {
  return (
    <div className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-950">

      <h2 className='text-4xl text-white text-center  pb-5'> Features </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* Feature 1 */}
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <div className="flex justify-center items-center mb-4 text-4xl text-pink-600">
            <FaReact />
          </div>
          <h2 className="text-2xl font-semibold text-white">React.js Development</h2>
          <p className="mt-4 text-gray-300">
            Build dynamic and responsive user interfaces with React.js.
          </p>
          <div className="mt-6">
            <a
              className="inline-flex rounded-lg bg-pink-600 px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
              href="/react"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <div className="flex justify-center items-center mb-4 text-4xl text-pink-600">
            <FaPython />
          </div>
          <h2 className="text-2xl font-semibold text-white">Python Programming</h2>
          <p className="mt-4 text-gray-300">
            Learn how to use Python for web development, data analysis, and more.
          </p>
          <div className="mt-6">
            <a
              className="inline-flex rounded-lg bg-pink-600 px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
              href="/react"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <div className="flex justify-center items-center mb-4 text-4xl text-pink-600">
            <FaJava />
          </div>
          <h2 className="text-2xl font-semibold text-white">Java Programming</h2>
          <p className="mt-4 text-gray-300">
            Dive deep into Java programming for building scalable enterprise solutions.
          </p>
          <div className="mt-6">
            <a
              className="inline-flex rounded-lg bg-pink-600 px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
              href="/react"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
