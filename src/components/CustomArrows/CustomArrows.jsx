import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const CustomPrevArrow = ({ onClick }) => (
  <MdOutlineKeyboardArrowLeft
    className={`absolute top-1/2  transform -translate-y-1/2
     right-24 text-2xl bg-secondary rounded-full
      p-1 text-white cursor-pointer z-10 animate- move`}
    onClick={onClick}
    size={40}
  />
);

const CustomNextArrow = ({ onClick }) => (
  <MdKeyboardArrowRight
    className={`absolute  top-1/2 transform 
     -translate-y-1/2 right-10 text-2xl bg-secondary
      rounded-full p-1 text-white cursor-pointer z-10 animate- move `}
    onClick={onClick}
    size={40}
  />
);

export { CustomPrevArrow, CustomNextArrow };
