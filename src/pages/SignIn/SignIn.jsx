import React from "react";
import { Link } from "react-router-dom";
import {
  Background,
  LinksTow,
  Shape,
  Body,
  Form,
  Htres,
  Label,
  Input,
  Button,
  Social,
} from "./styles";

export const SignIn = () => {
  return (
    <Body>
      <Background>
        <Shape></Shape>
        <Shape></Shape>
      </Background>
      <Form>
        <Htres>Login Here</Htres>
        <Label>Username</Label>
        <Input type="text" placeholder="Email or Phone" id="username" />
        <Label>Password</Label>
        <Input type="password" placeholder="Password" id="password" />

        <Button>Log In</Button>
        <Social>
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </Social>
        <Link to="/allcanza/signup">
          <LinksTow>Not a user? Sign Up</LinksTow>
        </Link>
        <Link to="/allcanza/recovery">
          <LinksTow>Forgot Password?</LinksTow>
        </Link>
      </Form>
    </Body>
  );
};
