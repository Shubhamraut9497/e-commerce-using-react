import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <div className="container">
        <div className="row  pt-5 pb-5 ">
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <div className="contact-info">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="text">
                <h3>Email:</h3>
                <p>shubhamraut.raut9497@gmail.com</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="icon">
                <FaPhone className="mobile-icon" />
              </div>
              <div className="text">
                <h3>Phone:</h3>
                <p>+702603, +290437</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="icon">
                <FaPhone className="mobile-icon" />
              </div>
              <div className="text">
                <h3>Mobile:</h3>
                <p>+91 9011516694</p>
              </div>
            </div>
            <h2>Address</h2>
            <div className="d-flex justify-content-between">
              <div className="contact-info">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="text">
                  <p>Suzy Queue</p>
                  <p>4455 Landing Lange, APT 4</p>
                  <p>Louisville, KY 40018-1234</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3 col=lg-12 col-md-12">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-lg-6 col-md-6 col-sm-12">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
