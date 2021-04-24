import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/pages/main-page";

function Routes() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route to="/" component={MainPage}></Route>
        </Switch>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default Routes;
