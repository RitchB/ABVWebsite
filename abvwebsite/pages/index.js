import Head from "next/head";
import Hero from "../components/Hero";
import Image from "next/image";
import bg3 from "../public/bg3.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>A Beaver&apos;s Adventure | Home</title>
        <meta name="keywords" content="A Beaver's Adventure" />
      </Head>
      <div>
        <div>
          <Hero />
        </div>
      </div>
    </>
  );
}
