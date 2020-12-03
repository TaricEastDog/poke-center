import React from "react";
import { Header, Form } from "../components";

export default function Signin() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src="/images/logo.png" to="/" />
      </Header.Frame>

      <Form>
        <Form.Title>Sign In</Form.Title>
        <Form.Base>
          <Form.Input placeholder="Email" />
          <Form.Input placeholder="Password" />
          <Form.SubmitButton>Sign In</Form.SubmitButton>
        </Form.Base>
        <Form.Text>
          New to poke-center? <Form.Link to="/signup">Sign up!</Form.Link>
        </Form.Text>
      </Form>
    </Header>
  );
}
