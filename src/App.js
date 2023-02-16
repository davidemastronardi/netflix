import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import Login from "./pages/login/Login";
import AddProfile from "./pages/login/AddProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="routes">
          <Routes>
            <Route element={<Login />} path="/"></Route>
            <Route element={<AddProfile />} path="/addProfile"></Route>
          </Routes>
          <Routes></Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
