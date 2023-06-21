import { Form, Formik } from "formik";
import RegisterInput from "../inputs/registerInput";
import { useState } from "react";
import * as Yup from "yup";

export default function RegisterForm() {
  // interface
  const userInput = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDay(),
    gender: "",
  };

  const [user, setUser] = useState(userInput);
  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;
  const yearTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const years = Array.from(new Array(109), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => new Date(bYear, bMonth, 0).getDate();
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

  const registerValidation = Yup.object({
    first_name: Yup.string()
      .required("What's your First name.")
      .min(2, "First name must be between 2 - 16")
      .max(16, "First name must be between 2 - 16")
      .matches(
        /^[aA-zZ\s]+$/,
        "Numbers and special characters are not allowed"
      ),
    last_name: Yup.string()
      .required("What's your Last name.")
      .min(2, "First name must be between 2 - 16")
      .max(16, "First name must be between 2 - 16"),
    // email: Yup.email().required("What's your email"),
    // password: Yup,
  });

  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon"></i>
          <span>Sign Up</span>
          <span>It's quick & easy</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            first_name,
            last_name,
            email,
            password,
            bYear,
            bMonth,
            bDay,
            gender,
          }}
          validationSchema={registerValidation}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder={"First Name"}
                  name={"first_name"}
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="text"
                  placeholder={"Surname"}
                  name={"last_name"}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder={"Mobile number or email"}
                  name={"email"}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="password"
                  placeholder={"New password"}
                  name={"password"}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Date of birth <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <select
                    name="bDay"
                    value={bDay}
                    onChange={handleRegisterChange}
                  >
                    {days.map((day, i) => (
                      <option key={i}>{day}</option>
                    ))}
                  </select>
                  <select
                    name="bMonth"
                    value={bMonth}
                    onChange={handleRegisterChange}
                  >
                    {months.map((month, i) => (
                      <option key={i}>{month}</option>
                    ))}
                  </select>
                  <select
                    name="bYear"
                    value={bYear}
                    onChange={handleRegisterChange}
                  >
                    {years.map((year, i) => (
                      <option value={year} key={i}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Gender <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <label htmlFor="male">
                    Male
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor="female">
                    Female
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor="custom">
                    Custom
                    <input
                      type="radio"
                      name="gender"
                      id="custom"
                      value="custom"
                      onChange={handleRegisterChange}
                    />
                  </label>
                </div>
                <div className="reg_infos">
                  <p>
                    People who use our service may have uploaded your contact
                    information to Facebook. <a href="/">Learn more.</a>
                  </p>
                  <p>
                    By clicking Sign Up, you agree to our{" "}
                    <a href="/">Terms, Privacy Policy and Cookies Policy.</a>{" "}
                    You may receive SMS notifications from us and can opt out at
                    any time
                  </p>
                </div>
                <div className="reg_btn_wrapper">
                  <button className="blue_btn open_signup"> Sign Up</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>{" "}
      </div>
    </div>
  );
}
