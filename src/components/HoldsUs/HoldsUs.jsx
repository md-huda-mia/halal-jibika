import React from "react";
import { SiSimplenote } from "react-icons/si";
import { LiaKhandaSolid } from "react-icons/lia";
import styles from "./HoldsUs.module.css";
const HoldsUs = () => {
  return (
    <div className={`${styles.HoldsUs}`}>
      <div className={`${styles.title}`}>
        <h2>
          The value that Holds us true <br /> and to account{" "}
        </h2>
      </div>
      <div className={`${styles.social_trust}`}>
        <div className={`${styles.single_card_item} ${styles.item_1}`}>
          <div className={`${styles.card_top}`}>
            <img
              className={`${styles.icon}`}
              src="https://i.ibb.co/D7VnnBn/3171661-like-social-icon.png"
              alt=""
            />
            {/* <SiSimplenote className={`${styles.icon}`} /> */}
            <h3>Simplicity</h3>
          </div>
          <div className={`${styles.card_text}`}>
            <p>
              Things beinf made beautiful simple are at the heart of everything
              we do.
            </p>
          </div>
        </div>
        <div className={`${styles.single_card_item} ${styles.item_2}`}>
          <div className={`${styles.card_top}`}>
            <img
              className={`${styles.icon}`}
              src="https://i.ibb.co/j8KLZCh/3259412-media-share-social-icon.png"
              alt=""
            />
            {/* <LiaKhandaSolid className={`${styles.icon}`} /> */}
            <h3>Social Good</h3>
          </div>
          <div className={`${styles.card_text}`}>
            <p>
              We believe in making thinds better for everyone, even if just by a
              little bit!
            </p>
          </div>
        </div>
        <div className={`${styles.single_card_item} ${styles.item_3}`}>
          <div className={`${styles.card_top}`}>
            <img
              className={`${styles.icon}`}
              src="https://i.ibb.co/zQbCD6t/3375687-emoticon-happy-smile-smiley-sun-icon.png"
              alt=""
            />
            {/* <SiSimplenote className={`${styles.icon}`} /> */}
            <h3>Trust</h3>
          </div>
          <div className={`${styles.card_text}`}>
            <p>
              We work on the basis of creating trust which can be nurtured
              through authenticity and transparency.
            </p>
          </div>
        </div>
      </div>
      {/* ========== ====== */}
      <div className={styles.holdsUsBanner}>
        <div className={styles.banner_text}>
          <h1>Ready to switch a career?</h1>
          <h2>Let's get started!</h2>
        </div>
        <div className="banner_btn">
          <button className={styles.btn}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HoldsUs;
