import Link from "next/link";

const MatchTypeCard = ({ color, data, href }) => {
  const { title, onGoings, image, cardOrder } = data || {};
  return (
    <Link
      href={href}
      style={{
        order: cardOrder,
      }}
    >
      <div className={`bg-white/10 p-4 rounded-lg backdrop-blur-md`}>
        <img src={image} alt={title} className="w-12 h-12 rounded-full mb-2" />
        <h3 className="font-bold">{title}</h3>
        <p>{onGoings ? onGoings : 0} Matches found</p>
      </div>
    </Link>
  );
};

export default MatchTypeCard;
