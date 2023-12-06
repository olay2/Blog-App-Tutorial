import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./style.scss";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/write", element: <Write /> },
      { path: "/post/:id", element: <Single /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
]);
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
