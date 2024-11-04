import { lazy } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "~/layouts/main";

// ----------------------------------------------------------------------

const LandingPage = lazy(() => import("~/pages/marketing/landing"));

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
        ],
      },
    ],
  },
];
