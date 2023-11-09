import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, redirect, useNavigate } from "react-router-dom";
async function createUser(username: string, password: string) {
  return fetch(`${process.env.API_URL}/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((data) => {
    if (!data.ok) {
      throw new Error("Failed to sign un. Please check your credentials.");
    }
    return data.json();
  });
}
function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const user = await createUser(username, password);
      toast.success("Account created"); // Set the error message
      navigate("/signin");
    } catch (error) {
      toast.error("Error while creating your account"); // Set the error message
    }
  };
  return (
    <section>
      <div className="flex items-center justify-center p-4">
        <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-primary border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
              Create and account
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
                  placeholder="username"
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
                  className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-accent hover:bg-accent focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-accent hover:bg-accent/50 focus:ring-accent"
              >
                Create an account
              </button>
              <p className="text-sm font-light  text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="font-medium text-primary-600 hover:underline text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
