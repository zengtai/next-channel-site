import { useEffect } from "react";
import { ADSENSE_ID, DEV_MODE } from "../lib/constants";

export default function Banner({
  client = ADSENSE_ID,
  slot,
  layout,
  format,
  responsive,
  style,
}) {
  useEffect(() => {
    let adsbygoogle = window.adsbygoogle || [];
    adsbygoogle.push({});
  }, []);

  return (
    <div className="banner">
      <div className="t">Advertisement</div>
      <ins
        className="adsbygoogle"
        style={style ? style : { display: `block` }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout-key={layout}
        data-ad-format={format}
        data-full-width-responsive={responsive}
        {...(DEV_MODE === true ? { "data-adtest": "on" } : null)}
      />
    </div>
  );
}
