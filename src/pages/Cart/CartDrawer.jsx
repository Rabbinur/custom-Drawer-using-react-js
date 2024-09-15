import { useState } from "react";

const CartDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="fixed top-1/2 right-3 z-99999">
      {/* Button to toggle the drawer */}
      <div className="text-center relative h-16">
        <button
          className="py-2.5 px-2 text-xs bg-[#c3af82] text-white rounded cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-indigo-700"
          onClick={toggleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </button>
        <span className="absolute size-6 right-0 -top-2 rounded-full bg-black text-white">
          {"1 "}
        </span>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Drawer Content */}
      <div
        className={`fixed inset-y-0 right-0 w-64
             bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-999999 ${
               isDrawerOpen ? "translate-x-0 z-999999" : "translate-x-full"
             }`}
      >
        <div className="relative h-full">
          <h2 className="text-gray-900 text-lg font-semibold leading-7 pt-6 pl-4">
            Notification
          </h2>
          <p className="text-gray-500 text-sm font-normal leading-snug pl-4">
            Drawer notification panel
          </p>

          <button
            type="button"
            onClick={toggleDrawer}
            aria-controls="drawer-left-example"
            className="absolute top-6 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          {/* Drawer content */}
          <div className="py-6 px-4 overflow-y-auto h-full">
            {/* Example notification */}
            <div className="flex gap-3 mb-4">
              <img
                src="https://pagedone.io/asset/uploads/1704349514.png"
                alt="Hailey"
                className="w-12 h-12"
              />
              <div>
                <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">
                  Hailey Garza{" "}
                  <span className="text-gray-500">
                    added new tags to Ease Design System
                  </span>
                </h5>
                <h6 className="text-gray-500 text-xs font-normal leading-[18px]">
                  Account | Friday, 10:03 AM
                </h6>
              </div>
            </div>
            {/* Additional notifications */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
