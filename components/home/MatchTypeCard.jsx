import Link from "next/link";

const MatchTypeCard = ({ color, data }) => {
  const { title, onGoings, image, _id, cardOrder } = data || {};
  return (
    <Link
      href={`/category/${_id}`}
      style={{
        order: cardOrder,
      }}
    >
      <div class={`bg-white/5 p-4 rounded-lg`}>
        <img src={image} alt={title} class="w-12 h-12 rounded-full mb-2" />
        <h3 class="font-bold">{title}</h3>
        <p>{onGoings ? onGoings : 0} Matches found</p>
      </div>
    </Link>
  );
};

export default MatchTypeCard;
