import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { Header, Form } from "../components";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { firebase_ } = useContext(FirebaseContext);

  const signUpHandler = (e) => {
    e.preventDefault();

    firebase_
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <Header>
      <Header.Frame>
        <Header.Logo src="/images/logo.png" to="/" />
      </Header.Frame>

      <Form>
        <Form.Title>Sign In</Form.Title>
        {error ? <Form.Error>{error}</Form.Error> : null}
        <Form.Base onSubmit={signUpHandler}>
          <Form.Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Email"
          />
          <Form.Input
            type="password"
            autocomplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Password"
          />
          <Form.SubmitButton>Sign In</Form.SubmitButton>
        </Form.Base>
        <Form.Text>
          New to poke-center? <Form.Link to="/signup">Sign up!</Form.Link>
        </Form.Text>
      </Form>
    </Header>
  );
}
