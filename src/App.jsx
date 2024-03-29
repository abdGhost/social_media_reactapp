import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import Register from "./register/Register";
import Login from "./login/Login";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import PropTypes from "prop-types";

function App() {
  // const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>

          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children, currentUser = true }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  ProtectedRoute.propTypes = {
    children: PropTypes.node, // Validate children as a renderable node
    currentUser: PropTypes.object, // Validate currentUser as an object (or any appropriate type)
  };

  //Routers
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
