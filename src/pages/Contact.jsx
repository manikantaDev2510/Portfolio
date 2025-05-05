import React from 'react';

export default function Contact(){
  return (
    <section id="contact" className="contact section py-5">
      <div className="container">
        <div className="section-title mb-5" data-aos="fade-up">
          <h2>Contact</h2>
        </div>

        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form p-4 shadow rounded bg-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-3">

                <div className="col-md-6">
                  <label htmlFor="name-field" className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="form-label">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email-field"
                    className="form-control"
                    placeholder="you@gmail.com"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject-field"
                    className="form-control"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="form-label">Message</label>
                  <textarea
                    name="message"
                    id="message-field"
                    rows="6"
                    className="form-control"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-primary mt-3">Send Message</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};