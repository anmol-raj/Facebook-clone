import "./style.css";
import LoginForm from "../../components/login/LoginForm";
import RegisterForm from "../../components/login/RegisterForm";
import Footer from "../../components/login/footer";

export default function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <RegisterForm />
        <Footer />
      </div>
    </div>
  );
}
