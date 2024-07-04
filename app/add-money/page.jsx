const AddMoney = () => {
  return (
    <div className="bg-white/5  p-4">
      <div className="space-y-4">
        <div className="flex items-center">
          <img
            className="w-10 h-10 mr-2"
            src="https://placehold.co/40x40.png?text=bKash"
            alt="bKash logo"
          />
          <p className="">01910198454 (সেন্ড মানি /ক্যাশ ইন) Minimum 10 TK</p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 mr-2"
            src="https://placehold.co/40x40.png?text=Rocket"
            alt="Rocket logo"
          />
          <p className="">01910198454 (সেন্ড মানি /ক্যাশ ইন) Minimum 10 TK</p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 mr-2"
            src="https://placehold.co/40x40.png?text=Nagad"
            alt="Nagad logo"
          />
          <p className="">019556236257 (সেন্ড মানি /ক্যাশ ইন) Minimum 10 TK</p>
        </div>
      </div>
      <div className="mt-6">
        <p className="">{"->"} আপনি কত টাকা পাঠিয়েছেন নিচে সেটা লিখুন</p>
        <input
          type="text"
          className="w-full p-2 mt-2 rounded bg-white/10"
          placeholder="কত টাকা পাঠিয়েছেন"
        />
      </div>
      <div className="mt-4">
        <p className="">
          {"->"} যে নাম্বার থেকে টাকা পাঠিয়েছেন সেই পূর্ণ নাম্বারটি লিখুন
        </p>
        <input
          type="text"
          className="w-full p-2 mt-2 rounded bg-white/10"
          placeholder="আপনার বিকাশ,রকেট অথবা নগদের নাম্বার"
        />
      </div>
      <div className="mt-6 flex justify-around">
        <button className="flex flex-col items-center">
          <img
            className="w-12 h-12 mb-1"
            src="https://placehold.co/48x48.png?text=bKash"
            alt="bKash logo"
          />
          <span>bKash</span>
        </button>
        <button className="flex flex-col items-center">
          <img
            className="w-12 h-12 mb-1"
            src="https://placehold.co/48x48.png?text=Rocket"
            alt="Rocket logo"
          />
          <span>Rocket</span>
        </button>
        <button className="flex flex-col items-center">
          <img
            className="w-12 h-12 mb-1"
            src="https://placehold.co/48x48.png?text=Nagad"
            alt="Nagad logo"
          />
          <span>Nagad</span>
        </button>
      </div>
      <div className="mt-6">
        <button className="w-full  py-2 rounded">Verify Payment</button>
      </div>
      <p className="mt-4 text-center">
        * ভেরিফাই করার আগে সেন্ড মানি করতে হবে নাহলে আপনার ভেরিফিকেশন সফল হবে
        না।
      </p>
    </div>
  );
};

export default AddMoney;
