import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp, faUsers, faHourglass, faPalette, faLaptopCode, faLaptop } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout page="home">
      <div className={styles.main}>
        <section className={styles.home_sec} id="Home">
          <h1 className={styles.heading}>
            <span className={styles.color_primary}>J</span>ohn{" "}
            <span className={styles.color_primary}>A</span>.{" "}
            <span className={styles.color_primary}>J</span>osephsen
          </h1>
          <h2 className={styles.subheading}>An Aspiring Web Developer</h2>
          <div className={styles.social_links}>
            <div className={styles.social_icon}>
              <FontAwesomeIcon className={styles.fai} icon={faInstagram} />
            </div>
            <div className={styles.social_icon}>
              <FontAwesomeIcon className={styles.fai} icon={faFacebook} />
            </div>
            <div className={styles.social_icon}>
              <FontAwesomeIcon className={styles.fai} icon={faTwitter} />
            </div>
            <div className={styles.social_icon}>
              <FontAwesomeIcon className={styles.fai} icon={faLinkedin} />
            </div>
            <div className={styles.social_icon}>
              <FontAwesomeIcon className={styles.fai} icon={faGithub} />
            </div>
          </div>
          <Link href="/#Contact">
            <div className={styles.contact_button}>Contact Me!</div>
          </Link>
        </section>
        <section className={styles.about_sec} id="About">
          <div className={styles.about_content}>
            <h1 className={styles.heading_blue}>About Me</h1>
            <div className={styles.about_blurb}>
              <div className={styles.about_text}>
                I am currently an undergraduate at Montclair State University in
                NJ studying for a BS in Computer Science. I enjoy designing and
                developing websites, mainly via custom code but I do also work
                with Wordpress!
              </div>
              <div className={styles.about_image}>
                <Image
                  src="/images/file0.png"
                  alt="oops."
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div className={styles.about_info}>
              <div className={styles.about_info_col}>
                <FontAwesomeIcon className={styles.about_info_icon} icon={faThumbsUp}/>
                <div className={styles.about_info_text}>
                  <h1>1</h1>
                  <p>Projects Completed</p>
                </div>              
              </div>
              <div className={styles.about_info_col}>
                <FontAwesomeIcon className={styles.about_info_icon} icon={faUsers}/>
                <div className={styles.about_info_text}>
                  <h1>5</h1>
                  <p>Clients Satisfied</p>
                </div>
              </div>
              <div className={styles.about_info_col}>
                <FontAwesomeIcon className={styles.about_info_icon} icon={faHourglass}/>
                <div className={styles.about_info_text}>
                  <h1>3600</h1>
                  <p>Hours Coding</p>
                </div>
              </div>
            </div>
          </div>         
        </section>
        <section className={styles.services_sec} id="Services">
          <div className={styles.services_content}>
            <h1 className={styles.heading_blue}>Services</h1>
            <div className={styles.services_container}>
              <div className={styles.service}>
                <FontAwesomeIcon icon={faPalette} className={styles.service_icon}/>
                <h1 className={styles.subheading_blue}>UI/UX Design</h1>
                <p>I can create a nice UI/UX design prior to developing your site!</p>
              </div>
              <div className={styles.service2}>
                <FontAwesomeIcon icon={faLaptopCode} className={styles.service_icon}/>
                <h1 className={styles.subheading_blue}>Web Development</h1>
                <p>Using my years of knowledge, once prototyped I will design a custom website for you and/or your brand!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
