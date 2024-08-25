import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage"
import IntroPage from "./routes/IntroPage.jsx"
import Root from "./routes/root.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    // loader: ,
    // children: [
    //   {
    //     path: "//",
    //     element: <IntroPage />,
    //   },
    // ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
