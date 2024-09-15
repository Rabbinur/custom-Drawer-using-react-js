import { useEffect, useState } from "react";
import getBanner from "../../Context/ApiServices";
import { Link } from "react-router-dom";
const Sale = () => {
  const [saleImage, setSaleImage] = useState([]);
  // console.log(saleImage);
  useEffect(() => {
    getBanner(setSaleImage, "Image-Theme", "Home-Middle");
  }, []);
  return (
    <div className="py-20">
      {saleImage.length > 0 && (
        <div
          className="relative isolate 
    flex flex-col justify-end overflow-hidden 
     h-[35vh] lg:h-[65vh] px-1 lg:px-8 pb-8"
        >
          <div className="group">
            {saleImage && (
              <img
                src={saleImage[0]?.url?.url}
                loading="lazy"
                alt="Sale image"
                className="animate-fade-in 
              absolute inset-0  w-full 
                   block scale-100 transform object-center
                   opacity-100 transition duration-300 
                   group-hover:scale-110 
                   lg:group-hover:translate-x-10 
                   group-hover:translate-y-7 lg:h-[65vh] 
                   h-[35vh]  object-cover"
              />
            )}
            <div
              className="absolute inset-0 
        bg-gradient-to-t from-gray-900 via-gray-900/40"
            ></div>

            <div
              className="absolute bottom-24 z-20 m-0 pb-8 ps-1
                 transition duration-300 
                 ease-in-out -translate-y-10 lg:group-hover:-translate-y-20
         lg:group-hover:translate-x-3 lg:group-hover:scale-110"
            >
              <h1
                className="font-crimson text-2xl lg:text-[40px]
                   font-bold text-white"
              >
                {saleImage[0]?.title}
              </h1>
            </div>
            <div
              className="absolute bottom-14 z-20 m-0 pb-4 ps-1
                 transition duration-300  
                 ease-in-out -translate-y-8  lg:group-hover:-translate-y-18
                lg:group-hover:translate-x-8 
                 
                 lg:group-hover:scale-110"
            >
              <h1
                className="font-nunito text-base 
                   font-bold text-white"
              >
                {saleImage[0]?.description?.slice(0, 100)}...
              </h1>
            </div>
            <div
              className="absolute bottom-10 z-20 m-0 pb-4 ps-1 
                 transition duration-300 opacity-0
                 ease-in-out group-hover:opacity-100 
                 group-hover:translate-x -3"
            >
              <Link to="/shop">
                <button
                  className="text-base font-nunito bg-white px-5 
                     rounded-md py-2 font-bold text-black shadow-xl"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sale;
