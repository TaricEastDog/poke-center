import React from "react";
import { Header, Form } from "../components";

export default function Signup() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src="/images/logo.png" to="/" />
      </Header.Frame>

      <Form>
        <Form.Title>Sign Up</Form.Title>
        <Form.Base>
          <Form.Input placeholder="Username" />
          <Form.Input placeholder="Email" />
          <Form.Input placeholder="Password" />
          <Form.SubmitButton>Sign Up</Form.SubmitButton>
        </Form.Base>
        <Form.Text>
          Already a user? <Form.Link to="/signin">Sign in!</Form.Link>
        </Form.Text>
      </Form>
    </Header>
  );
}
