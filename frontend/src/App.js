import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
function App() {
  return (
    <Routes>
      <Route>
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
      </Route>
    </Routes>
  );
}

export default App;
