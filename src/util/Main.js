import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import HomePage from "../containers/HomePage/HomePage";
import AddProduct from "../containers/AddPages/AddProduct";
import Products from "../containers/ProductPage/Products";
import Landing from "../containers/LandingPage/Landing";
// eslint-disable-next-line no-unused-vars
function Main(props) {
  const LandingPage = () => {
    return <Landing />;
  };

  const AddProductPage = () => {
    return (
      <>
        <NavBar />
        <AddProduct />
        <Footer />
      </>
    );
  };

  const ProductsPage = () => {
    return (
      <>
        <NavBar />
        <Products />
        <Footer />
      </>
    );
  };

  const Homepage = () => {
    return (
      <>
        <NavBar />
        <HomePage />
        <Footer />
      </>
    );
  };

  return (
    <>
      <SwitchTransition>
        <CSSTransition classNames="page" timeout={1000}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={Homepage} />
            <Route path="/products/addNew" component={AddProductPage} />
            <Route path="/products" component={ProductsPage} />
          </Switch>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}
export default withRouter(Main);
