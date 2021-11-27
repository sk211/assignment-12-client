import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dasboard from "./pages/Dashboard/MyDashbord/MyDeshbord";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivetRouter from "./pages/Login/PrivateRouter/PrivetRouter";
import Regester from "./pages/Login/Regester/Regester";
import OrderPlace from "./pages/OrderPlace/OrderPlace";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Products from "./pages/Products/Products/Products";
import Footer from "./pages/shared/Footer/Footer";
import Header from "./pages/shared/Header/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exict path="/home">
              <Home />
            </Route>
            <Route  path="/products">
              <Products />
            </Route>
            <PrivetRouter path="/ordarplace/:productId">
              <OrderPlace />
            </PrivetRouter>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/ordarplace">
              <OrderPlace />
            </Route>
            <PrivetRouter path="/dashboard">
              <Dasboard />
            </PrivetRouter>
            <Route path="/regester">
              <Regester />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
            <Footer></Footer>
          </Switch>
        </div>
      <Footer />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
