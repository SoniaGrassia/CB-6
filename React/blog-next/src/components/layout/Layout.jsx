import Header from "../header";
import Footer from "../footer";
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
