import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-sm shadow-md">
      <Link href={"/"} className="flex items-center">
        <img src="https://placehold.co/40x40" alt="logo" className="mr-2" />
        <span className="font-bold text-xl">FF TOUR</span>
      </Link>
      <img src="https://placehold.co/40x40" alt="wallet icon" />
    </div>
  );
};

export default Nav;
