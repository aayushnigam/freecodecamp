import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { clientId } from "../firebaseConfig";
// import { Link } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      });
      // Handle successful registration
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.msg || "An error occurred");
    }
  };

  // const googleSignIn = async (response) => {
  //   try {
  //     const idToken = response.credential;
  //     const res = await axios.post(
  //       "http://localhost:5000/api/users/google-auth",
  //       {
  //         token: idToken,
  //       }
  //     );
  //     // Handle successful Google authentication
  //     console.log(res.data);
  //     // Redirect to the dashboard or perform any other necessary actions
  //     navigate("/dashboard");
  //   } catch (error) {
  //     alert(error.message || "An error occurred");
  //   }
  // };
  const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/api/users/google/callback`,
			"_self"
		);
	};
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);


  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="max-w-[280px] mx-auto">
        <div className="flex flex-col items-center mt-[10vh]">
          <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">
            Sign Up
          </h2>
          <GoogleLogin
            onSuccess={googleAuth}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <span className="mb-2 text-gray-900">Or</span>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-3 text-[14px]">
            Already have an account?{" "}
            <a href="/login" className="text-gray-600">
              Log In
            </a>
          </p>
          <p className="text-center mt-3 text-[14px]">
            By clicking continue, you agree to our{" "}
            <a href="/terms" className="text-gray-600">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-gray-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default SignIn;
