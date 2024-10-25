import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";
import ScrollUp from "../ScrollUp/ScrollUp";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={css.layout}>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ScrollUp />
      <Toaster />
    </div>
  );
};

export default Layout;
