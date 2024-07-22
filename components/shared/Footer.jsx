import Link from "next/link";

const Footer = () => {
  return (
    <div class="fixed bottom-0 left-0 right-0 bg-zinc-800 p-2 flex justify-around container z-50">
      <div class="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="Shop" class="mb-1" />
        <span class="text-xs">Shop</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="OnGoing" class="mb-1" />
        <span class="text-xs">OnGoing</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="Play" class="mb-1" />
        <span class="text-xs">Play</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="Result" class="mb-1" />
        <span class="text-xs">Result</span>
      </div>
      <Link href={"/settings/profile"} class="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="Me" class="mb-1" />
        <span class="text-xs">Me</span>
      </Link>
    </div>
  );
};

export default Footer;
