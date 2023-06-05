import React, { useEffect } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  
  if (loading) {
    return;
  }

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
  };
  return (
 
      <div
        className={`2xl:w-[65%] md:w-[75%] w-[90%] mx-auto mb-20 `}
      >
        <div className="my-10">
          <p className="text-[12px] font-semibold">
            Home
            <FontAwesomeIcon
              className="mx-2"
              icon={faCaretRight}
            ></FontAwesomeIcon>
            Account
          </p>
          <p className="text-xl my-4 font-bold">CUSTOMER LOGIN</p>
        </div>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <p className="text-[14px] font-semibold mb-2">Email Address</p>
            <input
              type="email"
              className="border px-3 border-secondary border-opacity-50 w-[80%] sm:w-[30vw] h-[32px]"
              name="email"
            />
          </div>
          <div className="mb-4">
            <p className="text-[14px] font-semibold mb-2">Password</p>
            <input
              type="password"
              className="border px-3 border-secondary border-opacity-50 w-[80%] sm:w-[30vw] h-[32px]"
              name="password"
            />
          </div>
          <p className="text-error mb-3 font-bold">{error?.message}</p>
          <input
            type="submit"
            value="LOGIN"
            className="w-[200px] sm:w-[150px] flex justify-center items-center cursor-pointer bg-secondary text-primary h-[30px] text-xs font-bold"
          />
          <p className="text-[14px] font-semibold my-4">
            Dont have an account ?{" "}
            <Link to="/signup" className="text-accent font-bold">
              Signup
            </Link>
          </p>
        </form>
      </div>
  );
};

export default Login;
