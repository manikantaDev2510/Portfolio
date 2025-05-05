import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const words = ['Full Stack Web Developer', 'MERN Stack Developer', 'Frontend Developer (React.js)', 'Backend Developer (Node.js & MongoDB)'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText(prev => {
        if (!isDeleting) {
          return currentWord.substring(0, prev.length + 1);
        } else {
          return prev.substring(0, prev.length - 1);
        }
      });

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 800);
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section id="hero" className="hero section dark-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
          <h2>Veera Manikanta</h2>
          <p>
            I'm <span className="typed">{displayText}</span>
            <span className="typed-cursor" style={{ fontWeight: 'bold' }}>|</span>
          </p>
      </div>
    </section>
  );
};