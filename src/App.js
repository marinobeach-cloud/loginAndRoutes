import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router";
import LandingPage from "./LandingPage";
import AppLayout from "./AppLayout";
import ProtectedRoute from "./ProtectedRoute";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function App(props) {
  const { state, login, logout } = useContext(UserContext);
  console.log(props.history);
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/app">App</Link>
        {state.user.isAuthenticated ? (
          <button onClick={() => logout(() => props.history.push("/"))}>
            Logout
          </button>
        ) : (
          <button onClick={() => login(() => props.history.push("/app"))}>
            Login
          </button>
        )}
      </nav>
      <Route exact path="/" component={LandingPage} />
      <ProtectedRoute exact path="/app" component={AppLayout} />
    </div>
  );
}

export default withRouter(App);
