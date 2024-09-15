import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main/Main";
import PageTitle from "../components/PageTitle/PageTitle";
import Home from "../pages/Home/Home";
import NotFound from "./../components/NotFound/NotFound";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import CartInfo from "../pages/Cart/CartInfo";
import Invoice from "../pages/Invoice/Invoice";
import SignIn from "./../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import ForgotPassword from "./../components/Auth/ForgotPassword";
import ResetPassword from "./../components/Auth/ResetPassword";
import RequestPasswordReset from "../components/Auth/RequestPasswordReset";
import VerifyEmail from "../components/Auth/VerifyEmail";
import Payment from "../pages/payment/Payment";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/Aboutus/AboutUs";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

import Terms from "../components/Terms/Terms";
import Refund from "../components/Refund/Refund";

import PaymentCancel from "../pages/PaymentCancel/PaymentCancel";
import LoaderRoute from "./LoaderRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <>
            <PageTitle title=" Home | Patranee " />
            <Home />
          </>
        ),
      },
      {
        path: "/shop",
        element: (
          <>
            <PageTitle title=" Shop | Patranee " />
            <Shop />
          </>
        ),
      },
      {
        path: "/shop/:brand/:category/:subcategory?/:title",
        element: (
          <>
            <PageTitle title=" Shop | Patranee " />
            <ProductDetails />
          </>
        ),
      },
      {
        path: "/cart",
        element: (
          <>
            <PageTitle title=" Cart | Patranee " />
            <Cart />
          </>
        ),
      },
      {
        path: "/check-out",
        element: (
          <>
            <PageTitle title=" Check-out | Patranee " />
            <CartInfo />
          </>
        ),
      },
      {
        path: "/payment/:id",
        element: (
          <>
            <PageTitle title=" Payment | Patranee " />
            <Payment></Payment>
          </>
        ),
      },
      {
        path: "/payment/success/:id",
        element: (
          <>
            <PageTitle title=" Invoice | Patranee " />

            <Invoice />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <PageTitle title=" SignIn | Patranee " />
            <SignIn />
          </>
        ),
      },
      {
        path: "/login/:token",
        element: (
          <>
            <PageTitle title=" SignIn | Patranee " />
            <ForgotPassword></ForgotPassword>
          </>
        ),
      },
      {
        path: "/sign-up",
        element: (
          <>
            <PageTitle title=" SignUp | Patranee " />
            <SignUp />
          </>
        ),
      },
      {
        path: "/forget-pass",
        element: (
          <>
            <PageTitle title=" Forget Password | Patranee " />
            <ForgotPassword />
          </>
        ),
      },
      {
        path: "/reset-password/:token",
        element: (
          <>
            <PageTitle title=" Reset Password | Patranee " />
            <ResetPassword />
          </>
        ),
      },
      {
        path: "/request-reset-password",
        element: <RequestPasswordReset />,
      },
      {
        path: "/verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "/contact-us",
        element: (
          <>
            <PageTitle title=" Contact Us | Patranee " />
            <ContactUs />,
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <PageTitle title=" About Us | Patranee " />
            <AboutUs />
          </>
        ),
      },
      {
        path: "/payment/fail/:tran_id",
        element: <PaymentCancel></PaymentCancel>,
      },
      {
        path: "/profile",
        element: (
          <>
            <PageTitle title="User Dashboard | Patranee " />
            <PrivateRoute>
              {" "}
              <Dashboard />
            </PrivateRoute>
          </>
        ),
      },
      {
        path: "/terms",
        element: (
          <>
            <PageTitle title="Terms and Conditions | Patranee " /> <Terms />
          </>
        ),
      },
      {
        path: "/refund-policy",
        element: (
          <>
            <PageTitle title="Retun and Refund Policy| Patranee " /> <Refund />
          </>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
