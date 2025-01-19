import { Logo, Profile, ThemeToggler } from "./components";

export const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-dark-600 flex items-center justify-between gap-6 lg:flex-col lg:min-h-screen lg:w-[103px] lg:rounded-r-[20px]">
      <div className="mr-auto lg:mr-0 lg:mb-auto">
        <Logo />
      </div>
      <ThemeToggler />
      <Profile />
    </aside>
  );
};
