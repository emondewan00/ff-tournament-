const WalletPage = () => {
  return (
    <div className="bg-white/10 text-white p-4 max-w-md mx-auto backdrop-blur-sm">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">AVAILABLE BALANCE :</h1>
        <a href="#" className="">
          View Transactions &gt;
        </a>
      </div>
      <div className="text-4xl font-bold mb-2">৳ 0</div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            aria-hidden="true"
            alt="trophy"
            src="https://openui.fly.dev/openui/24x24.svg?text=🏆"
            className="mr-2"
          />
          <span>WINNING CASH BALANCE :</span>
        </div>
        <button className="bg-green-500 text-white py-1 px-3 rounded-lg">
          WITHDRAW
        </button>
      </div>
      <div className="text-4xl font-bold mb-2">৳ 80</div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            aria-hidden="true"
            alt="deposit"
            src="https://openui.fly.dev/openui/24x24.svg?text=💰"
            className="mr-2"
          />
          <span>DEPOSIT CASH BALANCE :</span>
        </div>
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg">
          + ADD MONEY
        </button>
      </div>
      <div className="text-4xl font-bold mb-2">৳ 0</div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            aria-hidden="true"
            alt="gaming"
            src="https://openui.fly.dev/openui/24x24.svg?text=🎮"
            className="mr-2"
          />
          <span>WINNING TO GAMING BALANCE :</span>
        </div>
        <button className="bg-purple-500 text-white py-1 px-3 rounded-lg">
          TRANSFER
        </button>
      </div>
      <div className="border-t  my-4"></div>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <img
            aria-hidden="true"
            alt="how-to"
            src="https://openui.fly.dev/openui/24x24.svg?text=❓"
            className="mr-2"
          />
          <span className="font-bold">HOW TO ADD MONEY?</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>কিভাবে টাকা এড করবেন?</span>
          <button className="bg-pink-500 text-white py-1 px-3 rounded-lg">
            ভিডিও দেখুন
          </button>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>কিভাবে ম্যাচ এ জয়েন করবেন?</span>
          <button className="bg-pink-500 text-white py-1 px-3 rounded-lg">
            ভিডিও দেখুন
          </button>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>কিভাবে লুডু ম্যাচ খেলবেন?</span>
          <button className="bg-pink-500 text-white py-1 px-3 rounded-lg">
            ভিডিও দেখুন
          </button>
        </div>
      </div>
      <div className="text-center mb-4">
        <p>টাকা এড না হলে এখানে মেসেজ দিন</p>
        <button className="bg-transparent border border-blue-500 text-blue-500 py-1 px-3 rounded-lg mt-2">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default WalletPage;
