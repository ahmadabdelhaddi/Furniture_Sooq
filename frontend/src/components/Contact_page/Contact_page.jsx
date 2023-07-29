import React from "react";

import "./style.css";

function Contact_page() {
  return (
    <div className="containerr">
      <div className="contact">
        <div className="text">
          <span>CONTACT</span>
          <h1>Let’s stay connected</h1>
          <p>
            Call us, use our live chat widget or email and we'll get back to you
            as soon as possible!
          </p>
        </div>
        <div className="btns">
          <button>Send Message</button>
          <button style={{ backgroundColor: "#f7fafe", color: "#f7fafe" }}>
            About me
          </button>
        </div>
      </div>
      <div className="icons">
        <div className="section">
          <div className="icon-info">
            <img src="email.png" alt="" />
            <h3>Email</h3>
            <p>Ahmad.Abdelhaddi@gmail.com</p>
          </div>
          <div className="icon-info">
            <img src="phone.png" alt="" />
            <h3>Phone</h3>
            <p>+962 7 9661 8504</p>
          </div>
        </div>
        <div className="section2">
          <div className="icon-info">
            <img src="Location.png" alt="" />
            <h3>Location</h3>
            <p>Jordn, Amman</p>
          </div>
          <div className="icon-info">
            <img src="socials.png" alt="" />
            <h3>Socials</h3>
            <p className="imgs">
              <a href="">
                <img src="Facebook.png" width="25px" />{" "}
              </a>
              <a href="">
                <img src="Twitter.png" width="25px" />{" "}
              </a>
              <a href="">
                <img src="Instagram.png" width="25px" />{" "}
              </a>
              <a href="">
                <img src="LinkedIn.png" width="25px" />{" "}
              </a>
            </p>
          </div>
        </div>
        <div className="form">
          <label>Message </label>
          <input type="text" placeholder="Your Message .." />
          <label>Email </label>
          <input type="email" className="msg" placeholder="Ab@gmail.com" />
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact_page;
