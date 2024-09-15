import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
// import Api from "../../Axios/api";
import { Link, useNavigate } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { RiCloseCircleFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaClockRotateLeft } from "react-icons/fa6";
import { delSuggestion, setSuggestions } from "../../redux/reduxSlice";
// import { setSuggestions, delSuggestion } from "../../Redux/reduxSlice";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../apiClient/ApiClient";
import useDebounce from "../../Hook/useDebounce";
const HeaderSearch = ({
  setShow,
  show,
  setSearchValue,
  searchValue,
  setSearchOpen,
}) => {
  const [srPr, setPr] = useState([]);
  const [arr, setArr] = useState([]);
  const [limit, setLimit] = useState(0);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [debouncedValue, setDebouncedValue] = useState(searchValue);

  const suggestions = useSelector((state) => state?.reduxSlice?.setSuggestions);

  const searchProduct = async (mv, text) => {
    if (text === "") {
      return;
    }
    try {
      const res = await Api.get(
        `/products/search?query=${text}&limit=5&page=${mv}`
      );
      setPr(res.data.data.suggestions);
      setPage(res.data.data.paginate.nextPage);
      setLimit(res.data.data.paginate.totalDocs);
      setTimeout(() => {
        setPr([]);
      }, 10000);
      setShow(false);
    } catch (error) {
      console.error(error);
      setShow(false);
    }
  };
  //link to shop page
  const handleShop = () => {
    setPr([]);
  };
  //link to product-details page
  const handleView = () => {
    setPr([]);
  };

  const handleNavigate = () => {
    dispatch(setSuggestions(searchValue));
    setSearchOpen(false);
    setShow(false);
    setSearchValue("");
    navigate("/shop", { state: searchValue });
  };
  // suggestion prev value

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    // searchProduct(1,value)
    setArr(suggestions);
    setShow(true);
  };

  const handleInputFocus = () => {
    setArr(suggestions);
    setShow(true);
  };

  const suggFun = (text) => {
    setSearchValue(text);
    searchProduct(1, text);
  };

  const delSuggList = (suggestion) => {
    dispatch(delSuggestion(suggestion));

    const newarr = arr ? arr?.filter((item) => item !== suggestion) : [];
    setArr(newarr);
  };
  const handleViewProducts = (item) => {
    dispatch(setSuggestions(item?.title));
    navigate(`${item?.link?.shop}/${item?.title}`);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 400);

    return () => clearTimeout(handler);
  }, [searchValue]);
  useEffect(() => {
    if (debouncedValue) {
      searchProduct(1, debouncedValue); // Call searchProduct after debounce
    }
  }, [debouncedValue]);
  return (
    <div>
      <div className="flex bg-white justify-between border-[1px] border-gray-300 w-full rounded-full pl-2 overflow-hidden">
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onClick={handleInputFocus}
          className="w-[90%] outline-none p-1 placeholder:text-sm caret-gray-700 text-gray-400"
          placeholder="Search Here ..."
        />

        <div className="p-1">
          <button
            onClick={handleNavigate}
            className=" bg-[#B9A36B] p-2 rounded-full text-white ont-bold"
          >
            <IoSearch className="md:h-5 md:w-5 h-3 w-3" />
          </button>
        </div>
      </div>
      {srPr?.length > 0 ? (
        <div className="absolute  w-[92%] z-50">
          <div onClick={() => setPr([])} className="flex justify-center">
            <RiCloseCircleFill className="text-red-600 text-xl cursor-pointer" />
          </div>
          <div className="relative  flex flex-col text-gray-700 bg-white shadow-md w-full rounded-t-lg bg-clip-border mt-1">
            <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700 ">
              {srPr?.map((item, i) => (
                <div
                  key={i}
                  role="button"
                  className="flex relative items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <div className="grid mr-4 place-items-center"></div>
                  <div>
                    <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                      {item?.title}
                    </h6>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                      {item?.brand} @ {item?.category}
                    </p>
                    {item?.price && (
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                        {item?.price}tk.
                      </p>
                    )}
                  </div>
                  <div className="flex w-72 justify-end gap-x-20 ">
                    {/* <Link to={`/shop${item?.link?.shop}`}>
                      <FaCartShopping
                        onClick={(e) => {
                          handleShop(item);
                        }}
                        className="text-sky-600 text-2xl"
                      />
                    </Link> */}
                    {/* to={`${item?.link?.shop}/${item?.title} */}
                    <div onClick={() => handleViewProducts(item)}>
                      <GrView
                        onClick={(e) => {
                          handleView(item);
                        }}
                        className="text-[#B9A36B] text-2xl "
                      />
                    </div>
                  </div>
                </div>
              ))}
            </nav>
          </div>
          <button
            onClick={() => {
              searchProduct(page, searchValue);
            }}
            className="text-white bg-[#B9A36B] w-full p-1 rounded-b-lg h-8"
          >
            {limit > srPr?.length
              ? `Showing ${srPr?.length} of ${limit} products. Click here for more results!`
              : `Showing ${limit} products`}
          </button>
        </div>
      ) : (
        show && (
          <div className="absolute  z-50   flex flex-col text-gray-700 bg-white shadow-md w-[92%] rounded-xl bg-clip-border">
            {arr
              ? arr
                  ?.slice()
                  ?.reverse()
                  .map((suggestion, index) => (
                    <nav
                      key={index}
                      className="flex  flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700"
                    >
                      <div
                        onClick={() => suggFun(suggestion)}
                        role="button"
                        className="flex items-center  text-sm w-full p-1 leading-tight transition-all rounded-lg outline-none bg-gray-50/50 text-start text-gray-700 hover:bg-gray-300 hover:bg-opacity-80 hover:text-blue-900 focus:bg-gray-50 focus:bg-opacity-80 focus:text-gray-900 active:bg-gray-50 active:bg-opacity-80 active:text-blue-500"
                      >
                        <p className="flex gap-2 items-center">
                          <FaClockRotateLeft />
                          <span>{suggestion}</span>
                        </p>
                      </div>
                      <div className="grid ml-auto place-items-center justify-self-end absolute right-4 text-red-400">
                        <button
                          onClick={() => delSuggList(suggestion)}
                          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span className="absolute transform -translate-x-1/2 -translate-y-1/2  -mt-2 left-1/2">
                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                              clipRule="evenodd"
                            ></path>
                          </svg> */}
                            <RxCross2 className="text-base" />
                          </span>
                        </button>
                      </div>
                    </nav>
                  ))
              : []}
          </div>
        )
      )}
    </div>
  );
};

export default HeaderSearch;
