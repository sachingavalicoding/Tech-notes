
import { useParams } from "react-router-dom";
import data from "../data/data.json";

const Details = () => {
  const { topicId } = useParams();
  let topic;

  data.features.forEach((feature) => {
    const found = feature.topics.find((t) => t.id === topicId);
    if (found) topic = found;
  });

  return (
    <section className="w-full pt-8 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6">
      <h2 className="text-4xl text-gray-200">{topic.name}</h2>
      <p className="mt-4 text-gray-400">{topic.description}</p>

      <h3 className="text-2xl mt-8 text-gray-200">Programs</h3>
      {topic.programs.length > 0 ? (
        topic.programs.map((program, index) => (
          <pre
            key={index}
            className="bg-gray-800 text-gray-300 p-4 mt-4 rounded"
          >
            <code>{program.code}</code>
          </pre>
        ))
      ) : (
        <p className="text-gray-400 mt-4">No programs available.</p>
      )}

      <h3 className="text-2xl mt-8 text-gray-200">Assignments</h3>
      {topic.assignments.length > 0 ? (
        topic.assignments.map((assignment, index) => (
          <div key={index} className="bg-gray-800 p-4 mt-4 rounded text-gray-300">
            <h4 className="font-semibold">{assignment.title}</h4>
            <p>{assignment.details}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400 mt-4">No assignments available.</p>
      )}
    </section>
  );
};

export default Details;
