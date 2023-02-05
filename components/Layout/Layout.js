import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation>
        <main className="font-sans">{children}</main>
      </Navigation>
    </>
  );
};

export default Layout;
