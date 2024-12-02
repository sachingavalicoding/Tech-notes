
import { useParams, Link } from "react-router-dom";
import data from "../data/data.json";

const Topic = () => {
  const { featureId } = useParams();
  const feature = data.features.find((item) => item.id === featureId);

  return (
    <section className="w-full pt-8 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <h2 className="text-center text-4xl font-bold text-gray-200">
        Topics for {feature.name}
      </h2>
      <div className="flex flex-col gap-6 mt-8 px-6">
        {feature.topics.map((topic) => (
          <Link to={`/details/${topic.id}`} key={topic.id}>
            <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-lg text-gray-200">{topic.name}</h3>
              <p className="text-sm text-gray-400">{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Topic;
