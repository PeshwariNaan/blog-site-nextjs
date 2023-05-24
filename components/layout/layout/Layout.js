import Navigation from '../navigation/Navigation';

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
