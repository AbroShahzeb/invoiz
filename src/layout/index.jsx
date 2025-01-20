import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";

export const Layout = () => {
  return (
    <main className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="min-h-[calc(100svh-72px)] md:min-h-[calc(100svh-80px)] lg:min-h-[calc(100svh)] overflow-y-auto w-full">
        <Outlet />
      </div>
    </main>
  );
};
