import React, { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { Header, Form } from "../components";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { firebase_ } = useContext(FirebaseContext);

  const signInHandler = (e) => {
    e.preventDefault();

    firebase_
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("hello from .then sign up!");
        console.log(res);
        res.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => {
        setUsername("");
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
        <Form.Title>Sign Up</Form.Title>
        {error ? <Form.Error>{error}</Form.Error> : null}
        <Form.Base onSubmit={signInHandler} method="POST">
          <Form.Input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            placeholder="Username"
          />
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
          <Form.SubmitButton>Sign Up</Form.SubmitButton>
        </Form.Base>
        <Form.Text>
          Already a user? <Form.Link to="/signin">Sign in!</Form.Link>
        </Form.Text>
      </Form>
    </Header>
  );
}
