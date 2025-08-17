import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/interface";


const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
