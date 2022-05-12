import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Card from "./../../components/card/Card";

function Dashboard() {
  const [isLoading, setLoading] = useState(false);
  const [userDeetz, setuserDeetz] = useState();

  const router = useRouter();

  const getData = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/user/getUser");
    const data = await response.json();
    console.log(data);
  };
  // useEffect(() => {
  //   async () => {
  //     const response = await fetch("/api/user/getUser");
  //     const data = await response.json();
  //     console.log(data);
  //   };
  // }, [userDeetz]);

  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("/api/user/deleteSession", {
  //     method: "DELETE",
  //   });
  //   router.push("/");
  // };
  const obj = {
    id: 1,
    date: "13/07/2002",
    title: "Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt est ullamcorper velit feugiat, volutpat commodo nisl condimentum. In faucibus quam vel enim porttitor, a interdum lacus facilisis. Donec condimentum sapien eu egestas ultrices. Nam sit amet cursus neque. Sed tempus suscipit commodo. Suspendisse varius elementum sodales.",
  };

  return (
    <div className="bg-background-light min-w-full min-h-full w-full h-full bg-cover bg-center p-4 space-y-4 container mx-auto bg-fixed text-black">
      <div
        className="p-6 m-6 max-w-full mx-auto bg-white rounded-xl shadow-lg items-center space-y-4 flex flex-col shadow-cyan-500/20"
        key={obj.id}
      >
        <div className="space-x-6">
          <span className="font-bold font-sans text-4xl">
            What do you want to track today?
          </span>
          <span>
            <button className="btn border-2 border-slate-600/20 rounded-full shadow hover:shadow-lg bg-cyan-500/40 text-2xl text-black opacity-70 hover:opacity-70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500/50 duration-300">
              Add +
            </button>
          </span>
        </div>
      </div>
      <div>
        <span className="text-3xl underline">Unlogged events</span>
        <div className="flex flex-row">
          <Card data={obj} />
          <Card data={obj} />
          <Card data={obj} />
          <Card data={obj} />
        </div>
      </div>
      <div>
        <span className="text-3xl underline">Logged events</span>
        <div className="flex flex-row">
          <Card data={obj} />
          <Card data={obj} />
          <Card data={obj} />
        </div>
      </div>
      <button
        onClick={(e) => getData(e)}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
