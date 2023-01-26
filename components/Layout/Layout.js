import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="font-mono">{children}</main>
    </>
  );
};

export default Layout;
