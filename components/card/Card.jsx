import Image from "next/image";

function Dashboard({ data: { id, date, title, description } }) {
  return (
    <div
      tabIndex="0"
      className="collapse collapse-arrow p-4 m-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-y-4 flex flex-col shadow-cyan-500/20 text-black"
      key={id}
    >
      <div className="collapse-title text-xl font-medium space-x-4">
        <div className="text-2xl font-semibold underline font-sans">
          {title}
        </div>
        <div className="space-x-4">
          <span className="text-gray-500 text-sm font-bold font-sans">
            {date}
          </span>
        </div>
        <button className="btn text-white mt-4">Log</button>
      </div>
      <div className="collapse-content">
        <p className="text-md font-sans">{description}</p>
      </div>
    </div>
  );
}

export default Dashboard;

//   <div
//       className="p-6 m-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-y-4 flex flex-col shadow-cyan-500/20 text-black"
//       key={id}
//     >
//       <span className="text-md font-bold font-mono">
//         <Image
//           src="/images/calendar.png"
//           alt="Icon of a calendar"
//           width={20}
//           height={20}
//         />
//       </span>
//       <span className="text-lg font-bold font-mono">{date}</span>
//       <h1 className="text-3xl font-semibold underline font-sans">{title}</h1>
//       <p className="text-md font-sans">{description}</p>
//     </div>
