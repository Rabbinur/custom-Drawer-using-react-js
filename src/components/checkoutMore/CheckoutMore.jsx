import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import getBanner, { getProducts } from "../../Context/ApiServices";
import Typography from "../Typography/Typography";

const CheckoutMore = () => {
  const [banners, setBanner] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getBanner(setBanner, "Image-Category", "category-view");
  }, []);

  // console.log(banners);
  const jeans = banners?.find(
    (item) => item.title.toLowerCase() === "jeans".toLowerCase()
  );
  const pant = banners?.find(
    (item) => item.title.toLowerCase() === "pants".toLowerCase()
  );
  const saree = banners?.find(
    (item) => item.title.toLowerCase() === "saree".toLowerCase()
  );
  const tShirt = banners?.find(
    (item) => item.title.toLowerCase() === "t shirt".toLowerCase()
  );
  const shirt = banners?.find(
    (item) => item.title.toLowerCase() === "shirt".toLowerCase()
  );
  const co = banners?.find(
    (item) => item.title.toLowerCase() === "co-ords and top".toLowerCase()
  );
  const polo = banners?.find(
    (item) => item.title.toLowerCase() === "polo".toLowerCase()
  );
  const jacket = banners?.find(
    (item) => item.title.toLowerCase() === "jacket".toLowerCase()
  );
  const dress = banners?.find(
    (item) => item.title.toLowerCase() === "woman".toLowerCase()
  );
  const hoodie = banners?.find(
    (item) => item.title.toLowerCase() === "hoodie".toLowerCase()
  );
  const sweater = banners?.find(
    (item) => item.title.toLowerCase() === "sweater".toLowerCase()
  );
  const inner = banners?.find(
    (item) => item.title.toLowerCase() === "inner".toLowerCase()
  );
  const kids = banners?.find(
    (item) => item.title.toLowerCase() === "kids".toLowerCase()
  );

  console.log(banners);
  return (
    <div>
      <Container>
        {banners.length > 0 && (
          <>
            <Typography
              variant="h3"
              className={"font-nunito text-[30px] lg:text-[38px]"}
            >
              Checkout More
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2   py-5">
              <div
                className="relative flex flex-col justify-end overflow-hidden lg:h-[60vh] h-[35vh] 
                 px-1 lg:px-8  "
              >
                <div className="group">
                  <img
                    src={jeans?.url?.url}
                    alt={jeans?.title}
                    loading="lazy"
                    className="absolute inset-0
                 w-full block scale-100 transform
                   object-top  opacity-100 transition duration-300 group-hover:scale-110 
                  lg:group-hover:translate-x-5 lg:group-hover:translate-y-7 lg:h-full [60vh] h-[35vh] 
                   object-cover "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div
                    className="absolute bottom-24 z-20 m-0 pb-8 ps-1 
               transition duration-300 ease-in-out
                -translate-y-10 lg:group-hover:-translate-y-20 lg:group-hover:translate-x-3
                translate-x-3 lg:group-hover:scale-110"
                  >
                    <h1 className="font-crimson text-2xl lg:text-[40px] font-bold text-white">
                      {jeans?.title}
                    </h1>
                  </div>
                  <div className="absolute bottom-10 z-20 m-0 pb-4 ps-1 transition duration-300 opacity-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-3">
                    <Link to={`/shop?category=${jeans?.title}`}>
                      <button className="text-base font-nunito bg-white px-5 rounded-md py-2 font-bold text-black shadow-xl">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="relative flex flex-col justify-end overflow-hidden lg:h-[60vh] h-[35vh] 
                 px-1 lg:px-8  "
              >
                <div className="group">
                  <img
                    src={pant?.url?.url}
                    alt={pant?.title}
                    loading="lazy"
                    className="absolute inset-0
                 w-full block scale-100 transform
                   opacity-100 transition duration-300 group-hover:scale-110 
                  lg:group-hover:translate-x-5 lg:group-hover:translate-y-7 lg:h-full [60vh] h-[35vh] 
                   object-cover "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div
                    className="absolute bottom-24 z-20 m-0 pb-8 ps-1 
               transition duration-300 ease-in-out
                -translate-y-10 lg:group-hover:-translate-y-20 lg:group-hover:translate-x-3
                translate-x-3 lg:group-hover:scale-110"
                  >
                    <h1 className="font-crimson text-2xl lg:text-[40px] font-bold text-white">
                      {pant?.title}
                    </h1>
                  </div>
                  <div className="absolute bottom-10 z-20 m-0 pb-4 ps-1 transition duration-300 opacity-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-3">
                    <Link to={`/shop?category=${pant?.title}`}>
                      <button className="text-base font-nunito bg-white px-5 rounded-md py-2 font-bold text-black shadow-xl">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 2nd row */}

              <div
                className="relative flex flex-col justify-end overflow-hidden lg:h-[60vh] h-[35vh] 
                 px-1 lg:px-8  "
              >
                <div className="group">
                  <img
                    src={saree?.url?.url}
                    alt={saree?.title}
                    loading="lazy"
                    className="absolute inset-0
                 w-full block scale-100 transform
                    object-top  opacity-100 transition duration-300 group-hover:scale-110 
                  lg:group-hover:translate-x-5 lg:group-hover:translate-y-7 lg:h-full [60vh] h-[35vh] 
                   object-cover "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div
                    className="absolute bottom-24 z-20 m-0 pb-8 ps-1 
               transition duration-300 ease-in-out
                -translate-y-10 lg:group-hover:-translate-y-20 lg:group-hover:translate-x-3
                translate-x-3 lg:group-hover:scale-110"
                  >
                    <h1 className="font-crimson text-2xl lg:text-[40px] font-bold text-white">
                      {saree?.title}
                    </h1>
                  </div>
                  <div className="absolute bottom-10 z-20 m-0 pb-4 ps-1 transition duration-300 opacity-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-3">
                    <Link to={`/shop?category=${saree?.title}`}>
                      <button className="text-base font-nunito bg-white px-5 rounded-md py-2 font-bold text-black shadow-xl">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-2 grid-flow-col">
                <div
                  className="relative flex flex-col justify-end overflow-hidden  h-[30vh] 
                 px-1 lg:px-8  "
                >
                  <div className="group">
                    <img
                      src={tShirt?.url?.url}
                      alt={tShirt?.title}
                      loading="lazy"
                      className="absolute inset-0
                 w-full block scale-100 transform
                     opacity-100 transition duration-300 group-hover:scale-110 
                  lg:group-hover:translate-x-5 lg:group-hover:translate-y-3  h-[30vh] 
                   object-cover "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div
                      className="absolute bottom-24 z-20 m-0 pb-8 ps-1 
               transition duration-300 ease-in-out
                -translate-y-10 lg:group-hover:-translate-y-20 lg:group-hover:translate-x-3
                translate-x-3 lg:group-hover:scale-110"
                    >
                      <h1 className="font-crimson text-2xl lg:text-[40px] font-bold text-white">
                        {tShirt?.title}
                      </h1>
                    </div>
                    <div className="absolute bottom-10 z-20 m-0 pb-4 ps-1 transition duration-300 opacity-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-3">
                      <Link to={`/shop?category=${tShirt?.title}`}>
                        <button className="text-base font-nunito bg-white px-5 rounded-md py-2 font-bold text-black shadow-xl">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="relative flex flex-col justify-end overflow-hidden  h-[30vh] 
                 px-1 lg:px-8  "
                >
                  <div className="group">
                    <img
                      src={shirt?.url?.url}
                      alt={shirt?.title}
                      loading="lazy"
                      className="absolute inset-0
                 w-full block scale-100 transform
                   opacity-100 transition duration-300 group-hover:scale-110 
                  lg:group-hover:translate-x-5 lg:group-hover:translate-y-3  h-[30vh] 
                   object-cover "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div
                      className="absolute bottom-24 z-20 m-0 pb-8 ps-1 
               transition duration-300 ease-in-out
                -translate-y-10 lg:group-hover:-translate-y-20 lg:group-hover:translate-x-3
                translate-x-3 lg:group-hover:scale-110"
                    >
                      <h1 className="font-crimson text-2xl lg:text-[40px] font-bold text-white">
                        {shirt?.title}
                      </h1>
                    </div>
                    <div className="absolute bottom-10 z-20 m-0 pb-4 ps-1 transition duration-300 opacity-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-3">
                      <Link to={`/shop?category=${shirt?.title}`}>
                        <button className="text-base font-nunito bg-white px-5 rounded-md py-2 font-bold text-black shadow-xl">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3rd  */}
              <div
                className="relative flex flex-col justify-end overflow-hidden lg:h-[60vh] h-[35vh] 
                 px-1 lg:px-8  "
              >
                <div className="group">
                  <img
                    src={co?.url?.url}
                    alt={co?.title}
                    loading="lazy"
                    className="absolute inset-0
                 w-full block scale-100 transform
                     opacity-100 transition duration-300 group-hover:scale-110 
                  lg:group-hover:translate-x-5 lg:group-hover:translate-y-7 lg:h-full [60vh] h-[35vh] 
                   object-cover "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div
                    className="absolute bottom-24 z-20 m-0 pb-8 ps-1 
               transition duration-300 ease-in-out
                -translate-y-10 lg:group-hover:-translate-y-20 lg:group-hover:translate-x-3
                translate-x-3 lg:group-hover:scale-110"
                  >
                    <h1 className="font-crimson text-2xl lg:text-[40px] font-bold text-white">
                      {co?.title}
                    </h1>
                  </div>
                  <div className="absolute bottom-10 z-20 m-0 pb-4 ps-1 transition duration-300 opacity-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-3">
                    <Link to={`/shop?category=${co?.title}`}>
                      <button className="text-base font-nunito bg-white px-5 rounded-md py-2 font-bold text-black shadow-xl">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="relative flex flex-col justify-end overflow-hidden lg:h-[60vh] h-[35vh] 
                 px-1 lg:px-8  "
              >
                <div className="group">
                  <img
                    src={polo?.url?.url}
                    alt={polo?.title}
                    loading="lazy"
                    className="absolute inset-0
                 w-full block scale-100 transform
                   opacity-100 transition duration-300 group-hover:scale-110 
                  lg:group-hover:translate-x-5 lg:group-hover:translate-y-7 lg:h-full [60vh] h-[35vh] 
                   object-cover "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div
                    className="absolute bottom-24 z-20 m-0 pb-8 ps-1 
               transition duration-300 ease-in-out
                -translate-y-10 lg:group-hover:-translate-y-20 lg:group-hover:translate-x-3
                translate-x-3 lg:group-hover:scale-110"
                  >
                    <h1 className="font-crimson text-2xl lg:text-[40px] font-bold text-white">
                      {polo?.title}
                    </h1>
                  </div>
                  <div className="absolute bottom-10 z-20 m-0 pb-4 ps-1 transition duration-300 opacity-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-3">
                    <Link to={`/shop?category=${polo?.title}`}>
                      <button className="text-base font-nunito bg-white px-5 rounded-md py-2 font-bold text-black shadow-xl">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 4rth */}
              <div
                className="relative flex flex-col justify-end overflow-hidden lg:h-[60vh] h-[35vh] 
                 px-1 lg:px-8  "
              >
                <div className="group">
                  <img
                    src={dress?.url?.url}
                    alt={dress?.title}
                    loading="lazy"
                    className="absolute inset-0
                 w-full block scale-100 transform
                     opacity-100 transition duration-300 group-hover:scale-110 
                  lg:group-hover:translate-x-5 lg:group-hover:translate-y-7 lg:h-full [60vh] h-[35vh] 
                   object-cover "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div
                    className="absolute bottom-24 z-20 m-0 pb-8 ps-1 
               transition duration-300 ease-in-out
                -translate-y-10 lg:group-hover:-translate-y-20 lg:group-hover:translate-x-3
                translate-x-3 lg:group-hover:scale-110"
                  >
                    <h1 className="font-crimson text-2xl lg:text-[40px] font-bold text-white">
                      {dress?.title}
                    </h1>
                  </div>
                  <div className="absolute bottom-10 z-20 m-0 pb-4 ps-1 transition duration-300 opacity-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-3">
                    <Link to={`/shop?category=${dress?.title}`}>
                      <button className="text-base font-nunito bg-white px-5 rounded-md py-2 font-bold text-black shadow-xl">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-2 grid-flow-col">
                <div
                  className="relative flex flex-col justify-end overflow-hidden  h-[30vh] 
                 px-1 lg:px-8  "
                >
                  <div className="group">
                    <img
                      src={hoodie?.url?.url}
                      alt={hoodie?.title}
                      loading="lazy"
                      className="absolute inset-0
                 w-full block scale-100 transform
                     opacity-100 transition duration-300 group-hover:scale-110 
                  lg:group-hover:translate-x-5 lg:group-hover:translate-y-3  h-[30vh] 
                   object-cover "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div
                      className="absolute bottom-24 z-20 m-0 pb-8 ps-1 
               transition duration-300 ease-in-out
                -translate-y-10 lg:group-hover:-translate-y-20 lg:group-hover:translate-x-3
                translate-x-3 lg:group-hover:scale-110"
                    >
                      <h1 className="font-crimson text-2xl lg:text-[40px] font-bold text-white">
                        {hoodie?.title}
                      </h1>
                    </div>
                    <div className="absolute bottom-10 z-20 m-0 pb-4 ps-1 transition duration-300 opacity-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-3">
                      <Link to={`/shop?category=${hoodie?.title}`}>
                        <button className="text-base font-nunito bg-white px-5 rounded-md py-2 font-bold text-black shadow-xl">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="relative flex flex-col justify-end overflow-hidden  h-[30vh] 
                 px-1 lg:px-8  "
                >
                  <div className="group">
                    <img
                      src={sweater?.url?.url}
                      alt={sweater?.title}
                      loading="lazy"
                      className="absolute inset-0
                 w-full block scale-100 transform
                   opacity-100 transition duration-300 group-hover:scale-110 
                  lg:group-hover:translate-x-5 lg:group-hover:translate-y-3  h-[30vh] 
                   object-cover "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div
                      className="absolute bottom-24 z-20 m-0 pb-8 ps-1 
               transition duration-300 ease-in-out
                -translate-y-10 lg:group-hover:-translate-y-20 lg:group-hover:translate-x-3
                translate-x-3 lg:group-hover:scale-110"
                    >
                      <h1 className="font-crimson text-2xl lg:text-[40px] font-bold text-white">
                        {sweater?.title}
                      </h1>
                    </div>
                    <div className="absolute bottom-10 z-20 m-0 pb-4 ps-1 transition duration-300 opacity-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-3">
                      <Link to={`/shop?category=${sweater?.title}`}>
                        <button className="text-base font-nunito bg-white px-5 rounded-md py-2 font-bold text-black shadow-xl">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default CheckoutMore;
