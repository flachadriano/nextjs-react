import { Fragment } from "react";
import MainHeader from "./main-header";

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({ children } : LayoutProps) {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  )
}