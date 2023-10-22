import styles from "../styles/SubHeaderBar.module.css";

export const SubHeaderBar = ({ title, associate }) => {
  return (
    <div className={styles.subHeaderBar}>
      <div className={styles.subHeaderContainer}>
        <h1>{title}</h1>
        {associate && <button>Add New Pet</button>}
      </div>
    </div>
  );
};

export default SubHeaderBar;
