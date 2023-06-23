/** @format */

import React, { PropsWithChildren } from "react";
import Navbar from "@common/nav";
import Foot from "@common/foot";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Foot />
    </>
  );
};

export default Layout;
