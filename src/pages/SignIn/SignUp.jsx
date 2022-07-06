import React from "react";
import {Background,Shape,Body,Form,Htres,Label,Input,Button,Social, LinksTow } from './styles';

export const SignUp = () => {
  return (
    <Body>
      <Background>
        <Shape ></Shape>
        <Shape ></Shape>
      </Background>
    <Form>
      <Htres>SignUp Here</Htres>
      <Label>Name</Label>
      <Input type="text" placeholder="Name" id="username" />
      <Label>Email</Label>
      <Input type="text" placeholder="Email or Phone" id="username" />
      <Label>Password</Label>
      <Input type="password" placeholder="Password" id="password" />
      <Label>Phone</Label>
      <Input type="password" placeholder="Password" id="password" />
      <Button>Sign Up</Button>
      <Social>
       <LinksTow><input type="checkbox" /> I accept terms and conditions </LinksTow>
      </Social>
      </Form>
    </Body>
  );
};
