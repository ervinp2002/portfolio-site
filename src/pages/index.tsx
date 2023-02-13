import Head from "next/head";
import { NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-600 text-white h-screen">
      <Head>
        <title>Ervin's Portfolio</title>
      </Head>

      <Header />
      {/*Hero*/}
      <section id="hero">
        <Hero />
      </section>

      {/*About*/}

      {/*Experience*/}

      {/*Skills*/}

      {/*Projects*/}

      {/*Contact Me*/}

    </div>
  );
};

export default Home;
