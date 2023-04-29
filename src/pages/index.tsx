import Head from "next/head";
import News from "./components/News";

export default function Home() {
  return (
    <>
      <Head>
        <title>NewsApp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div>
          <News/>
        </div>
      </div>
    </>
  );
}
