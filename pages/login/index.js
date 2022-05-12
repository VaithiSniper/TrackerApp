import react, { useState } from "react";
import register from "../api/user/register";
import { useRouter } from "next/router";

export default function Register() {
  const [userDeetz, setuserDeetz] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    console.log(userDeetz.password);
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: userDeetz.email,
        password: userDeetz.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    router.push("/dashboard");
  };

  return (
    <div>
      <form action="POST">
        <div className="mb-6">
          <label
            htmlhtmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            onChange={(e) => {
              setuserDeetz({ ...userDeetz, email: e.target.value });
            }}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required=""
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            onChange={(e) => {
              setuserDeetz({ ...userDeetz, password: e.target.value });
            }}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          ></input>
        </div>
        <button
          onClick={(e) => submit(e)}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
