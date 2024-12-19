// routes/routes.ts
import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainLayout from "../component/Layout/MainLayout";
import OurTeam from "../pages/OurTeam";
import AboutUs from "../pages/About";
import Events from "../pages/Events";
import OurWork from "../pages/OurWork";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/our-work",
        element: <OurWork />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
];

export const links = [
  { to: "/home", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/our-work", label: "Our Work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/our-team", label: "Our Team" },
  { to: "/about-us", label: "About Us" },
];

const router = createBrowserRouter(routes);
export default router;
