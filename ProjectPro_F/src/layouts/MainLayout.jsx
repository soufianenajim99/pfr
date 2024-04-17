import Navbar from "@/components/Navbar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "@/contexts/contextproviderg";

const MainLayout = () => {
  const location = useLocation();
  const loginPaths = ["/login", "/register"];
  const isLoginPath = loginPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const { user, token, setUser, setToken } = useStateContext();
  // if (!token) {
  //   return <Navigate to="/login" />;
  // }
  // console.log(token);
  // console.log(user);
  console.log("main layout");

  return (
    <div>
      {!isLoginPath && <Navbar />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
