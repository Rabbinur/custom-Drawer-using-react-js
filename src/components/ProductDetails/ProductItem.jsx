import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./PrductItem.css";

import { useDispatch } from "react-redux";
import { LuPackageOpen } from "react-icons/lu";
import Container from "../Container/Container";
import TypeIcon from "../Icon/TypeIcon";

import { HiMiniQuestionMarkCircle } from "react-icons/hi2";

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/reduxSlice";
const ProductItem = ({ data, setActiveSection }) => {
  const [mainImage, setMainImage] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState("");
  const [activeColorSize, setActiveColorSize] = useState(null);
  const [transform, setTransform] = useState({
    translateX: 0,
    translateY: 0,
    scale: 1,
  });
  const [quantity, setQuantity] = useState(1);
  // console.log("dddddd", data);
  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const x = e.pageX - container.offsetLeft;
    const y = e.pageY - container.offsetTop;
    const translateX = (containerWidth / 2 - x) * 2;
    const translateY = (containerHeight / 2 - y) * 2;
    const scale = 1.6;
    setTransform({ translateX, translateY, scale });
  };

  const handleMouseLeave = () => {
    setTransform({ translateX: 0, translateY: 0, scale: 1 });
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    setMainImage(data?.url[index].url);
  };

  let handleView = () => {
    setActiveSection("specification");
    document
      .getElementById("details-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  const dispatch = useDispatch();

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...data,
      quantity,
    };
    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    if (data?.url && data?.url.length > 0) {
      setMainImage(data?.url[0]?.url);
    }
  }, [data?.url]);

  // set sizes
  let sizes = [];
  try {
    sizes = JSON.parse(data?.size || "[]");
  } catch (error) {
    console.error("Error parsing sizes:", error);
  }

  const cartItem = {
    ...data,
    selectedSize: selectedSize,
    selectColor: activeColorSize,
  };

  const handleSizeClick = (value, name) => {
    if (name == "size") {
      setSelectedSize(value);
    }

    // else if (name == "color") {
    //   setActiveColorSize(value);
    // }
  };

  const size2 = [];
  return (
    <>
      <div className="details md:py-20 pt-24 font-nunito py-10  bg-[#fafafa] px-2.5 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-screen pt-10 ">
            <div className="thumbnail-viewer z-999 lg:sticky top-0 pt-10">
              <div
                className="mainImage overflow-hidden  border px-2"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={mainImage}
                  alt=""
                  style={{
                    transform: `translate(${transform.translateX}px, ${transform.translateY}px) scale(${transform.scale})`,
                  }}
                />
              </div>
              <div className="thumbnail pt-5">
                {data?.url?.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnailBox ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img src={image?.url} alt="52" />
                  </div>
                ))}
              </div>
            </div>

            <div className="  lg:p-5 z-999">
              <h2 className="md:text-4xl text-2xl text-ash font-medium first-letter:capitalize py-2.5">
                {data?.title}
              </h2>
              <p className="text-justify py-5">
                <span className="font-bold"> Description:</span>
                <p> {data?.description?.slice(0, 500)}</p>
                <span
                  onClick={handleView}
                  className="text-primary cursor-pointer"
                >
                  {" "}
                  View More
                </span>
              </p>
              <p className="py-5">
                {data?.discount > 0 ? (
                  <div className="flex">
                    <span
                      className="text-xl 
                     flex items-center justify-center  text-slate-900"
                    >
                      Price:
                      <TypeIcon type="taka" />
                      <span className="font-bold">
                        {" "}
                        {data?.price - data?.discount}
                      </span>
                    </span>
                    <span className="text-sm flex items-center   text-slate-900 line-through ml-2">
                      <TypeIcon type="taka" /> {data?.price}
                    </span>
                  </div>
                ) : (
                  <span className="text-xl flex items-center font-bold text-slate-900">
                    Price: <TypeIcon type="taka" />
                    {data?.price}
                  </span>
                )}
              </p>{" "}
              <p
                className="text-base flex flex-wrap text-start 
               text-lightash  "
              >
                <span>
                  <span className=""> Category:</span>
                  <span className="text-ash font-bold px-2.5">
                    {" "}
                    {data?.category}{" "}
                  </span>
                </span>{" "}
              </p>
              <p className="pt-1">
                <span className=""> Status:</span>
                <span className="text-ash ">
                  {" "}
                  {data?.stock > 1 ? (
                    <span
                      className="text-ash px-2.5 font-semibold bg-[#dbdbdc] rounded-xl
                       text-secondary"
                    >
                      {" "}
                      In Stock
                    </span>
                  ) : (
                    <span
                      className="text-ash px-2.5 font-semibold bg-[#dbdbdc] rounded-xl
                      text-secondary"
                    >
                      Out Of Stock
                    </span>
                  )}
                </span>
              </p>
              <p className="text-base text-start  text-lightash  py-1">
                <span className=""> Squ:</span>
                <span className="text-ash px-2.5"> {data?.sku}</span>
              </p>
              <div className="flex">
                <p className="text-base text-start  text-lightash  py-1">
                  Brand:
                  <span className="text-ash px-2.5"> {data?.brand}</span>
                </p>
              </div>
              {data?.color?.length > 0 && (
                <p
                  className="text-base text-start flex flex-col
               text-lightash py-1"
                >
                  <span className=""> Colors:</span>
                  <span className="text-ash pt-2">
                    {data?.color?.map((color, index) => (
                      <span
                        key={index}
                        // onClick={() => handleSizeClick(color, "color")}
                        className={`inline-block w-[2rem] h-[2rem]  rounded-[0.25rem] mr-2 ${
                          activeColorSize === color
                            ? `border-4 ${
                                activeColorSize === "black"
                                  ? "border-green-500"
                                  : "border-black"
                              } `
                            : ""
                        }`}
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </span>
                </p>
              )}
              <div className="fl ex  py-2 gap-2 lg:px-0 items-center">
                <p className="pb-2"> Quantity:</p>
                <div className="flex  py-2 gap-2 lg:px-0 items-center">
                  <button
                    onClick={handleDecrease}
                    className="px-2  md:py-[5px] py-[1px] bg-white text-gray-700 font-bold rounded-md hover:bg-slate-50"
                  >
                    <FaMinus></FaMinus>
                  </button>
                  <input
                    type="text"
                    value={quantity || 1}
                    readOnly
                    className="md:w-20 w-14 md:py-[1.5px] md:h-full h-[20px] text-center rounded-md border  border-gray-200 focus:outline-none"
                  />
                  <button
                    onClick={handleIncrease}
                    className="px-2 md:py-[5px] py-[1px] bg-white text-gray-700 font-bold rounded-md hover:bg-slate-50"
                  >
                    <FaPlus></FaPlus>
                  </button>
                </div>
              </div>
              {data?.size?.length > 0 && (
                <div className="flex items-center justify-between">
                  <div className="py-4">
                    <h6 className="mb-2 text-sm font-semibold uppercase">
                      Choose a size :
                    </h6>
                    <div className="space-x-2 space-y-1">
                      {data?.size?.map((size, index) => (
                        <button
                          key={index}
                          onClick={() => handleSizeClick(size, "size")}
                          className={`px-2 py-1 font-bold
                           uppercase rounded lg:px-3 lg:py-2
                            hover:bg-black hover:text-white
                             border-[1px] border-[#ccc]
                              cursor-pointer transition-all 
                              duration-300 ${
                                selectedSize === size
                                  ? "bg-gray-900 text-white"
                                  : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white   font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                              }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div>
                {error && !selectedSize ? (
                  <p className="my-2 text-xs font-semibold text-red-600 uppercase">
                    {error}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col gap-6 lg:flex-row lg:px-10 justify-center items-center mx-auto py-5">
                {data?.stock > 0 && (
                  <div className="w-full lg:w-1/2 px-2">
                    <button
                      className={`w-full md:w-52 lg:w-48 text-sm lg:text-base text-black py-2 hover px-2 rounded border border-accent font-bold ${
                        selectedSize || activeColorSize
                          ? "bg-transparent text-black"
                          : "text-black"
                      }`}
                      onClick={() => {
                        // Check if both size and color are empty
                        if (
                          data?.size?.length <= 0 &&
                          data?.color?.length <= 0
                        ) {
                          handleAddToCart(); // Add to cart if no size and color options are present
                          return;
                        }

                        // If only size is present but not selected
                        if (data?.size?.length > 0 && !selectedSize) {
                          setError("Choose a size first");
                          return;
                        }

                        // If only color is present but not selected
                        // if (data?.color?.length > 0 && !activeColorSize) {
                        //   setError("Choose a color first");
                        //   return;
                        // }

                        // If both size and color are present but not selected
                        if (
                          data?.size?.length > 0 &&
                          !selectedSize
                          // ||
                          // (data?.color?.length > 0 && !activeColorSize)
                        ) {
                          setError("Choose a size  first");
                          return;
                        }

                        // Proceed to add to cart if all conditions are met
                        // dispatch(addToCart(cartItem));
                        handleAddToCart();
                      }}
                    >
                      {/* Button text logic */}
                      {data?.size?.length <= 0 && data?.color?.length <= 0
                        ? "Add to Cart"
                        : !selectedSize && data?.size?.length > 0
                        ? // ||
                          //   (!activeColorSize && data?.color?.length > 0)
                          "Choose a size "
                        : "Add to Cart"}
                    </button>
                  </div>
                )}
              </div>
              <div>
                <div>
                  <h1 className="flex font-nunito text-[18px]  items-center gap-3">
                    <span className="bg-[#dbdbdc] p-1 rounded-full">
                      {" "}
                      <LuPackageOpen />{" "}
                    </span>
                    30 days return package{" "}
                    <div className="has-tooltip relative">
                      <HiMiniQuestionMarkCircle />
                      <span
                        className="tooltip  rounded shadow-xl p-1 w-52
                       bg-gray-800 text-white mt-0 right-10 "
                      >
                        You can exchange your products. if you are not use and
                        not wash and crash and etc..
                      </span>
                    </div>
                  </h1>
                </div>
                {data?.thumb && (
                  <div className="pt-10  ">
                    <div className="has-tooltip relative">
                      <img
                        src={data?.thumb?.url}
                        alt="Size Chart"
                        className="object-cover "
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductItem;
