import Link from "next/link";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link href="/">Home</Link>
      <Link href="/event">Event</Link>
    </div>
  );
};

export default Header;
