import { lazy } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "~/layouts/main";

// ----------------------------------------------------------------------

const AboutPage = lazy(() => import("~/pages/e-learning/about"));
const BlogPage = lazy(() => import("~/pages/e-learning/posts"));
const ContactPage = lazy(() => import("~/pages/e-learning/contact"));
const CoursePage = lazy(() => import("~/pages/e-learning/course"));
const CoursesPage = lazy(() => import("~/pages/e-learning/courses"));
const LandingPage = lazy(() => import("~/pages/e-learning/landing"));
const PostPage = lazy(() => import("~/pages/e-learning/post"));

// ----------------------------------------------------------------------

export const eLearningRoutes = [
  {
    path: "e-learning",
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
          { path: "courses", element: <CoursesPage /> },
          { path: "course", element: <CoursePage /> },
          { path: "posts", element: <BlogPage /> },
          { path: "post", element: <PostPage /> },
          { path: "about", element: <AboutPage /> },
          { path: "contact", element: <ContactPage /> },
        ],
      },
    ],
  },
];
