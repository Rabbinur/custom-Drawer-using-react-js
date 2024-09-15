import { useEffect, useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import "./Cart.css";

import nogod from "../../assets/payment/nogod.png";
import bkash from "../../assets/payment/bkash.png";
import visa from "../../assets/payment/visa.png";
import master from "../../assets/payment/master.png";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/reduxSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state?.reduxSlice?.product);
  console.log({ cartProducts });
  const [mainTotalPrice, setMainTotalPrice] = useState(0);
  const [mainDiscountTotalPrice, setMainDiscountTotalPrice] = useState(0);
  useEffect(() => {
    if (!cartProducts || cartProducts.length <= 0) {
      navigate("/shop");
      return;
    }
  }, [cartProducts]);
  useEffect(() => {
    const calculatedMainTotalPrice = cartProducts?.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0);

    const calculatedMainDiscountTotalPrice = cartProducts?.reduce(
      (prev, item) => {
        return prev + item.discount * item.quantity;
      },
      0
    );

    setMainTotalPrice(calculatedMainTotalPrice);
    setMainDiscountTotalPrice(calculatedMainDiscountTotalPrice);
  }, [cartProducts]);
  console.log(mainDiscountTotalPrice);
  return (
    <div className="bg-[#F7F5EF] py-20 ">
      <div className=" flex justify-between xl:container  xl:px-10 px-4  mx-auto lg:flex-row flex-col gap-7 py-10">
        {/* whish list card section */}
        <div className="lg:w-[65%] w-full space-y-6 ">
          {cartProducts?.map((item, i) => (
            <div key={i} className=" element rounded-lg ">
              <div className="flex  lg:gap-4 gap-3  ">
                <div className="w-[14rem] lg:w-[16rem]    md:gap-4 flex items-center md:h-[14rem] h-[13rem]">
                  <div className="lg:block hidden ">
                    <RxCross1
                      onClick={() => dispatch(removeFromCart(item._id))}
                      className="text-2xl  cursor-pointer font-bold"
                    />
                  </div>
                  <div className=" w-[15rem]">
                    <img
                      className=" w-full h-[13rem]  md:rounded-none  rounded-tl-lg "
                      src={item?.url[0]?.url}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-1  w-full">
                  <h1 className="flex w-full  gap-1 justify-between">
                    <h2 className="md:text-2xl line-clamp-3    md:py- font-semibold">
                      {item?.title}
                    </h2>
                    <h2 className="py-1 px-2 ">
                      {" "}
                      <RxCross1
                        onClick={() => dispatch(removeFromCart(item._id))}
                        className="text-sm lg:hidden block cursor-pointer  font-bold"
                      />
                    </h2>
                  </h1>

                  <div className="flex gap-3 ">
                    <div>
                      {item?.selectedSize && (
                        <p className="lg:pt-1.5 md:text-base text-sm">
                          Size : {item?.selectedSize}
                        </p>
                      )}
                      {item?.selectColor && (
                        <p className="lg:pt-1 md:text-base text-sm">
                          Color : {item?.selectColor}
                        </p>
                      )}
                    </div>
                  </div>

                  <h2 className="flex  py-2 gap-2 lg:px-0 items-center">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item?._id))}
                      className="px-2  md:py-[5px] py-[1px] bg-white text-gray-700 font-bold rounded-md hover:bg-slate-50"
                    >
                      <FaMinus></FaMinus>
                    </button>
                    <input
                      type="text"
                      value={item?.quantity}
                      readOnly
                      className="md:w-20 w-14 md:py-[1.5px] md:h-full h-[20px] text-center rounded-md border  border-gray-200 focus:outline-none"
                    />
                    <button
                      onClick={() => dispatch(increaseQuantity(item?._id))}
                      className="px-2 md:py-[5px] py-[1px] bg-white text-gray-700 font-bold rounded-md hover:bg-slate-50"
                    >
                      <FaPlus></FaPlus>
                    </button>
                  </h2>

                  <div className="flex justify-between   md:gap-8 md:flex-row flex-col ">
                    {
                      <p className="font-norma md:text-base text-sm">
                        Discount:{" "}
                        <span className="mr-2  font-medium">
                          ৳{item?.discount}
                        </span>
                      </p>
                    }
                    <h2 className=" md:pt-0 py-1 md:text-base jus  text-sm items-center">
                      <span className="lg:hidden ">Price: </span>
                      {item?.discount > 0 && (
                        <span className="line-through ml-1   text-gray-500">
                          {" "}
                          ৳{item?.price}
                        </span>
                      )}
                      {
                        <span className="font-semibold">
                          {" "}
                          ৳{item?.price - item?.discount}
                        </span>
                      }
                    </h2>
                  </div>

                  <p className="md:mb-2 pb-1 font-norma md:text-base text-sm">
                    SKU : {item?.sku}
                  </p>
                </div>
              </div>

              <p
                className="font-medium md:text-base hidden text-sm blo ck
               p-2 md:hidden"
              >
                Available for immediate delivery , delivery time (domestic)
                approx. 5-7 working days
              </p>
            </div>
          ))}
        </div>

        {/* line */}
        <div className="hidden  items- mt-24 lg:flex ">
          <div className="h-[300px] border-l border-[1px] border-[#989898]"></div>
        </div>
        {/* check out page */}

        <div className="p-4 h-fit lg:w-[30%]  w-full  border bg-white rounded-md">
          <h2 className="text-lg font-semibold ">Total Cost</h2>
          <hr className=" border-gray-400 my-2" />
          <div className="space-y-2 mt-3">
            {cartProducts?.map((item, i) => {
              console.log(item);
              return (
                <div key={i} className="flex justify-between">
                  <div className="font-medium flex items-center gap-2">
                    {item?.title}
                    <span>
                      <RxCross2 />
                    </span>
                    <span>{item?.quantity}</span>
                  </div>
                  <div className="text-right">
                    {/* <span className="line-through text-gray-500">
    <span className="font-bold ">৳</span>
    {item?.totalDiscountPrice}
  </span> */}
                    <span className="ml-2 font-semibold text-black">
                      <span className="font-bold t">৳</span>
                      {item?.totalPrice - item?.discount * item?.quantity}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* <div className="flex justify-between pt-2">
              <div>Shipping</div>
              <div className="font-semibold text-black">
                <span className="font-bold text-xl">৳</span>40.00
              </div>
            </div> */}
          </div>

          <div className="my-4 border-b"></div>

          <div className="flex justify-between mb-4">
            <div className="font-semibold text-black">Total amount</div>
            <div className="font-semibold text-black">
              {" "}
              {/* <span className="line-through text-gray-500">
                <span className="font-bold ">৳</span>
                {mainDiscountTotalPrice}
              </span> */}
              <span className="ml-2 font-semibold text-black">
                <span className="font-bold t">৳</span>
                {mainTotalPrice - mainDiscountTotalPrice}
              </span>
            </div>
          </div>

          <div className="text-sm text-green-600 mb-4">
            <p
              className="font-medium md:text-base text-sm
                  "
            >
              Available for immediate delivery , delivery time (domestic)
              approx. 5-7 working days
            </p>
          </div>

          <div className="mb-4">
            <div className="text-sm font-semibold mb-2">We Support</div>
            <div className="flex justify-between items-center  mt-3 space-x-2">
              <img src={master} alt="Mastercard" />
              <img src={visa} alt="Visa" />
              <img src={bkash} alt="bkash" className="h-[2.5rem]" />
              <img src={nogod} alt="PayPal" className="h-[4.5rem] " />
            </div>
          </div>

          <div className="flex w-full justify-center">
            <Link
              to="/check-out"
              className=" mt-3  border-2 w-fit  border-gray-600 px-5   py-[4px]  rounded-md font-semibold"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
