import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2``;

export const Text = styled.p``;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input``;

export const SubmitButton = styled(ReactRouterLink)``;

export const Link = styled(ReactRouterLink)``;
