/* eslint-disable no-unused-vars */
import { languages } from "../../data/index.js";
import { Card } from "../../components/index.js";
const TopicsLinks = () => {
  console.log(languages);
  return (
    <section className="mt-10">
      <h2 className="text-6xl text-slate-200 font-medium text-center">
        {" "}
        Topics{" "}
      </h2>
      <div className="container mx-auto border-2 grid grid-cols-3">
        {languages.map(({ icon, id, title, link }) => {
          <Card icon={icon} id={id} title={title} link={link} />;
        })}
      </div>
    </section>
  );
};

export default TopicsLinks;
