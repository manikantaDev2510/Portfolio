import React from "react";

export default function Skills(){
  const skillSet = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 95 },
    { name: "Node", value: 85 },
    { name: "Express", value: 85 },
    { name: "MongoDB", value: 90 },
    { name: "SQL", value: 70 },
  ];

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          Motivated and detail-oriented Full Stack Developer passionate about building responsive and user-friendly web applications. Skilled in both front-end and back-end development with a focus on continuous learning and growth in modern web technologies.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            {skillSet.slice(0, 4).map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">
                  <span>{skill.name}</span>{" "}
                  <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            {skillSet.slice(4).map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">
                  <span>{skill.name}</span>{" "}
                  <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};