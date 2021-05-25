import React from "react";
import { Button, Icon,Form, Input } from "semantic-ui-react";
import styles from "/styles/EmailForm.module.css";

export default function EmailForm() {
  return (
    <div className={styles.container}>
      <div className={styles.emailInput}>
        {/* <h1 className={styles.prompt}>Enter email address</h1> */}
        <Form>
    <Form.Field required>
      <Input placeholder='Enter your email' />
    </Form.Field>
  </Form>
      </div>
      <div className={styles.submitButton}>
        <Button animated color='green'>
          <Button.Content visible>Get Started</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </div>
    </div>
  );
}
