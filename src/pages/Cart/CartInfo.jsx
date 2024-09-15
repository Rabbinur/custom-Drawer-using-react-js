import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import { useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../apiClient/ApiClient";
import { area } from "../../constants/area";
import "./Cart.css";
const CartInfo = () => {
  const [selectedOption, setSelectedOption] = useState("Home");

  const cartProducts = useSelector((state) => state?.reduxSlice?.product);
  const [mainTotalPrice, setMainTotalPrice] = useState(0);
  const navigate = useNavigate();
  const [mainDiscountTotalPrice, setMainDiscountTotalPrice] = useState(0);

  const [formData, setFormData] = useState({
    customer_eamil: "",
    first_name: "",
    last_name: "",
    customer_phone: "+880",
    city: "",
    country: "Bangladesh",
    area: "",
    house_nbr: "",
    road_nbr: "",
    post_code: "",
    address: "",
  });
  const user = useSelector((state) => state.auth.user);
  console.log("user", user);
  ///shipping
  const [shippingInfo, setShippingInfo] = useState({});
  const getShippingInfo = async () => {
    try {
      const res = await Api.get("/shipping");
      setShippingInfo(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const product_list = cartProducts.map((product) => ({
    p_ref: product?._id,
    quantity: product?.quantity || 1,
    color: product?.color[0] || "",
    size: product?.size[0] || "",
  }));
  console.log(typeof product_list[0].quantity);
  console.log(product_list);
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "customer_phone") {
      if (value.startsWith("+880")) {
        setFormData({
          ...formData,
          [name]: value,
        });
      } else {
        setFormData({
          ...formData,
          [name]: "+880" + value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async () => {
    // Check if any field is empty
    const bangladeshPhoneRegex = /^\+8801[3-9]\d{8}$/;

    for (const key in formData) {
      if (formData[key].trim() === "") {
        toast.error("All input fields are required");
        return;
      }
    }

    if (!bangladeshPhoneRegex.test(formData.customer_phone)) {
      toast.error("Invalid Bangladeshi phone number");
      return;
    }
    const customer_name = `${formData.first_name} ${formData.last_name}`;
    const updatedFormData = {
      ...formData,
      product_list: product_list,
      customer_name: customer_name,
      email: formData.customer_eamil,
      effective_delivery: selectedOption,
    };

    try {
      const result = await Api.post("/orders", updatedFormData);
      console.log(result);
      if (result.status === 201) {
        navigate(`/payment/${result.data.data._id}`);
      }
    } catch (error) {
      console.error(error);
    }
    // navigate("/");
    // setFormData({
    //   customer_name: '',
    //   customer_email: '',
    //   customer_phone: '',
    //   city: '',
    //   country: '',
    //   area: '',
    //   house_nbr: '',
    //   road_nbr: '',
    //   post_code: '',
    //   address: '',
    // });
  };

  useEffect(() => {
    const calculatedMainTotalPrice = cartProducts?.reduce(
      (prev, next) => prev + next.totalPrice,
      0
    );
    const calculatedMainDiscountTotalPrice = cartProducts?.reduce(
      (prev, next) => prev + next.totalDiscountPrice,
      0
    );
    setMainTotalPrice(calculatedMainTotalPrice);
    setMainDiscountTotalPrice(calculatedMainDiscountTotalPrice);
  }, [cartProducts]);
  useEffect(() => {
    getShippingInfo();
  }, []);
  return (
    <div className="bg-[#F7F5EF]  py-30">
      <div className="  xl:container  mx-auto ">
        {/*      //////////////////////////////////////////////first line/////////////////////////////////////////////                                                */}
        <div className="flex lg:pb-10 pb-4 pt-2 items-center justify-center space-x-4 ">
          {/* Step 1 */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6  flex items-center justify-center bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-900 font-medium flex">
              <span className="sm:block hidden">Shopping</span> Cart
            </span>
          </div>

          {/* Separator */}
          <div className="w-8 h-px bg-gray-300"></div>

          {/* Step 2 */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-gray-800 text-white rounded-full">
              <span className="text-sm">2</span>
            </div>
            <span className="text-gray-900 font-medium">Address</span>
          </div>

          {/* Separator */}
          <div className="w-8 h-px bg-gray-300"></div>

          {/* Step 3 */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full">
              <span className="text-sm">3</span>
            </div>
            <span className="text-gray-900 font-medium">Step</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-10 lg:p-6 p-5 gap-6 bg-[#F5F5EF] text-[#333]">
          {/* Shipping Address Form */}
          <div className="lg:w-[60%]">
            <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
            <hr className="border-gray-400 w-[65%] mb-4" />
            {/* ////////////////////////// */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 lg:py-4 py-2">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Input Full Name"
                  defaultValue={user?.first_name || ""}
                  // value={formData.first_name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#d1b970] focus:ring-2 focus:ring-[#d6d6d6]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter Full Name"
                  defaultValue={user?.last_name || ""}
                  // value={formData.last_name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#d1b970] focus:ring-2 focus:ring-[#d6d6d6]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="customer_eamil"
                  placeholder="Enter  Email"
                  defaultValue={user?.email || ""}
                  // value={formData.customer_eamil}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#d1b970] focus:ring-2 focus:ring-[#d6d6d6]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="customer_phone"
                  placeholder="Enter Number"
                  // defaultValue={user?.phone|| ""}
                  value={formData.customer_phone}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#d1b970] focus:ring-2 focus:ring-[#d6d6d6]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  value="Bangladesh"
                  onChange={handleChange}
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 focus:border-[#d1b970] focus:ring-2 focus:ring-[#d6d6d6]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 custom-scrollbar border border-gray-300 rounded-md focus:border-[#d1b970] focus:ring-2 focus:ring-[#d6d6d6]"
                >
                  <option value="">Select City</option>
                  {area.map((item, i) => (
                    <option key={i} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Area/Thana/Upozilla
                </label>
                <input
                  type="text"
                  name="area"
                  placeholder="Enter  Area/Thana/Upozilla"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border  border-gray-300 rounded-md focus:border-[#d1b970] focus:ring-2 focus:ring-[#d6d6d6]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  House Number
                </label>
                <input
                  type="text"
                  name="house_nbr"
                  placeholder="Input Your House Number"
                  value={formData.house_nbr}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#d1b970] focus:ring-2 focus:ring-[#d6d6d6]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Road Number</label>
                <input
                  type="text"
                  name="road_nbr"
                  placeholder="Enter Road Number"
                  value={formData.road_nbr}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#d1b970] focus:ring-2 focus:ring-[#d6d6d6]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Post Code</label>
                <input
                  type="number"
                  name="post_code"
                  placeholder="Input Your Post Code"
                  value={formData.post_code}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#d1b970] focus:ring-2 focus:ring-[#d6d6d6]"
                />
              </div>
              <div className="lg:col-span-2 sm:col-span-2">
                <label className="block text-sm font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Input Address"
                  // value={formData.address}
                  defaultValue={user?.address || ""}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-[#d1b970] focus:ring-2 focus:ring-[#d6d6d6]"
                />
              </div>
            </div>

            {/* Effective Delivery */}
            <div className=" items-center">
              <div className="text-left w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-2">Effective Delivery</h1>
                <hr className="border-gray-400 mb-4" />
                <div className="flex space-x-4 py-2">
                  <label className="flex items-center w-52 p-4 bg-white rounded-md shadow-sm cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="Home"
                      checked={selectedOption === "Home"}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="form-radio text-indigo-600 "
                    />
                    <span className="ml-2 text-gray-800">Home</span>
                  </label>
                  <label className="flex items-center px-3  w-52 bg-white rounded-md shadow-sm cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="Office"
                      checked={selectedOption === "Office"}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="form-radio text-indigo-600 h-4 w-4"
                    />
                    <span className="ml-2 text-gray-800">Office</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:w-[40%] w-full mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <hr className="border-gray-500/40 border-dashed mb-4" />
            <div className="space-y-4">
              {cartProducts?.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center gap-4  pb-2"
                >
                  <div className="w-32 h-[7rem] ">
                    <img
                      className="w-full h-full mb-2 md:mb-0"
                      src={item?.url[0]?.url}
                      alt="Product"
                    />
                  </div>
                  <div className="flex w-full justify-between gap-5">
                    <div className="">
                      <p className=" font-semibold">{item?.title}</p>
                      <div className="flex gap-3 py-1">
                        {item?.selectedSize && (
                          <p className=" md:text-base text-sm">
                            Size : {item?.selectedSize}
                          </p>
                        )}
                        {item?.selectColor && (
                          <p className=" md:text-base text-sm">
                            Color : {item?.selectColor}
                          </p>
                        )}
                      </div>
                      <p className="text-sm font-medium">
                        Quantity: {item?.quantity}
                      </p>
                      <p className="text-sm mt-1">SKU: {item?.sku}</p>
                    </div>
                    <div className="text-right">
                      {item?.discount > 0 && (
                        <p className="line-through"> ৳{item?.totalPrice}</p>
                      )}
                      <p className="font-semibold">
                        ৳{item?.totalPrice - item?.discount * item?.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <hr className="border-gray-500/40 border-dashed  " />
              <div className=" ">
                <div className="flex justify-between">
                  <span className="font-semibold">Total value of goods</span>
                  <span className="font-semibold">
                    {" "}
                    <span>৳{mainTotalPrice - mainDiscountTotalPrice}</span>
                  </span>
                </div>
                <div className="flex justify-between mb-3 pt-2">
                  <span>Shipping</span>
                  <span className="flex items-center gap-1">
                    {formData.city && (
                      <span className="text-green-700 text-sm">
                        <FaPlus />
                      </span>
                    )}
                    {formData.city ? (
                      formData.city.toLowerCase() === "dhaka" ? (
                        <span>৳{shippingInfo?.in_dhaka}</span>
                      ) : (
                        <span>৳{shippingInfo?.out_dhaka}</span>
                      )
                    ) : (
                      "Select Area"
                    )}
                  </span>
                </div>

                <hr className="border-gray-500/40 border-dashed  mb-4" />
                <div className="flex justify-between font-bold text-lg mt-2">
                  <span>Total Cost</span>
                  <span>
                    ৳
                    {mainTotalPrice -
                      mainDiscountTotalPrice +
                      (formData.city
                        ? formData.city.toLowerCase() === "dhaka"
                          ? shippingInfo?.in_dhaka
                          : shippingInfo?.out_dhaka
                        : 0)}
                  </span>
                </div>
              </div>
              <div className="mt-4 ">
                <p className="flex items-center gap-2 py-2">
                  <span className="bg-[#D9D9D9] p-[5px] rounded-full">
                    <TbTruckReturn className="text-xl " />
                  </span>{" "}
                  <span className="text-lg font-semibold">
                    {" "}
                    30 days return package
                  </span>
                </p>
                <p className=" mt-2 flex items-center gap-2">
                  <span className="bg-[#D9D9D9] p-[5px] rounded-full ">
                    <MdOutlinePayment className="text-xl " />
                  </span>{" "}
                  <span className="text-lg font-semibold">
                    Visa, MasterCard, Nogod, bkash, Rocket, Upay, Mcash
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* <div></div> */}
        </div>
        <div className="flex justify-around">
          <Link
            to={"/cart"}
            className="mt-6 px-4 py-2 text-black border border-gray-400/50 font-bold rounded-md"
          >
            Go Back
          </Link>
          <button
            onClick={handleSubmit}
            className="mt-6 px-4 py-2 bg-[#000] text-white rounded-md"
          >
            Place an Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
