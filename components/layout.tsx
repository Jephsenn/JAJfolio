import Navbar from './navbar'
import Head from 'next/head'
import styles from "../styles/Layout.module.css";

//import Footer from './footer'

type Props = {
    children: JSX.Element[] | JSX.Element;
    page: string;
};

export default function Layout( props: Props ) {
  return (
    <div className={styles.main_layout}>
      <Head>
        <title>JAJ-Folio</title>
        <meta name="A portfolio created and designed by John A Josephsen" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar page={props.page} />
      {props.children}
    </div>
  )
}