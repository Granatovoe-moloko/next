import Heading from '../components/Heading';
import styles from '../styles/404.module.scss';
import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Error:FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [router])

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading text="404" />
        <Heading text="Что-то отвалилось =\" tag="h2" />
      </div>
    </>
  );
};
  
  export default Error;