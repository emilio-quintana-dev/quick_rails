import { lazy } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "~/layouts/main";

// ----------------------------------------------------------------------

const BlogPage = lazy(() => import("~/pages/marketing/posts"));
const PostPage = lazy(() => import("~/pages/marketing/post"));
const AboutPage = lazy(() => import("~/pages/marketing/about"));
const ContactPage = lazy(() => import("~/pages/marketing/contact"));
const LandingPage = lazy(() => import("~/pages/marketing/landing"));
const ServicesPage = lazy(() => import("~/pages/marketing/services"));
const CaseStudyPage = lazy(() => import("~/pages/marketing/case-study"));
const CaseStudiesPage = lazy(() => import("~/pages/marketing/case-studies"));

// ----------------------------------------------------------------------

export const marketingRoutes = [
  {
    path: "marketing",
    children: [
      {
        element: (
          <MainLayout disabledSpacing>
            <LandingPage />
          </MainLayout>
        ),
        index: true,
      },
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          { path: "services", element: <ServicesPage /> },
          { path: "case-studies", element: <CaseStudiesPage /> },
          { path: "case-study", element: <CaseStudyPage /> },
          { path: "posts", element: <BlogPage /> },
          { path: "post", element: <PostPage /> },
          { path: "about", element: <AboutPage /> },
          { path: "contact", element: <ContactPage /> },
        ],
      },
    ],
  },
];
