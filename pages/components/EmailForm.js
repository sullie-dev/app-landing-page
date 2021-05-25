import styles from "/styles/EmailForm.module.css";

import React from "react";

export default function EmailForm() {
  return (
    <div className={styles.container}>
      <div className={styles.emailInput}>
        <h1>This is the email form</h1>
      </div>
      <div className={styles.submitButton}>
        <button>Get Started</button>
      </div>
    </div>
  );
}
