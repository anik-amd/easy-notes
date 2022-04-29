import Header from "../partials/Header";
import Footer from "../partials/Footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <nav>
        <Header />
      </nav>
      <main className="">{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
