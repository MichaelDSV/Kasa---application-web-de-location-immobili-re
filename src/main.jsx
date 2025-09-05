
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Housing from "./pages/Housing.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "housing/:id", element: <Housing /> },
      { path: "*", element: <NotFound /> }, // ← routes inconnues
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
