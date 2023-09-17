import Header from "../header";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";

export default function BaseTemplate() {
  return (
    <>
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
