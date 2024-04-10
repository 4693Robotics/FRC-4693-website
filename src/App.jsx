import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import "./Css/Pages/Home.css";
import NavBar from "./Components/NavBar.jsx"
import HomePage from "./Pages/HomePage.jsx"

function App() {
  return (
    <Router>
      <Switch>
        <Routes>
          <Route path="/" Component={NavBar} />
          <Route path="/Info" Component={null} />
        </Routes>
      </Switch>
    </Router>
  );
}

export default App
