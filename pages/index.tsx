import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Home: NextPage = () => {
  return (
    <Layout page="home">
        <div className={styles.main}>
          <h1>John A Josephsen</h1>
          <h2>An Upcoming Web Developer</h2>
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
          </div>
          
        </div>
    </Layout> 
  )
}

export default Home
