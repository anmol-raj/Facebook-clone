import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route
          path="/"
          element={
            <h1>
              HomePage <Link to="/login"> Login page</Link>
            </h1>
          }
          exact
        />
      </Routes>
    </div>
  );
}

export default App;
