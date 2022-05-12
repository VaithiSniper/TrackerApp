import react, { useState } from "react";
import Link from "next/Link";
import register from "../api/user/register";
import { History } from "history";
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
    // <div>
    //   <form action="POST">
    //     <div classNameName="mb-6">
    //       <label
    //         htmlhtmlFor="email"
    //         classNameName="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //       >
    //         Your email
    //       </label>
    //       <input
    //         onChange={(e) => {
    //           setuserDeetz({ ...userDeetz, email: e.target.value });
    //         }}
    //         type="email"
    //         id="email"
    //         classNameName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="name@flowbite.com"
    //         required=""
    //       ></input>
    //     </div>
    //     <div classNameName="mb-6">
    //       <label
    //         htmlFor="password"
    //         classNameName="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //       >
    //         Your password
    //       </label>
    //       <input
    //         onChange={(e) => {
    //           setuserDeetz({ ...userDeetz, password: e.target.value });
    //         }}
    //         type="password"
    //         id="password"
    //         classNameName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         required=""
    //       ></input>
    //     </div>
    //     <button
    //       onClick={(e) => submit(e)}
    //       type="submit"
    //       classNameName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <div className="relative min-h-screen">
      <div className="absolute top-2/4	left-2/4 -translate-y-1/2 -translate-x-1/2">
        <div className="block p-7 px-10 rounded-lg shadow-lg bg-white max-w-sm">
          <form action="">
            <div className=" text-center font-['Montserrat'] font-bold mb-5 text-black text-20xl">
              Login
            </div>
            <div className="form-group mb-6">
              <label className="font-['Montserrat'] font-black inline-block mb-2 text-gray-800">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setuserDeetz({ ...userDeetz, email: e.target.value });
                }}
                type="email"
                className="
                            block
                            w-full
                            px-5  
                            py-1.5
                            text-sm
                            indent-0	
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Email"
              ></input>
            </div>
            <div className="form-group mb-6">
              <label className="font-['Montserrat'] font-black inline-block mb-2 text-gray-800">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => {
                  setuserDeetz({ ...userDeetz, password: e.target.value });
                }}
                className="form-control block
                  w-full
                  px-5
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Password"
              ></input>
            </div>

            <button
              type="submit"
              onClick={(e) => submit(e)}
              className="
              w-full
              px-6
              py-2.5
              bg-purple-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
            >
              Sign in
            </button>
            <p className="text-gray-800 mt-6 text-center">
              Not a member?{" "}
              <Link href="/register">
                <a
                  href="#!"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Register
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
