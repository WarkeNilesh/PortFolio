import React from "react";

const Info = () => {
  return (
    <>
    <div className="about__info grid">
      <div className="about__box">
      <i class='bx bx-award'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Fresher</span>
      </div>
      <div className="about__box">
      <i class='bx bxs-graduation'></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">B.Tech </span>
      </div>
      {/* <div className="about__box">
      <i class='bx bxs-graduation'></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">B.Tech IT</span>
      </div> */}
    </div>
    
    </>
  );
};

export default Info;
