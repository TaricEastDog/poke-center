import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { Header, Form } from "../components";
import { useHistory } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const signUpHandler = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/welcome");
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <>
      <Header>
        <Header.Logo src="/images/logo.png" to="/" />
      </Header>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error ? <Form.Error>{error}</Form.Error> : null}
        <Form.Base onSubmit={signUpHandler} method="POST">
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
          <Form.SubmitButton type="submit">Sign In</Form.SubmitButton>
        </Form.Base>
        <Form.Text>
          New to poke-center? <Form.Link to="/signup">Sign up!</Form.Link>
        </Form.Text>
      </Form>
    </>
  );
}
