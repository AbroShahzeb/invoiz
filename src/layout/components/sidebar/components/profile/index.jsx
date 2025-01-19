import avatar from "../../../../../assets/image-avatar.jpg";

export const Profile = () => {
  return (
    <div className="self-stretch py-5 px-6 md:py-6 md:px-8 border-l lg:border-l-0 lg:border-t border-[#494E6E]">
      <div>
        <img
          src={avatar}
          alt="Image Avatar"
          className="size-8 lg:size-10 rounded-full"
        />
      </div>
    </div>
  );
};
