import { lazy } from "react";

// ----------------------------------------------------------------------

const Page404 = lazy(() => import("~/pages/404"));
const Page500 = lazy(() => import("~/pages/500"));

// ----------------------------------------------------------------------

export const errorRoutes = [
  { path: "error", element: <Page500 /> },
  { path: "404", element: <Page404 /> },
];
