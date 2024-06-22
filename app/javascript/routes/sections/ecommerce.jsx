import { lazy } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "~/layouts/main";
import AccountLayout from "~/layouts/account";
import EcommerceLayout from "~/layouts/ecommerce";

// ----------------------------------------------------------------------

const CartPage = lazy(() => import("~/pages/e-commerce/cart"));
const ComparePage = lazy(() => import("~/pages/e-commerce/compare"));
const LandingPage = lazy(() => import("~/pages/e-commerce/landing"));
const ProductPage = lazy(() => import("~/pages/e-commerce/product"));
const CheckoutPage = lazy(() => import("~/pages/e-commerce/checkout"));
const ProductsPage = lazy(() => import("~/pages/e-commerce/products"));
const WishlistPage = lazy(() => import("~/pages/e-commerce/wishlist"));
const OrderCompletedPage = lazy(
  () => import("~/pages/e-commerce/order-completed"),
);

const AccountOrdersPage = lazy(
  () => import("~/pages/e-commerce/account/orders"),
);
const AccountPaymentPage = lazy(
  () => import("~/pages/e-commerce/account/payment"),
);
const AccountPersonalPage = lazy(
  () => import("~/pages/e-commerce/account/personal"),
);
const AccountVouchersPage = lazy(
  () => import("~/pages/e-commerce/account/vouchers"),
);
const AccountWishlistPage = lazy(
  () => import("~/pages/e-commerce/account/wishlist"),
);

// ----------------------------------------------------------------------

export const eCommerceRoutes = [
  {
    path: "e-commerce",
    element: (
      <MainLayout>
        <EcommerceLayout>
          <Outlet />
        </EcommerceLayout>
      </MainLayout>
    ),
    children: [
      { element: <LandingPage />, index: true },
      { path: "products", element: <ProductsPage /> },
      { path: "product", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "order-completed", element: <OrderCompletedPage /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "compare", element: <ComparePage /> },
      {
        path: "account",
        element: (
          <AccountLayout>
            <Outlet />
          </AccountLayout>
        ),
        children: [
          { path: "personal", element: <AccountPersonalPage /> },
          { path: "wishlist", element: <AccountWishlistPage /> },
          { path: "vouchers", element: <AccountVouchersPage /> },
          { path: "orders", element: <AccountOrdersPage /> },
          { path: "payment", element: <AccountPaymentPage /> },
        ],
      },
    ],
  },
];
