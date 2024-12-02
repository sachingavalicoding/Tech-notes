import { Link } from "react-router-dom";
import data from "../data/data.json";

const Features = () => {
  return (
    <section className="w-full pt-8 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <h2 className="text-center text-4xl font-bold text-gray-200">Features</h2>
      <h3 className="text-center text-base mt-3 text-gray-400">
        Explore all the features we offer
      </h3>

      <div className="flex container flex-wrap px-6 mt-8 items-center justify-center gap-6">
        {data.features.map((feature) => (
          <Link to={`/topics/${feature.id}`} key={feature.id}>
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center gap-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-semibold text-gray-200">
                {feature.name}
              </h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;
