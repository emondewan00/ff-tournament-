import Link from "next/link";

const MatchTypeCard = ({ color }) => {
  return (
    <Link href={"/category/cs"}>
      <div class="bg-white/5 p-4 rounded-lg">
        <img
          src="https://placehold.co/50x50"
          alt="Classic Match"
          class="w-12 h-12 rounded-full mb-2"
        />
        <h3 class="font-bold">Classic Match</h3>
        <p>7 Matches found</p>
      </div>
    </Link>
  );
};

export default MatchTypeCard;
