import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "./index.css";

import { router } from "./routes/router.tsx";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { store } from "./redux/store.ts";

// Initialize AOS
AOS.init({
  duration: 600,
  easing: "ease-in-out",
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </Provider>
  </React.StrictMode>
);
