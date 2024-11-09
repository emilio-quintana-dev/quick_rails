import { _pricing } from "~/_mock";

import MarketingLandingHero from "../landing/marketing-landing-hero";
import MarketingLandingFaqs from "../landing/marketing-landing-faqs";
import PricingMarketing from "../../pricing/marketing/pricing-marketing";
import MarketingLandingServices from "../landing/marketing-landing-services";

// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  return (
    <>
      <MarketingLandingHero />

      <MarketingLandingServices />

      <PricingMarketing plans={_pricing} />

      <MarketingLandingFaqs />
    </>
  );
}
