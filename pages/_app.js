import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import NProgress from "nprogress";
import "../styles/globals.css";
import "../styles/nprogress.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = (url) => {
      gtag.pageview(url);
      // console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleRouteDone = (url) => {
      gtag.pageview(url);
      NProgress.done();
    };
    const handleRouteError = (url) => {
      console.error(`Load: ${url} Failed`);
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteError);
    // router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          sizes="16x16"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.png`}
          sizes="16x16 32x32 64x64"
          type="image/png"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.svg`}
          sizes="any"
          type="image/svg+xml"
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_ID}`}
        async
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${gtag.GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
