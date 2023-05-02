import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import "./App.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/SEC-2023-Exercise/React-js/Kerja-It/",
      element: <Home />,
    },
    { path: "/job/:id", element: <Job /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
