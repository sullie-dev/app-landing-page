import Navbar from "./components/Navbar";
import Spacer from "./components/Spacer";
import styles from "/styles/Home.module.css";
import EmailForm from "./components/EmailForm";
import Image from "next/image";

const index = () => {
  return (
    <div className="container">
      <div className="leftContainer">
        <Navbar />
        <Spacer height="150px" />
        <div>
          <h1>Every purchase will be made with ease using our app platform</h1>
          <h5>
            We work with gloabl card issuers to help ensure your payments go
            through with out a hitch
          </h5>
          <Spacer height="150px" />
          <EmailForm />
        </div>
      </div>
      <div className={styles.rightImgContainer}>
        <Image src="/app_animation.gif" width={750} height={750} />
      </div>
    </div>
  );
};
export default index;
