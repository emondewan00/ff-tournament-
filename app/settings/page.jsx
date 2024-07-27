const SettingsPage = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-4">
      <div className="my-4 flex flex-col items-center">
        <img
          src="https://placehold.co/80x80"
          alt="user photo "
          className="rounded-full size-20 object-cover"
        />
        <h2 className="text-lg font-semibold">User Name</h2>
      </div>
      <div className="grid grid-cols-3 gap-x-4 *:p-4">
        <div className="border flex items-center flex-col justify-center rounded">
          <p>10</p>
          <p className="text-center">Match Played</p>
        </div>
        <div className="border flex items-center flex-col justify-center rounded">
          <p>10</p>
          <p className="text-center">Total Kills</p>
        </div>
        <div className="border flex items-center flex-col justify-center rounded">
          <p>10</p>
          <p className="text-center">Balance</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold">Settings</h1>
      <p>Your settings will be displayed here.</p>
    </div>
  );
};

export default SettingsPage;
