import { AppProps } from "next/app";
import "../styles/globals.css";
import "primereact/resources/primereact.min.css";
import "../styles/Theme.css";
import "primeicons/primeicons.css";
import PrimeReact from "primereact/api";
import dynamic from "next/dynamic";
import { Suspense } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const Navbar = dynamic(() => import("../components/navbar/navbar"), {
    suspense: true,
  });
  const Footer = dynamic(() => import("../components/footer/Footer"), {
    suspense: true,
  });
  PrimeReact.ripple = true;
  // 2. Use at the root of your app
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <Component {...pageProps} />
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default MyApp;
