import styles from "./Grid.module.scss";
import GridItem from "./GridItem";
import { data } from "assets/data/data";
const Grid = () => {
  const Links = data.links;
  return (
    <div className={styles.grid}>
      {Links.map((link) => (
        <GridItem key={link._id} item={link} />
      ))}
    </div>
  );
};

export default Grid;
