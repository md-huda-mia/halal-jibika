import React from "react";
import styles from "./About.module.css";
import { TbSlash } from "react-icons/tb";
const About = () => {
  return (
    <div className={`${styles.about_page}`}>
      <div className={`${styles.about_task_bar}`}>
        <h2 className={`${styles.title_bar}`}>About Us</h2>
        <div className={`${styles.back_bar}`}>
          <li>Home</li>
          <TbSlash className={`${styles.icon_slash}`} />
          <li className={`${styles.about_menu}`}>About</li>
        </div>
      </div>
      {/* ==== */}
      <div className={`${styles.about_detailts}`}>
        <div className={`${styles.about_content}`}>
          <h2 className={`${styles.about_info_title}`}>
            Lorem ipsum dolor sit amet.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius
            fugiat quam architecto impedit alias sunt. Placeat harum a deserunt
            provident nesciunt suscipit ad dolores voluptates odio. Eos, quasi
            eligendi. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque
            distinctio culpa assumenda est reiciendis, voluptatum maiores modi
            aperiam pariatur suscipit! Sed suscipit quia aliquam cupiditate
            vitae accusamus dolor voluptate! Porro commodi illum earum sint ipsa
            consectetur veritatis unde incidunt voluptates? Ducimus laudantium
            ipsa maxime architecto nisi repellat harum vel. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            omnis facilis inventore! Porro suscipit dolor nostrum quaerat neque,
            veniam voluptatibus.
          </p>
        </div>
        <div className="about_img_info">
          <img
            className="aboutImg"
            src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>
      {/* ======= */}
      <div className={`${styles.about_detailts}`}>
        <div className="about_img_info">
          <img
            className="aboutImg"
            src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className={`${styles.about_content}`}>
          <h2 className={`${styles.about_info_title}`}>
            Lorem ipsum dolor sit amet.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius
            fugiat quam architecto impedit alias sunt. Placeat harum a deserunt
            provident nesciunt suscipit ad dolores voluptates odio. Eos, quasi
            eligendi. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque
            distinctio culpa assumenda est reiciendis, voluptatum maiores modi
            aperiam pariatur suscipit! Sed suscipit quia aliquam cupiditate
            vitae accusamus dolor voluptate! Porro commodi illum earum sint ipsa
            consectetur veritatis unde incidunt voluptates? Ducimus laudantium
            ipsa maxime architecto nisi repellat harum vel. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            omnis facilis inventore! Porro suscipit dolor nostrum quaerat neque,
            veniam voluptatibus.
          </p>
        </div>
      </div>
      {/* ==== */}
      <div className={`${styles.about_detailts}`}>
        <div className={`${styles.about_content}`}>
          <h2 className={`${styles.about_info_title}`}>
            Lorem ipsum dolor sit amet.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius
            fugiat quam architecto impedit alias sunt. Placeat harum a deserunt
            provident nesciunt suscipit ad dolores voluptates odio. Eos, quasi
            eligendi. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque
            distinctio culpa assumenda est reiciendis, voluptatum maiores modi
            aperiam pariatur suscipit! Sed suscipit quia aliquam cupiditate
            vitae accusamus dolor voluptate! Porro commodi illum earum sint ipsa
            consectetur veritatis unde incidunt voluptates? Ducimus laudantium
            ipsa maxime architecto nisi repellat harum vel. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            omnis facilis inventore! Porro suscipit dolor nostrum quaerat neque,
            veniam voluptatibus.
          </p>
        </div>
        <div className="about_img_info">
          <img
            className="aboutImg"
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
