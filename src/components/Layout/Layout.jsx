import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
