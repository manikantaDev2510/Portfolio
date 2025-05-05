import React from "react";

export default function About(){
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="assets/img/my-profile-img.jpg" className="img-fluid" alt="Profile" />
          </div>
          <div className="col-lg-8 content">
            <h2>Full Stack Web Developer (MERN)</h2>
            <p className=" py-3">
              Passionate about building responsive and user-centric web applications, with a foundation in both frontend and backend development using JavaScript, React, Node.js, and Express.            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Name:</strong> <span>Chollangi Veera Manikanta</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong> <span>+91 63098 59448</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong> <span>chollangiveeramanikanta3@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>Hyderabad, Telangana, India</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong> <span>B.Tech (CSE), 2020-2024</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>College:</strong> <span>Srinivasa Institute of Engineering and Technology</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>CGPA:</strong> <span>7.66</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
            Motivated and enthusiastic aspiring Full Stack Developer with a strong passion for learning and building web applications. Eager to apply knowledge in real-world projects and continuously improve problem-solving abilities. Dedicated to expanding expertise in modern web development frameworks and best practices.        </p>
            </div>
        </div>
      </div>
    </section>
  );
};
