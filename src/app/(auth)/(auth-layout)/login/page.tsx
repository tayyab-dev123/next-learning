"use client";
import { useRouter } from "next/navigation";

const Login = () => {
  const route = useRouter();
  const handleLogin = () => {
    route.push("/dashboard");
  };
  const handleRegister = () => {
    route.push("/register");
  };
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform transition duration-500 hover:shadow-2xl">
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h3>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <button
            onClick={handleRegister}
            className="text-indigo-600 hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </section>
  );
};

export default Login;
