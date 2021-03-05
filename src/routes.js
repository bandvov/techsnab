import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import MainDiv from "./components/main-div";

function Routes() {
  return (
    <>
      <Header />
      <MainDiv />
      <Footer />
    </>
  );
}

export default Routes;
