import Navbar from "./components/Navbar";
import Spacer from "./components/Spacer";
import styles from "../styles/Home.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Navbar />
        {/* TODO: add a space here to expand out the content  */}
        <Spacer height="200px" />
        <div>
          <h1>Every purcashe will be made with ease using our app platform</h1>
          <h6>
            We work with gloabl card issuers to help ensure your payments go
            through with out a hitch
          </h6>
        </div>
        {/* TODO: add form for user to input their email for news letter */}
      </div>
    </div>
  );
};
export default index;
