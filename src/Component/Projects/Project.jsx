import React from "react";
import { projectsData } from "./Data";
import WorksItems from "./WorksItems";
import "./project.css";

const Project = () => {
  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My personel Projects</span>

      <div className="work__container grid">
        <div className="work__container container grid">
            {projectsData.map((item) => {
                return <WorksItems item = {item} key={item.id} />
            })}
        </div>
      </div>
    </section>
  );
};

export default Project;
