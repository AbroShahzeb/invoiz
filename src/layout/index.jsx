import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";

export const Layout = () => {
  return (
    <main className="min-h-svh flex flex-col lg:flex-row">
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </main>
  );
};
