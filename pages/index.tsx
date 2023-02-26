import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss';
import Head from "next/head";
import Socials from "../components/Socials";
import { FC } from "react";
import { socialType } from "../types";


type socialsProps = {
    socials: [socialType],
}

export const getStaticProps = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/socials/');
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: {socials: data}
    }
  } catch {
    return {
      props: {socials: null},
    }
  }
};

const Home:FC<socialsProps> = ({socials}) => (

  <>
    <Head>
      <title>Home</title>
    </Head>
    <div className={styles.wrapper}>
      <Heading text="Hello world" />
      <Socials socials={socials} />
    </div>
  </>
);

export default Home;