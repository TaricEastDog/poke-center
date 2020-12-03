import React from "react";
import {
  Container,
  Frame,
  Title,
  Text,
  Base,
  Input,
  SubmitButton,
  Link,
} from "./styles/user-form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Frame = function FormFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.SubmitButton = function FormSubmitButton({ children, to, ...restProps }) {
  return (
    <SubmitButton to={to} {...restProps}>
      {children}
    </SubmitButton>
  );
};

Form.Link = function FormLink({ children, to, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};
