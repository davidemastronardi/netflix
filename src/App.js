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
import { createContext, useState } from "react";
import Home from "./pages/Home";


export const MyContext = createContext();




function App() {
  const [users, setUsers] = useState([

  ]);
 
 
  return (
    <div className="App">
      <MyContext.Provider value={{ users, setUsers }}>
        <Router>
          <div className="routes">
            <Routes>
              <Route element={<Login />} path="/"></Route>
              <Route element={<AddProfile />} path="/addProfile"></Route>
            <Route element={<Home />} path="/home"></Route>
            </Routes>
            <Routes>
            </Routes>
          </div>
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
