import React from "react";
import { Foother } from "../components/Fother/Foother";
import {Navbar} from '../components/Nav/Nav'

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Foother />
    </>
  );
}
export default Layout;
