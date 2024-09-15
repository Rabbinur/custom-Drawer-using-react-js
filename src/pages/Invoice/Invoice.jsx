import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/Container/Container";
import "./Invoice.css";
import logo from "../../assets/logo/mainLogo.png";
import Api from "../../apiClient/ApiClient";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAll } from "../../redux/reduxSlice";
const Invoice = () => {
  const { id } = useParams();
  const [order, setOder] = useState({});
  const getData = async () => {
    const res = await Api.get(`/orders/${id}`);
    console.log(res.data.data);
    setOder(res.data.data);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dispatch(removeAll()));
  }, []);

  const invoiceRef = useRef(null);
  const handlePrint = () => {
    const printContents = invoiceRef.current.innerHTML;
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            ${[...document.styleSheets]
              .map((styleSheet) => {
                try {
                  return [...styleSheet.cssRules]
                    .map((rule) => rule.cssText)
                    .join("");
                } catch (e) {
                  return "";
                }
              })
              .join("")}
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    doc.close();
    iframe.onload = () => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      document.body.removeChild(iframe);
    };
  };

  const dateStr = order?.createdAt;
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  console.log(formattedDate);
  console.log(order);
  useEffect(() => {
    getData();
  }, [id]);
  console.log(order);
  return (
    <div className="bg-[#F7F5EF] py-20 pt-24">
      <div className="  max-w-[1400px] mx-auto " ref={invoiceRef}>
        <div className=" w-full lg:p-8 p-2">
          {/* Invoice Header */}
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Invoice</h1>
              <p className="text-sm text-gray-500"># {order?.invoice_id}</p>
            </div>
            <div>
              <img src={logo} alt="Logo" className="h-16" />
            </div>
          </div>

          {/* Invoice Date and Due Date */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-sm text-gray-500">Invoice Date</p>
              <p className="text-lg font-semibold text-gray-800">
                {formattedDate}
              </p>
            </div>
            {/* <div>
              <p className="text-sm text-gray-500">Due Date</p>
              <p className="text-lg font-semibold text-gray-800">
                7 March, 2023
              </p>
            </div> */}
          </div>

          {/* Billing and Sender Information */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-sm font-medium text-gray-500">From</p>
              <p className="text-lg font-bold text-gray-800">
                Starfleet Alliance
              </p>
              <p className="text-sm text-gray-600">Patranee@gmail.com</p>
              <p className="text-sm text-gray-600">Dhaka, Mirpur</p>
              <p className="text-sm text-gray-600">+8801886-230003</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Billed To</p>
              <p className="text-lg font-bold text-gray-800">
                {order?.customer_name}
              </p>
              <p className="text-sm text-gray-600">{order?.customer_eamil}</p>
              <p className="text-sm text-gray-600">
                {order?.house_nbr},{order?.road_nbr}
              </p>
              <p className="text-sm text-gray-600">
                {order?.area},{order?.Dhaka}
              </p>
              <p className="text-sm text-gray-600">{order?.customer_phone}</p>
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="">
                  <th className="lg:p-4  font-semibold ">Description</th>
                  <th className="lg:p-4 px-2 text-center font-semibold ">
                    Quantity
                  </th>
                  <th className="lg:p-4 px-2 font-medium ">Price</th>
                  <th className="lg:p-4 font-medium  text-end">Amount</th>
                </tr>
              </thead>
              <tbody>
                {order?.product_list?.map((item, i) => (
                  <tr key={i} className="border-t border-black/40">
                    <td className="pt-4 lg:px-4">
                      <div className="flex items-center">
                        <img
                          src={item?.p_ref?.thumb?.url}
                          alt="Item"
                          className="h-18 lg:block print:block hidden  w-18 object-cover mr-4"
                        />
                        <div>
                          <p className="text-gray-800">{item?.p_ref?.title}</p>
                          <p className="text-sm text-gray-500">
                            Size: {item?.size}
                          </p>
                          <p className="text-sm text-gray-500">
                            Color: {item?.color}
                          </p>
                          <p className="text-sm text-gray-500">
                            SKU: {item?.p_ref?.sku}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="lg:p-4 text-center text-gray-800">
                      {item?.quantity}
                    </td>
                    <td className="lg:p-4 text-gray-800">
                      ৳{item?.p_ref?.price - item?.p_ref?.discount}{" "}
                    </td>
                    <td className="lg:p-4  text-gray-800 text-end">
                      {" "}
                      ৳
                      {item?.p_ref?.price * item?.quantity -
                        item?.p_ref?.discount * item?.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          {/* <hr className="" /> */}
          <div className="flex justify-end  border-t border-black/40">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
              <div className="flex justify-between py-2 border-t">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-800">৳{order?.offer_price}</p>
              </div>
              <div className="flex justify-between py-2 border-t">
                <p className="text-gray-600">Shipping </p>
                <p className="text-gray-800">৳{order?.shipping}</p>
              </div>
              <div className="flex justify-between py-2 border-t">
                <p className="text-gray-600">Total</p>
                <p className="text-gray-800">৳{order?.total_price}</p>
              </div>
              <div className="flex justify-between py-2 border-t">
                <p className="text-gray-600">Paid Amount</p>
                <p className="text-gray-800">
                  ৳{order?.paid_amount > 0 ? order?.paid_amount : 0}
                </p>
              </div>
              <div className="flex justify-between py-2 border-t border-b">
                <p className="font-bold text-gray-800">Amount Due</p>
                <p className="font-bold text-gray-800">
                  ৳{order?.total_price - order?.paid_amount}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-gray-700">
              Thank you for your purchase! We hope to serve you again soon.
            </p>
            <div className="mt-2  border-gray-300 pt-2">
              <p className="hidden print:block text-xs text-gray-400 italic">
                Powered by{" "}
                <span className="font-bold text-indigo-500">Weepoka</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <button
          onClick={handlePrint}
          className=" mt-3  border-2 w-fit  border-[#B9A36B] px-5   py-[5px]  rounded-md font-semibold"
        >
          Download Now
        </button>
      </div>
    </div>
  );
};

export default Invoice;
