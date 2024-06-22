import { lazy } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "~/layouts/main";

// ----------------------------------------------------------------------

const BlogPage = lazy(() => import("~/pages/travel/posts"));
const PostPage = lazy(() => import("~/pages/travel/post"));
const TourPage = lazy(() => import("~/pages/travel/tour"));
const AboutPage = lazy(() => import("~/pages/travel/about"));
const ToursPage = lazy(() => import("~/pages/travel/tours"));
const ContactPage = lazy(() => import("~/pages/travel/contact"));
const LandingPage = lazy(() => import("~/pages/travel/landing"));
const CheckoutPage = lazy(() => import("~/pages/travel/checkout"));
const OrderCompletedPage = lazy(() => import("~/pages/travel/order-completed"));

// ----------------------------------------------------------------------

export const travelRoutes = [
  {
    path: "travel",
    children: [
      {
        element: (
          <MainLayout headerOnDark>
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
          { path: "tours", element: <ToursPage /> },
          { path: "tour", element: <TourPage /> },
          { path: "checkout", element: <CheckoutPage /> },
          { path: "order-completed", element: <OrderCompletedPage /> },
          { path: "posts", element: <BlogPage /> },
          { path: "post", element: <PostPage /> },
          { path: "about", element: <AboutPage /> },
          { path: "contact", element: <ContactPage /> },
        ],
      },
    ],
  },
];
