import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [selectedItem, setSelectedItem] = useState(null);

  const projectItems = [
    {
      category: 'Web App',
      img: 'e commerce.png',
      title: 'E-Commerce Platform',
      client: 'Self Project',
      description: 'A fully functional and secure e-commerce web application built using the MERN stack. Features include JWT-based authentication with role-based access (User/Admin), protected routes, email verification with OTP, and password recovery via Resend API. Integrated Stripe for online payments, Cloudinary for image uploads, and implemented key modules like product catalog, shopping cart, order history, and address management. The UI is responsive and styled with Tailwind CSS, while RESTful APIs were designed using Express.js and tested with Postman.',
      link: 'https://needyou-orpin.vercel.app',
      tech: 'React, Node, Express, MongoDB, Redux Toolkit, Tailwind CSS',
    },
    {
      category: 'Web App',
      img: 'its my trip.png',
      title: "It's My Trip",
      client: 'Self Project',
      description: 'Developed a responsive travel planning web app using HTML5, CSS3, Bootstrap, JavaScript, and React. Implemented dynamic hotel search and ticket booking features with filters for better UX. Used lazy loading and modular React components for performance optimization. Ensured cross-browser compatibility and responsive design for all devices.',
      link: 'https://its-my-trip.vercel.app',
      tech: 'React, JavaScript',
    },
    {
      category: 'Web App',
      img: 'meditation.png',
      title: 'Meditation App',
      client: 'Self Project',
      description: 'Built a meditation platform with features like breathing exercises, relaxing sounds, and binaural beats. Designed a soothing and interactive UI using HTML5, CSS3, Bootstrap, and JavaScript. Focused on user experience and accessibility across multiple devices.',
      link: 'https://manikantadev2510.github.io/MeditationApp',
      tech: 'HTML, CSS, JavaScript',
    },
  ];

  const openDetails = (item) => setSelectedItem(item);
  const closeDetails = () => setSelectedItem(null);

  return (
    <>
      <section id="portfolio" className="portfolio section light-background">
        <div className="container section-title">
          <h2>Projects</h2>
          <p>Explore our awesome work</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {projectItems.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-content h-100">
                  <img
                    src={`assets/img/portfolio/${item.img}`}
                    className="img-fluid"
                    alt={item.title}
                  />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        openDetails(item);
                      }}
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="overlay">
          <div className="detail-panel">
            <button className="close-btn" onClick={closeDetails}>×</button>
            <div className="detail-content">
              <div className="detail-image">
                <img
                  src={`assets/img/portfolio/${selectedItem.img}`}
                  alt={selectedItem.title}
                />
              </div>
              <div className="detail-info">
                <h3>{selectedItem.title}</h3>
                <p><strong>Client:</strong> {selectedItem.client}</p>
                <p><strong>Tech Stack:</strong> {selectedItem.tech || 'N/A'}</p>
                <p>{selectedItem.description}</p>
                {selectedItem.link && (
                  <p>
                    <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                      Visit Project
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};