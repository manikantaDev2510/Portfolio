import React, { useState } from "react";

export default function Resume(){
  const [showModal, setShowModal] = useState(false);

  const openResume = () => setShowModal(true);
  const closeResume = () => setShowModal(false);

  return (
    <section id="resume" className="resume section">
      <div className="container section-title d-flex align-items-center justify-content-between" data-aos="fade-up">
        <h2>Resume</h2>
        <button className="btn btn-primary" onClick={openResume}>
          View Resume
        </button>
      </div>

      <div className="container">
        <p>
          Motivated and enthusiastic aspiring Full Stack Developer with a strong
          passion for learning and building web applications. Proficient in both
          front-end and back-end technologies with hands-on experience in
          real-world projects. Seeking to contribute to a dynamic development
          environment while continuously growing technical and problem-solving
          skills.
        </p>
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "80%",
              height: "90%",
              backgroundColor: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <button
              onClick={closeResume}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                backgroundColor: "#dc3545",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
              title="Close"
            >
              &times;
            </button>
            <iframe
              src="https://drive.google.com/file/d/13XKqsFfVpBcJhST9oA3rhwPVx3rBR7Fl/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              title="Chollangi Veera Manikanta Resume"
            ></iframe>

          </div>
        </div>
      )}

      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Chollangi Veera Manikanta</h4>
              <p>
                <em>
                  Full Stack Developer with a strong foundation in designing and
                  developing responsive web applications. Skilled in React,
                  Node.js, Express.js, SQL, and Git. Known for strong
                  problem-solving skills and team collaboration.
                </em>
              </p>
              <ul>
                <li>Hyderabad, Telangana, India</li>
                <li>+91 63098 59448</li>
                <li>chollangiveeramanikanta3@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B.Tech in Computer Science Engineering</h4>
              <h5>2020 - 2024</h5>
              <p>
                <em>Srinivasa Institute of Engineering and Technology</em>
                <br />
                CGPA: 7.66
              </p>
            </div>

            <h3 className="resume-title">Technical Skills</h3>
            <div className="resume-item">
              <h4>Frontend Technologies:</h4>
              <h5>HTML5, CSS3, JavaScript, React.js</h5>
            </div>
            <div className="resume-item">
              <h4>Backend Technologies:</h4>
              <h5>Node.js, Express.js</h5>
            </div>
            <div className="resume-item">
              <h4>Frameworks & Libraries:</h4>
              <h5>Bootstrap</h5>
            </div>
            <div className="resume-item">
              <h4>Developer Tools:</h4>
              <h5>Git, GitHub, Visual Studio Code</h5>
            </div>
            <div className="resume-item">
              <h4>Database:</h4>
              <h5>SQL</h5>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Projects</h3>

            <div className="resume-item">
              <h4>Trip Guide Webpage</h4>
              <ul>
                <li>
                  Developed a responsive travel planning web app using HTML5,
                  CSS3, Bootstrap, JavaScript, and React.
                </li>
                <li>
                  Implemented dynamic hotel search and ticket booking features
                  with filters for better UX.
                </li>
                <li>
                  Used lazy loading and modular React components for performance
                  optimization.
                </li>
                <li>
                  Ensured cross-browser compatibility and responsive design for
                  all devices.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Meditation Webpage</h4>
              <ul>
                <li>
                  Built a meditation platform with features like breathing
                  exercises, relaxing sounds, and binaural beats.
                </li>
                <li>
                  Designed a soothing and interactive UI using HTML5, CSS3,
                  Bootstrap, and JavaScript.
                </li>
                <li>
                  Focused on user experience and accessibility across multiple
                  devices.
                </li>
              </ul>
            </div>

            <h3 className="resume-title">Soft Skills</h3>
            <div className="resume-item"><h4>Public Speaking</h4></div>
            <div className="resume-item"><h4>Time Management</h4></div>
            <div className="resume-item"><h4>Problem Solving</h4></div>
            <div className="resume-item"><h4>Creativity</h4></div>
            <div className="resume-item"><h4>Flexibility</h4></div>

            <h3 className="resume-title">Online Presence</h3>
            <div className="resume-item">
              <h4>LinkedIn:</h4>
              <a
                href="https://www.linkedin.com/in/manikanta-chollangi"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/manikanta-chollangi
              </a>
            </div>
            <div className="resume-item">
              <h4>GitHub:</h4>
              <a
                href="https://github.com/manikantaDev2510"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/manikantaDev2510
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};