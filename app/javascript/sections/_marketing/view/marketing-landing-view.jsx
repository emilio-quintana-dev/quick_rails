import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
} from "~/_mock";

import MarketingLandingHero from "../landing/marketing-landing-hero";
import MarketingLandingFaqs from "../landing/marketing-landing-faqs";
import MarketingTestimonial from "../testimonial/marketing-testimonial";
import PricingMarketing from "../../pricing/marketing/pricing-marketing";
import MarketingLandingServices from "../landing/marketing-landing-services";
import MarketingLandingCaseStudies from "../landing/marketing-landing-case-studies";
// import MarketingNewsletter from "../marketing-newsletter";
// import MarketingOurClients from "../marketing-our-clients";
// import MarketingLandingAbout from "../landing/marketing-landing-about";
// import MarketingLandingProcess from "../landing/marketing-landing-process";

// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  return (
    <>
      <MarketingLandingHero />

      <MarketingLandingServices />

      <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} />

      <PricingMarketing plans={_pricingMarketing} />

      <MarketingLandingFaqs />

      <MarketingTestimonial testimonials={_testimonials} />
    </>
  );
}
