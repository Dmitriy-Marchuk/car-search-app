import { Suspense } from "react";
import { Outlet } from "react-router";
import AppBar from "./AppBar/AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <div>Footer</div>
    </>
  );
};

export default Layout;
