import { lazy } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "~/layouts/main";

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import("~/pages/components"));
const IconsPage = lazy(() => import("~/pages/components/icons"));
const ImagePage = lazy(() => import("~/pages/components/image"));
const LabelPage = lazy(() => import("~/pages/components/label"));
const AnimatePage = lazy(() => import("~/pages/components/animate"));
const ScrollbarPage = lazy(() => import("~/pages/components/scroll"));
const LightboxPage = lazy(() => import("~/pages/components/lightbox"));
const MarkdownPage = lazy(() => import("~/pages/components/markdown"));
const CarouselsPage = lazy(() => import("~/pages/components/carousel"));
const MegaMenuPage = lazy(() => import("~/pages/components/mega-menu"));
const TextMaxLinePage = lazy(() => import("~/pages/components/text-max-line"));
const NavigationBarPage = lazy(
  () => import("~/pages/components/navigation-bar"),
);
const FormValidationPage = lazy(
  () => import("~/pages/components/form-validation"),
);
const ScrollProgressPage = lazy(
  () => import("~/pages/components/scroll-progress"),
);

// ----------------------------------------------------------------------

export const componentsRoutes = [
  {
    path: "components",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: "animate", element: <AnimatePage /> },
      { path: "carousel", element: <CarouselsPage /> },
      { path: "form-validation", element: <FormValidationPage /> },
      { path: "icons", element: <IconsPage /> },
      { path: "image", element: <ImagePage /> },
      { path: "label", element: <LabelPage /> },
      { path: "lightbox", element: <LightboxPage /> },
      { path: "markdown", element: <MarkdownPage /> },
      { path: "mega-menu", element: <MegaMenuPage /> },
      { path: "navigation-bar", element: <NavigationBarPage /> },
      { path: "scroll", element: <ScrollbarPage /> },
      { path: "scroll-progress", element: <ScrollProgressPage /> },
      { path: "text-max-line", element: <TextMaxLinePage /> },
    ],
  },
];
