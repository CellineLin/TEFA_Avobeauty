import Head from "next/head";
import Nav from "./components/navbar";
import Header from "./components/hero";
import Pricing from "./components/card";
import Footer from "./components/footer";




export default function Home() {
  return (
    <>

      <Head>
        <title>Avobeauty Official</title>
        <meta
          name="description"
          content="One stop Avobeauty product essentials"
        />
      </Head>
      <Nav />
      <Header />
      <Pricing />
      <Footer />


    </>
  );
}
