import Script from "next/script";
import { useEffect } from "react";
import { ADSENSE_ID, DEV_MODE } from "../lib/constants";

export default function Banner({
  className,
  style,
  layout,
  format,
  client = ADSENSE_ID,
  slot,
  responsive,
  layoutKey,
  auto,
}) {
  useEffect(() => {
    try {
      // let adsbygoogle = window.adsbygoogle || [];
      // adsbygoogle.push({});
      let scripts = document.querySelectorAll(`.ad_`);
      // console.log(`1 scripts:`, scripts);
      for (let i of scripts) {
        // console.log(i);
        i.parentNode.removeChild(i);
      }
      // let ads = scripts.filter((i) =>
      //   i.getAttributeNode("id").value.match(/ad_/g)
      // );
      // console.log(ads);
      // console.log(`2 scripts:`, scripts);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="banner">
      <div className="t">Advertisement</div>
      <div className={className ? className + ` text-center` : `text-center`}>
        <ins
          className={`adsbygoogle`}
          style={
            auto
              ? {
                  display: "inline-block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }
              : style
          }
          data-ad-layout={layout}
          data-ad-format={format ? format : `auto`}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-layout-key={layoutKey}
          data-full-width-responsive={auto ? `true` : responsive}
          {...(DEV_MODE === true || process.env.NODE_ENV === "development"
            ? { "data-adtest": "on" }
            : null)}
        />
        <Script
          id={Math.random()}
          className={`ad_`}
          dangerouslySetInnerHTML={{
            __html: `
              try {
                (adsbygoogle = window.adsbygoogle || []).push({})
              } catch(e) { console.log(e) }
            `,
          }}
        />
      </div>
    </div>
  );
}
