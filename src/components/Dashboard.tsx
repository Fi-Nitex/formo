import { UserButton, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useUser();

  useEffect(() => {
    document.title = `Workspaces - ${user?.firstName}`;
    document.body.classList.add("bg-[#8BAAAD]");
  });

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-row p-1 w-full flex-grow">
        <div className="bg-[#F0EFF4] w-[250px] p-2 rounded-xl flex flex-col justify-between h-full">
          <div className="">
            <h1 className="text-black text-sm">Workspaces</h1>
          </div>
          <div className="border-t-2 rounded-t-xl">
            <div className="">
              <div className="text-sm mb-2">
                <p>Forms Left</p>
              </div>
              {/* meter */}
              <div className="border-2 rounded-xl ">
                <div className="w-[20%] bg-[#004643] p-1 rounded-xl "></div>
              </div>
              <div className="text-xs text-end">
                <p className="mr-1">2/10</p>
              </div>
            </div>
            <div className="text-xs mt-2">
              <button className="flex justify-center items-center p-2 w-full bg-[#FAF4D3] hover:bg-[#D1AC00] transition-colors duration-200 ease-in-out rounded-lg">
                Recharge
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-green-300 rounded-xl ml-1"></div>
      </div>
    </div>
  );
};

export default Dashboard;

const Header = () => {
  const { user } = useUser();
  return (
    <header className="p-2 bg-[#F4FFF8] border-b-2 rounded-b-xl">
      <nav className="flex items-center justify-between w-[95%] m-auto">
        <div className="flex items-center">
          <UserButton />
          <span className="ml-2">{user?.fullName}</span>
        </div>
        <div className="">
          <button className="text-sm">View Plans</button>
        </div>
      </nav>
    </header>
  );
};
