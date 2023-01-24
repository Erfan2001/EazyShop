import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/user";
import { toast } from "react-toastify";
import { Loader, MetaData } from "../../components";

// Icons used
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";

// Images used
import Avatar from "../../images/avatar-default-icon.png";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(Avatar);
  const [passwordHide, setPasswordHide] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordHide, setConfirmPasswordHide] = useState(true);

  const isCorrectEmail = (email) =>
    /^[A-Z0-9._]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const passwordRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  );
  const isCorrectPassword = (password) => passwordRegex.test(password);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const showErrorToast = (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isCorrectEmail(user.email)) {
      return showErrorToast(
        "Incorrect email format. The email must contain '.' and '@' special character."
      );
    } else if (!isCorrectPassword(user.password)) {
      return showErrorToast(
        "Incorrect password format. The password must contain 6 characters with at least 1 lowercase, 1 uppercase, 1 numeric and 1 special character."
      );
    } else if (user.password !== confirmPassword) {
      return showErrorToast(
        "Confirm password isn't matching. Please make sure the password and confirm password are same."
      );
    }

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);

    dispatch(register(formData));
  };

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      // if (error !== "Login required for accessing the resources.") {
      showErrorToast(error);
      // }
      dispatch(clearErrors);
    }
  }, [dispatch, isAuthenticated, error, navigate, pathname]);
  // window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main>
      <section>
        <div
          className="flex h-full w-full items-center justify-center overflow-auto 
            bg-gray-100 p-10 py-36"
        >
          <MetaData title={"Register User"} />
          <div
            className="h-full overflow-auto rounded-2xl border-4 border-gray-400
            bg-white px-5 py-2 shadow-2xl md:w-1/2 xl:w-2/5"
          >
            <div className=" text-center">
              <h1 className=" text-4xl font-extrabold">Registration</h1>
            </div>

            <form
              onSubmit={submitHandler}
              encType="multipart/form-data"
              className="space-y-4 p-2"
            >

              <div>
                <h4 className="text-gray-500">
                  Name <span className=" text-red-500">*</span>
                </h4>
                <div className=" relative">
                  <span className=" absolute top-3 left-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-2 h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    className=" w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    type="text"
                    placeholder="Enter your username"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div>
                <h4 className="text-gray-500">
                  Email <span className=" text-red-500">*</span>
                </h4>
                <div className=" relative">
                  <span className=" absolute top-3 left-0">
                    <MdOutlineMail className="mb-2 h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    className=" w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div>
                <h4 className="text-gray-500">
                  Password <span className=" text-red-500">*</span>
                </h4>
                <div className=" relative">
                  <span className=" absolute top-3 left-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-2 h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                  <input
                    className=" w-full border-b-2 border-gray-300 py-2 pl-6 pr-8 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    type={`${passwordHide ? "password" : "text"}`}
                    placeholder="Enter your Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-1 h-full border-none bg-transparent outline-none"
                    onClick={() => setPasswordHide(!passwordHide)}
                  >
                    {/* <AiOutlineEye className="h-5 w-5" /> */}
                    {passwordHide ? (
                      <AiOutlineEyeInvisible className="h-5 w-5" />
                    ) : (
                      <AiOutlineEye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-gray-500">
                  Confirm Password <span className=" text-red-500">*</span>
                </h4>
                <div className=" relative">
                  <span className=" absolute top-3 left-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-2 h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                  <input
                    className=" w-full border-b-2 border-gray-300 py-2 pl-6 pr-8 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    type={`${confirmPasswordHide ? "password" : "text"}`}
                    placeholder="Confirm your Password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-1 h-full border-none bg-transparent outline-none"
                    onClick={() => setConfirmPasswordHide(!confirmPasswordHide)}
                  >
                    {/* <AiOutlineEye className="h-5 w-5" /> */}
                    {confirmPasswordHide ? (
                      <AiOutlineEyeInvisible className="h-5 w-5" />
                    ) : (
                      <AiOutlineEye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center leading-[13px]">
                <input
                  id="agreementCheck"
                  className=" mr-2 h-4 w-4 cursor-pointer"
                  type="checkbox"
                  required
                />
                <label
                  htmlFor="agreementCheck"
                  className="text-[13px] text-gray-500"
                >
                  I agree to all Crafty Commerce's
                  <Link
                    className="mx-1 text-xs font-semibold text-blue-500 underline"
                    to={"/terms-and-condition"}
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              <motion.div
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className=" flex space-x-4"
              >
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary p-2 text-center font-semibold uppercase 
                    tracking-widest text-white transition-colors duration-300 ease-in-out hover:bg-primaryDarkShade "
                >
                  Register
                </button>
              </motion.div>

              <div className="mt-4 text-center">
                <h5 className=" text-gray-400">Or</h5>
                <div className="mt-2 text-center">
                  <Link
                    className=" flex items-center justify-center text-gray-400 transition-all duration-300 ease-in-out hover:text-gray-600"
                    to={"/login"}
                  >
                    <span>Already have an account?</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
