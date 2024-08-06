import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-800 p-2 flex justify-around container z-50">
      <Link href={"/"} className="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="Play" className="mb-1" />
        <span className="text-xs">Play</span>
      </Link>
      <Link href={"/on-going"} className="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="OnGoing" className="mb-1" />
        <span className="text-xs">OnGoing</span>
      </Link>
      <Link href={"/results"} className="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="Result" className="mb-1" />
        <span className="text-xs">Results</span>
      </Link>
      <Link href={"/settings"} className="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="Me" className="mb-1" />
        <span className="text-xs">Settings</span>
      </Link>
    </div>
  );
};

export default Footer;
