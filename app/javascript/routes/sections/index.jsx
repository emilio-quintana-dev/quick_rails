import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import MainLayout from "~/layouts/main";

import { SplashScreen } from "~/components/loading-screen";

import { authRoutes } from "./auth";
import { errorRoutes } from "./error";
import { commonRoutes } from "./common";
import { componentsRoutes } from "./components";

// ----------------------------------------------------------------------

const HomePage = lazy(() => import("~/pages/home"));
const SupportPage = lazy(() => import("~/pages/support"));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          element: (
            <MainLayout disabledSpacing>
              <HomePage />
            </MainLayout>
          ),
          index: true,
        },

        {
          path: "support",
          element: (
            <MainLayout>
              <SupportPage />
            </MainLayout>
          ),
        },

        ...componentsRoutes,

        ...authRoutes,

        ...errorRoutes,

        ...commonRoutes,

        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}
