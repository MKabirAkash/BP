import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { notificationTostaAction } from "../../redux/common/template";
const SignIn = () => {
  const dispatch = useDispatch();
  const [validations, setValidations] = useState([]);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    dispatch(notificationTostaAction(emailError));
  }, [emailError, dispatch]);

  useEffect(() => {
    dispatch(notificationTostaAction(passwordError));
  }, [passwordError, dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    isFormValid();
    if (name === "password") {
      const validations = [
        value.length >= 8 ? "" : "Minimum 8 characters",
        /[A-Z]/.test(value) ? "" : "Include at least 1 uppercase letter",
        /[a-z]/.test(value) ? "" : "Include at least 1 lowercase letter",
        /\d/.test(value) ? "" : "Include at least 1 number",
      ];

      setValidations(validations.filter((rule) => rule !== ""));
    }
  };

  const isFormValid = () => {
    const { email, password, confirmPassword } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "" || confirmPassword === "") {
      return false;
    } else if (!emailRegex.test(email)) {
      return false;
    } else if (password.length < 8 && confirmPassword.length) {
      return false;
    } else {
      return true;
    }
  };
  const handleSignUp = (e) => {
    // Use the formData state data for your sign-in logic here
    console.log(formData);
    e.preventDefault();
    const { email, password, confirmPassword } = formData;
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!emailRegex.test(email)) {
      setEmailError({
        message: "Invalid email",
        type: "email",
        status: "error",
      });
    }
    // Password validation
    else if (!passwordRegex.test(password)) {
      setPasswordError({
        message:
          "Password: 8+ chars ,uppercase, 1 lowercase, 1 number, 1 special char",
        type: "password",
        status: "error",
      });
    } else if (password !== confirmPassword) {
      setPasswordError({
        message: "Password don't match",
        type: "password",
        status: "error",
      });
    } else {
      console.log("condirmed sign up eligible");
    }
  };

  return (
    <section className="relative z-10 mt-10 bg-[#F7F7F7] py-20 lg:py-[120px]">
      <div className="absolute left-0 top-0 z-[-1] h-full w-1/4 bg-primary"></div>
      <div className="container mx-auto">
        <div className="bg-white">
          <div className="flex flex-wrap items-stretch">
            <div className="w-full lg:w-1/2">
              <div className="relative hidden h-full w-full overflow-hidden lg:flex">
                <div className="flex h-full items-end">
                  <img
                    src="https://www.wcpss.net/cms/lib/NC01911451/Centricity/Domain/4/back%20to%20school%20YR%20banner.png"
                    alt="image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full py-14 px-8 sm:p-[70px] lg:px-14 xl:px-[90px]">
                <h2 className="mb-3 text-[32px] font-bold text-dark">
                  Welcome to Active Agency
                </h2>
                <div className="mb-4 mt-10">
                  <InputBox
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <InputBox
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  {validations.length > 0 && (
                    <ul className="text-sm  font-roboto text-ioty__black dark:text-gray__300">
                      {validations.map((rule, index) => (
                        <li className="p-1" key={index}>
                          {index + 1}: {rule}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="mb-4">
                  <InputBox
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 md:w-1/2">
                    <button
                      disabled={!isFormValid()}
                      onClick={handleSignUp}
                      className={`mb-3 h-[50px] w-full cursor-pointer bg-primary px-5 text-white transition hover:bg-opacity-9mb-3 h-[50px] w-full cursor-pointer bg-primary px-5 text-white transition hover:bg-opacity-90 flex items-center justify-center ${
                        isFormValid() ? "" : "pointer-events-none"
                      }`}
                    >
                      Sign Up
                    </button>
                  </div>

                  <div className="w-full px-3 md:w-1/2">
                    <button
                      href="/#"
                      className="mb-3 h-[50px] w-full cursor-pointer bg-secondary px-5 text-white transition hover:bg-opacity-90 flex items-center justify-center"
                    >
                      You have an account ?
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center md:mt-10">
                  <p className="mb-3 mr-5 text-xs font-medium text-body-color">
                    Create Account With
                  </p>
                  <div className="mb-3 flex items-center">
                    <button className="mr-4 text-xs font-medium text-dark hover:text-primary hover:underline">
                      Facebook
                    </button>

                    <button
                      href="/#"
                      className="mr-4 text-xs font-medium text-dark hover:text-primary hover:underline"
                    >
                      Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

const InputBox = ({ type, placeholder, value, onChange, name }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className="h-12 w-full border border-transparent bg-[#F6F6F6] px-5 text-body-color outline-none focus:border-primary focus-visible:shadow-none"
      />
    </div>
  );
};
