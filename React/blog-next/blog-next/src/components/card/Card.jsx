import Link from "next/link";
import styles from "./index.module.scss";

const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <Link href={"/blog/" + data.slug_id} className={styles.link}>
        <h1>{data.city.name}</h1>
      </Link>
    </div>
  );
};
export default Card;
