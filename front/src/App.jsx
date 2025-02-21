//react
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//page
import LoginPage from "./pages/login.jsx";
import DashboardPage from "./pages/dahsboard.jsx";
import AdminPage from "./pages/admin.jsx";
import ProductPage from "./pages/product.jsx";
import About from "./pages/about.jsx";
import UpdateProductPage from "./pages/updateProduct.jsx";
import RegisterPage from "./pages/register.jsx";
import CartPage from "./pages/cart.jsx";

// import { AuthContextProvider } from "./components/Services/AuthContex.jsx";
import {ThemeProvider}  from "./hooks/theme.ctx.jsx"

import NotFound from "./components/notFound/NotFound";
import SysAdmin from "./pages/sysAdmin.jsx";



const App = () => {

  const router = createBrowserRouter([
    {
      element: <LoginPage />,
      path: "/",
    },
    {
      element: <RegisterPage />,
      path: "/register",
    },
    {
      element: <DashboardPage />,
      path: "/dashboard",
    },
    {
      element: <AdminPage />,
      path: "/admin",
    },
    {
      element: <SysAdmin />,
      path: "/sysadmin",
    },
    {
      element: <UpdateProductPage />,
      path: "/updateProduct",
    },
    {
      element: <ProductPage />,
      path:"/product"
    },
    {
      element: <CartPage />,
      path:"/cart"
    },
    {
      element: <About />,
      path:"/about"
    },
    {
      path: "*", element: <NotFound />
    }
  ]);
  return (
    <div className="container">
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
};
export default App;
