import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";
import ScrollUp from "../ScrollUp/ScrollUp";

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
      <ScrollUp />
    </div>
  );
};

export default Layout;
