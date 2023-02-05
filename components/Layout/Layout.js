import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation>
        <main className="text-mainText font-lato">{children}</main>
      </Navigation>
    </>
  );
};

export default Layout;
