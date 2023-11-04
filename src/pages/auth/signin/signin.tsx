import React, { FormEventHandler, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

async function loginUser(username: string, password: string) {
  return fetch("http://localhost:3001/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((data) => {
    if (!data.ok) {
      throw new Error("Failed to log in. Please check your credentials.");
    }
    return data.json();
  });
}

function SignIn({ setToken }: { setToken: any }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = await loginUser(username, password);
      setToken(token);
    } catch (error) {
      toast.error("Error while logging in"); // Set the error message
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center p-4">
        <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-primary border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium  text-white">
                  Your username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@company.com"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium  text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border  rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-primary"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className=" text-gray-300">Remember me</label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-accent hover:bg-accent focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-accent hover:bg-accent/70 focus:ring-accent"
              >
                Sign in
              </button>
              <p className="text-sm font-light  text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
