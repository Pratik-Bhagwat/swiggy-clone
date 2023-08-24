import { FcRating } from "react-icons/fc";

function Card({ src, title, location, rating, menu }) {
  return (
    <div className="flex flex-col w-full hover:cursor-pointer hover:scale-95 transform-scale ease-in duration-200">
      <img src={src} alt="img1" className="object-cover rounded-2xl h-48" />

      <div className="flex flex-col py-2 px-3">
        <h3 className="text-[#414449] font-medium text-lg">{title}</h3>
        <div className="flex items-center gap-1">
          <FcRating />
          <span className="font-medium text-[#414449]">{rating}</span>
        </div>
        <p className="text-[#676A6D]">{menu}</p>
      </div>
    </div>
  );
}
export default Card;
