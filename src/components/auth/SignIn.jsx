import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    isFormValid();
  };

  const isFormValid = () => {
    const { email, password } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {
      return false;
    } else if (!emailRegex.test(email)) {
      return false;
    } else if (password.length < 8) {
      return false;
    } else {
      return true;
    }
  };

  const handleSignIn = () => {
    console.log("signed in");
  };

  return (
    <section className="relative z-10 mt-10 bg-[#F7F7F7] py-20 lg:py-[120px]">
      <div className="absolute left-0 top-0 z-[-1] h-full w-1/4 bg-primary"></div>
      <div className="container mx-auto">
        <div className="bg-white">
          <div className="flex flex-wrap items-stretch">
            <div className="w-full lg:w-1/2">
              <div className="w-full py-14 px-8 sm:p-[70px] lg:px-14 xl:px-[90px]">
                <h2 className="mb-3 text-[32px] font-bold text-dark">
                  Welcome to Bondi Pathshala
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

                <div className="mb-8 flex flex-wrap justify-between">
                  <div>
                    <button
                      onClick={() => console.log("recover password")}
                      className="mb-2 mx-2 text-base text-primary hover:underline"
                    >
                      {" "}
                      Forget Password?{" "}
                    </button>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 md:w-1/2">
                    <button
                      disabled={!isFormValid()}
                      onClick={handleSignIn}
                      className={`mb-3 h-[50px] w-full cursor-pointer bg-primary px-5 text-white transition hover:bg-opacity-9mb-3  hover:bg-opacity-90 flex items-center justify-center ${
                        isFormValid() ? "" : "pointer-events-none"
                      }`}
                    >
                      Sign In
                    </button>
                  </div>

                  {/* <div className="w-full px-3 md:w-1/2">
                      <button
                       onClick={()=>dispatch(singUpSectionAction(true))}
                        className="mb-3 h-[50px] w-full cursor-pointer bg-secondary px-5 text-white transition hover:bg-opacity-90 flex items-center justify-center"
                      >
                        Create Account
                      </button>
                    </div> */}
                </div>
                {/* <div className="mt-6 flex flex-wrap items-center md:mt-10">
                  <p className="mb-3 mr-5 text-xs font-medium text-body-color">
                    Login With
                  </p>
                  <div className="mb-3 flex items-center">
                    <button
                      onClick={()=>{dispatch(signInWithFacebookAction())}}
                      className="mr-4 text-xs font-medium text-dark hover:text-primary hover:underline"
                    >
                      Facebook
                    </button>
                    
                    <button
                     onClick={()=>{
                      dispatch(signInWithGoogleAction()) 
                     }}
                      className="mr-4 text-xs font-medium text-dark hover:text-primary hover:underline"
                    >
                      Google
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative hidden h-full w-full overflow-hidden lg:flex">
                <div className="flex h-full items-end">
                  <img
                    src="https://storage.googleapis.com/website-production/uploads/2023/04/agency-hierarchy.webp"
                    alt="image"
                    className="h-full w-full object-cover object-center"
                  />
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
