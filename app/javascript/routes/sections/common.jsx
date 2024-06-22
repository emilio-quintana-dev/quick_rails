import { lazy } from "react";
import { Outlet } from "react-router-dom";

import SimpleLayout from "~/layouts/simple";
import CompactLayout from "~/layouts/compact";

// ----------------------------------------------------------------------

const ComingSoonPage = lazy(() => import("~/pages/coming-soon"));
const MaintenancePage = lazy(() => import("~/pages/maintenance"));
const PaymentPage = lazy(() => import("~/pages/payment"));
const Pricing01Page = lazy(() => import("~/pages/pricing-01"));
const Pricing02Page = lazy(() => import("~/pages/pricing-02"));

// ----------------------------------------------------------------------

export const commonRoutes = [
  {
    element: (
      <SimpleLayout>
        <Outlet />
      </SimpleLayout>
    ),
    children: [
      { path: "payment", element: <PaymentPage /> },
      { path: "pricing-01", element: <Pricing01Page /> },
      { path: "pricing-02", element: <Pricing02Page /> },
    ],
  },
  {
    element: (
      <CompactLayout>
        <Outlet />
      </CompactLayout>
    ),
    children: [
      { path: "coming-soon", element: <ComingSoonPage /> },
      { path: "maintenance", element: <MaintenancePage /> },
    ],
  },
];
