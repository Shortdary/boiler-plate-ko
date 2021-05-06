import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
// import NavBar from "./components/views/NavBar/NavBar";
// import Footer from "./components/views/Footer/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
