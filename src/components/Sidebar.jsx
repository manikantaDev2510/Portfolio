import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";

const sections = ["home", "about", "skills", "projects", "resume", "contact"];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for fixed sidebar

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className="header dark-background d-flex flex-column"
      data-aos="fade-right"
    >
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <div className="profile-img">
        <img
          src="assets/img/my-profile-img.jpg"
          alt="Profile"
          className="img-fluid rounded-circle"
        />
      </div>

      <a
        href="#home"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1 className="sitename">Veera Manikanta</h1>
      </a>
      <div className="social-links text-center">
        <a
          href="mailto:chollangiveeramanikanta3@gmail.com"
          className="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope-fill"></i>
        </a>
        <a
          href="https://wa.me/916309859448"
          className="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
        <a
          href="https://github.com/manikantaDev2510"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/manikanta-chollangi"
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          {sections.map((sectionId) => (
            <li key={sectionId}>
              <a
                href={`#${sectionId}`}
                className={activeSection === sectionId ? "active" : ""}
              >
                <i className={`bi bi-${getIcon(sectionId)} navicon`}></i>{" "}
                {capitalize(sectionId)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// Helpers
const getIcon = (id) => {
  const map = {
    home: "house",
    about: "person",
    skills: "tools",
    resume: "file-earmark-text",
    projects: "images",
    contact: "envelope",
  };
  return map[id] || "circle";
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default Sidebar;
