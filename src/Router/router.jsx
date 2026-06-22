// import Main from '../Main/Main';
import Home1 from "../Pages/Home1/Home1";
// import Home2 from '../Pages/Home2/Home2';
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import AboutInner from "../Pages/InnerPage/AboutInner/AboutInner";
import ProjectDetails from "../Pages/InnerPage/ProjectDetails/ProjectDetails";
import ServiceInner from "../Pages/InnerPage/ServiceInner/ServiceInner";
import BlogDetails from "../Pages/InnerPage/BlogDetails/BlogDetails";
import ServiceDetails from "../Pages/InnerPage/ServiceDetails/ServiceDetails";
import ServiceDetails2 from "../Pages/InnerPage/ServiceDetails/ServiceDetails2";
import ServiceDetails3 from "../Pages/InnerPage/ServiceDetails/ServiceDetails3";
import ServiceDetails4 from "../Pages/InnerPage/ServiceDetails/ServiceDetails4";
import ServiceDetails5 from "../Pages/InnerPage/ServiceDetails/ServiceDetails5";
import BlogGrid from "../Pages/InnerPage/BlogGrid/BlogGrid";
import ContactInner from "../Pages/InnerPage/ContactInner/ContactInner";
import TeamInner from "../Pages/InnerPage/TeamInner/TeamInner";
import AppointmentInner from "../Pages/InnerPage/Appointment/AppointmentInner";
import ProjectInner from "../Pages/InnerPage/ProjectInner/ProjectInner";
import TestimonialInner from "../Pages/InnerPage/TestimonialInner/TestimonialInner";
import FaqInner from "../Pages/InnerPage/Faq/FaqInner";
import TeamDetails from "../Pages/InnerPage/TeamDetails/TeamDetails";
import BlogLeftSidebar from "../Pages/InnerPage/BlogLeftSidebar/BlogLeftSidebar";
import BlogRightSidebar from "../Pages/InnerPage/BlogRightSidebar/BlogRightSidebar";
import { createBrowserRouter } from "react-router-dom";
import PriceListInner from "../Pages/InnerPage/PriceListInner/PriceListInner";
import Main from "../Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "", element: <Home1 /> },
      { path: "gioi-thieu", element: <AboutInner /> },
      { path: "project_details", element: <ProjectDetails /> },
      { path: "service", element: <ServiceInner /> },
      { path: "service_details", element: <ServiceDetails /> },
      { path: "service_details2", element: <ServiceDetails2 /> },
      { path: "service_details3", element: <ServiceDetails3 /> },
      { path: "service_details4", element: <ServiceDetails4 /> },
      { path: "service_details5", element: <ServiceDetails5 /> },
      { path: "project", element: <ProjectInner /> },
      { path: "testimonial", element: <TestimonialInner /> },
      { path: "bac-si", element: <TeamInner /> },
      { path: "team_details", element: <TeamDetails /> },
      { path: "blog_grid", element: <BlogGrid /> },
      { path: "blog_left_sidebar", element: <BlogLeftSidebar /> },
      { path: "blog_right_sidebar", element: <BlogRightSidebar /> },
      { path: "blog_details", element: <BlogDetails /> },
      { path: "dat-lich-kham", element: <AppointmentInner /> },
      { path: "faqs", element: <FaqInner /> },
      { path: "lien-he", element: <ContactInner /> },
      { path: "bang-gia", element: <PriceListInner /> },
    ],
  },
  { path: "*", errorElement: <ErrorPage /> },
]);

export default router;
