import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Home: NextPage = () => {
  return (
    <Layout page="home">
        <div className={styles.main}>
          <section className={styles.home_sec} id="Home">
            <h1 className={styles.heading}>John A Josephsen</h1>
            <h2 className={styles.subheading}>An Upcoming Web Developer</h2>
            <div className={styles.social_links}>
              <div className={styles.social_icon}>
                <FontAwesomeIcon className={styles.fai} icon={faInstagram}/>
              </div>
              <div className={styles.social_icon}>
                <FontAwesomeIcon className={styles.fai} icon={faFacebook}/>
              </div>
              <div className={styles.social_icon}>
                <FontAwesomeIcon className={styles.fai} icon={faTwitter}/>
              </div>
              <div className={styles.social_icon}>
                <FontAwesomeIcon className={styles.fai} icon={faLinkedin}/>
              </div>
              <div className={styles.social_icon}>
                <FontAwesomeIcon className={styles.fai} icon={faGithub}/>
              </div>
            </div>
          </section>
          <section className={styles.about_sec} id="About">
            <h1 className={styles.heading}>About Me</h1>
            <div className={styles.about_content}>
              <div className={styles.about_text}>I am currently an undergraduate at Montclair State University in NJ studying for a BA in Computer Science. I enjoy designing and developing websites, both via Wordpress and/or custom code.</div>
              <div className={styles.about_image}>
                <Image src="/images/file0.png" alt="oops." width={400} height={300}/>

              </div>
            </div>
          </section>         
          </div>          
    </Layout> 
  )
}

export default Home
