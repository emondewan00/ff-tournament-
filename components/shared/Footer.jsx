import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-800 p-2 flex justify-around container z-50">
      <div className="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="Play" className="mb-1" />
        <span className="text-xs">Play</span>
      </div>
      <Link href={"/on-going"} className="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="OnGoing" className="mb-1" />
        <span className="text-xs">OnGoing</span>
      </Link>
      <div className="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="Result" className="mb-1" />
        <span className="text-xs">Result</span>
      </div>
      <Link href={"/settings/profile"} className="flex flex-col items-center">
        <img src="https://placehold.co/24x24" alt="Me" className="mb-1" />
        <span className="text-xs">Me</span>
      </Link>
    </div>
  );
};

export default Footer;
