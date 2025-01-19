import logo from "../../../../../assets/logo.svg";

export const Logo = () => {
  return (
    <div className="relative size-[72px] md:size-20 lg:size-[103px] rounded-r-[20px] bg-primary overflow-hidden flex items-center justify-center">
      <div className="absolute size-[72px] md:size-20 lg:size-[103px] top-1/2 left-0  rounded-l-[20px] bg-primary-dim"></div>
      <div className="relative z-10">
        <img src={logo} alt={"Invocraft Logo"} className="lg:w-10" />
      </div>
    </div>
  );
};
