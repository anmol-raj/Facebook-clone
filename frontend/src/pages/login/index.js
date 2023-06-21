import { Link } from "react-router-dom";
import "./style.css";
import LoginForm from "../../components/login/LoginForm";

export default function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <div className="register"></div>
      </div>
    </div>
  );
}
