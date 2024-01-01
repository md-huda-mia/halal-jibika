import React from "react";
import styles from "./Contact.module.css";
import { IoIosSend } from "react-icons/io";
import { TbSlash } from "react-icons/tb";
const Contact = () => {
  return (
    <>
      <div className={`${styles.about_task_bar}`}>
        <h2 className={`${styles.title_bar}`}>Contact Us</h2>
        <div className={`${styles.back_bar}`}>
          <li>Home</li>
          <TbSlash className={`${styles.icon_slash}`} />
          <li className={`${styles.about_menu}`}>Contact</li>
        </div>
      </div>
      <div className={`${styles.contact_page}`}>
        <div className={`${styles.contact_text_area}`}>
          <span className={`${styles.into}`}>Who we are</span>
          <div className={`${styles.contact_title}`}>
            <h2 className={`${styles.title}`}>
              We care about <br /> Customer Services{" "}
            </h2>
            <p className={`${styles.text}`}>
              want to chat? We'd love to hear from you! Get in <br /> touch with
              our Customer Success team to inquire <br /> about speaking events,
              advertising rates, or just <br /> say hello.
            </p>
          </div>
          <button className={`${styles.email}`}>Email Support</button>
        </div>
        <div className={`${styles.contact_form}`}>
          <div className={`${styles.form_arrea}`}>
            <h3 className={`${styles.form_title}`}>Get In Touch</h3>
            <form action="" className={`${styles.form}`}>
              <div className={`${styles.inputField} ${styles.name_email}`}>
                <input
                  className={`${styles.input}`}
                  type="text"
                  placeholder="Name"
                />
                <input
                  className={`${styles.input}`}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className={`${styles.inputField}`}>
                <input
                  className={`${styles.input}`}
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className={`${styles.inputField}`}>
                <textarea
                  className={`${styles.input}`}
                  name=""
                  placeholder="Message"
                  id=""
                  cols="10"
                  rows="5"></textarea>
              </div>
              <button className={`${styles.email_send}`}>
                Send Message <IoIosSend />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="location">
        <div className="google-map-code">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930095498!2d90.25487217580321!3d23.781067239709326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1704017660560!5m2!1sen!2sbd"
            width="100%"
            height="350"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
