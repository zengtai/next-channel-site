import Script from "next/script";
import { ADSENSE_ID } from "../lib/constants";

export default function AdsScript() {
  return (
    <Script
      id={`gads-init`}
      strategy={`beforeInteractive`}
      async={true}
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
      crossOrigin="anonymous"
    />
  );
}
