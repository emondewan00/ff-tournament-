import Link from "next/link";

const SettingsPage = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-4">
      {/* <div className="my-4 flex flex-col items-center">
        <img
          src="https://placehold.co/80x80"
          alt="user photo "
          className="rounded-full size-20 object-cover"
        />
        <h2 className="text-lg font-semibold">User Name</h2>
      </div> */}
      <div className="flex gap-x-4 items-center justify-between">
        <div className="flex  items-center gap-x-4">
          <img
            src="https://placehold.co/80x80"
            alt="user photo"
            className="rounded-full size-20 object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">User Name</h2>
            <p>Match Played:10</p>
          </div>
        </div>
        <div>
          <p>Total Kills: 10</p>
          <p>Total Balance: $100</p>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 gap-x-4 *:p-4">
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
      </div> */}

      <h1 className="text-2xl font-bold mt-2">Settings</h1>
      <p>Manage your account settings and preferences.</p>
      <ul className="list-inside list-disc mt-2">
        <li>
          <Link href={"/settings/profile"}>My Profile</Link>
        </li>
        <li>
          <Link href={"/wallet"}>My Wallet</Link>
        </li>
        <li>
          <Link href={"/statistics"}>My Statistics</Link>
        </li>
        <li>Share</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default SettingsPage;
