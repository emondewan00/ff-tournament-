const MatchTypeCard = ({color}) => {
  return (
    <div class="bg-red-500 p-4 rounded-lg">
      <img
        src="https://placehold.co/50x50"
        alt="Classic Match"
        class="w-12 h-12 rounded-full mb-2"
      />
      <h3 class="font-bold">Classic Match</h3>
      <p>7 Matches found</p>
    </div>
  );
};

export default MatchTypeCard;
