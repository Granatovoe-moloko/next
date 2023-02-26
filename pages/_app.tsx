import Layout from '../components/Layout';
import '../styles/globals.scss';
import Image from 'next/image';
import youTubeImg from '../public/youtube.png';
import Head from 'next/head';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Image src={youTubeImg} width={500} height={350} alt="preview" placeholder="blur" />
    </Layout>
);


export default App;
