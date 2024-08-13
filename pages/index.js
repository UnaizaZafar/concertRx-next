import Head from "next/head";
import { Inter } from "next/font/google";
import Intro from "@/components/Intro";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

  </Head>
  return (
    <>
      <Intro/>
    </>
  );
}
