import Hero from "@/components/Hero";
import TopBar from "@/components/TopBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
   
      <Component {...pageProps} />
      {/* <Hero /> */}
    </>
  );
}
