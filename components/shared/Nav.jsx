import Link from "next/link";

const Nav = () => {
  return (
    <div class="flex items-center justify-between mb-4">
      <Link href={"/"} class="flex items-center">
        <img src="https://placehold.co/40x40" alt="logo" class="mr-2" />
        <span class="font-bold text-xl">FF TOUR</span>
      </Link>
      <img src="https://placehold.co/40x40" alt="wallet icon" />
    </div>
  );
};

export default Nav;
