import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
