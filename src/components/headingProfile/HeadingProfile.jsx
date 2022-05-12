export const HeadingProfile = ({ name }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Welcome {name}</h1>
      <p className="font-normal text-gray-400 text-sm">
        Check the latest updateson your account
      </p>
    </div>
  );
};
