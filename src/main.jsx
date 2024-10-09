import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage"
import Root from "./routes/Root.jsx"
import {CssBaseline, ThemeProvider} from "@mui/material";
import { theme } from "./utils/theme.js"
import { firebaseInit } from "./utils/firebaseInit.js"

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

firebaseInit();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      {/*<CssBaseline/>*/}
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
