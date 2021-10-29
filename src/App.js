import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderNav from "./Pages/Shared/Header/HeaderNav";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/login/Login";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/AboutUs/AboutUs";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ServiceDetail from "./Pages/Service/ServiceDetail";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <HeaderNav></HeaderNav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/service/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
