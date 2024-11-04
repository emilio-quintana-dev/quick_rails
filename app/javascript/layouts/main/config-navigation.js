import { paths } from "~/routes/paths";

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: "1",
    subheader: "Marketing",
    cover: "/assets/images/menu/menu_marketing.jpg",
    items: [
      { title: "Landing", path: paths.marketing.root },
      { title: "Services", path: paths.marketing.services },
      { title: "Case Studies", path: paths.marketing.caseStudies },
      { title: "Case Study", path: paths.marketing.caseStudy },
      { title: "Blog Posts", path: paths.marketing.posts },
      { title: "Blog Post", path: paths.marketing.post },
      { title: "About", path: paths.marketing.about },
      { title: "Contact", path: paths.marketing.contact },
    ],
  },
  {
    order: "4",
    subheader: "Common",
    items: [
      { title: "Login Cover", path: paths.loginCover },
      { title: "Login Illustration", path: paths.loginIllustration },
      { title: "Login Background", path: paths.loginBackground },
      { title: "Register Cover", path: paths.registerCover },
      { title: "Register Illustration", path: paths.registerIllustration },
      { title: "Register Background", path: paths.registerBackground },
      { title: "Forgot Password", path: paths.forgotPassword },
      { title: "Verify Code", path: paths.verify },
      { title: "404 Error", path: paths.page404 },
      { title: "500 Error", path: paths.page500 },
      { title: "Maintenance", path: paths.maintenance },
      { title: "ComingSoon", path: paths.comingsoon },
      { title: "Pricing 01", path: paths.pricing01 },
      { title: "Pricing 02", path: paths.pricing02 },
      { title: "Payment", path: paths.payment },
      { title: "Support", path: paths.support },
    ],
  },
];

export const navConfig = [
];
