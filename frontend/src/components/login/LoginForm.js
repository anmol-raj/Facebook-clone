import { Form, Formik } from "formik";
import LoginInput from "../inputs/loginInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";

const loginInfos = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email Address is required.")
      .email("Must be valid email.")
      .min()
      .max(100, " "),
    password: Yup.string().required("Password is required.").min().max(),
  });
  return (
    <div className="login_wrap">
      <div className="login_1">
        <img src="../../icons/facebook.svg" alt="" />
        <span>
          Facebook helps you connect and share with the people in your life.
        </span>
      </div>
      <div className="login_2">
        <div className="login_2_wrap">
          <Formik
            enableReinitialize
            initialValues={{
              email,
              password,
            }}
            validationSchema={loginValidation}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type={"text"}
                  name={"email"}
                  placeholder={"Email address or phone number"}
                  onChange={handleLoginChange}
                />
                <LoginInput
                  type={"password"}
                  name={"password"}
                  placeholder={"Password"}
                  onChange={handleLoginChange}
                  bottom
                />
                <button type="submit" className="blue_btn">
                  Log In
                </button>
              </Form>
            )}
          </Formik>
          <Link to="/forgot" className="forgot_password">
            Forgotten password ?
          </Link>
          <div className="sign_splitter"></div>
          <button className="open_signup blue_btn">Create Account</button>
        </div>
        <Link to="/" className="sign_extra">
          <b>Create a Page</b>&nbsp;for a celebrity, brand or business.
        </Link>
      </div>
    </div>
  );
}
