import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getProducts } from "../../actions/product";
import { Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import {
  Breadcrumb,
  Loader,
  Filters,
  Error,
  NotFound,
  MetaData,
  ProductCategories,
} from "../../components";

// Icons used
import { VscChromeClose } from "react-icons/vsc";
import { MdFirstPage } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiLastPage } from "react-icons/bi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const AllProducts = () => {
  const [filterAccordion, setFilterAccordion] = useState([false, true]);
  const [viewType, setViewType] = useState([true, false]);
  const [isCategorySideBarOpen, setIsCategorySideBarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 5000]);
  const [rating, setRating] = useState(0);
  const [sorting, setSorting] = useState("A-Z");

  const params = useParams();
  const [category, setCategory] = useState(params.category);
  const keyword = params.keyword;

  const dispatch = useDispatch();
  const {
    loading,
    error,
    products,
    productsCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      return showErrorToast(error);
    }
    dispatch(
      getProducts(keyword, currentPage, price, category, rating, sorting)
    );
  }, [dispatch, error, keyword, currentPage, price, category, rating, sorting]);

  const toggleCategorySidebar = () => {
    setIsCategorySideBarOpen(!isCategorySideBarOpen);
  };

  const setCurrentPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const calculateNumOfReviews = (product) => {
    if (product.numOfReviews === 0) {
      return (
        <span className="ml-0 text-gray-500 xsm:text-xs">(No Reviews Yet)</span>
      );
    } else if (product.numOfReviews === 1) {
      return (
        <span className="ml-0 text-gray-500 xsm:text-xs">
          ({product.numOfReviews} Review)
        </span>
      );
    } else {
      return (
        <span className="ml-0 text-gray-500 xsm:text-xs">
          ({product.numOfReviews} Reviews)
        </span>
      );
    }
  };

  const showErrorToast = (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const addDiscount = (min, max, product, view) => {
    const discount = Math.floor(Math.random() * (max - min + 1) + min);
    if (view === "block") {
      return (
        <>
          <span className="mr-1 text-gray-500 xsm:text-xs">
            <del>
              $
              {parseFloat(
                product.price + product.price * (discount / 100)
              ).toFixed(2)}
            </del>
          </span>
          <span className="text-orange-500 2xs:hidden xsm:block xsm:text-xs">
            ({discount}% OFF)
          </span>
        </>
      );
    } else {
      return (
        <>
          <span className="mr-1 text-xs text-gray-500">
            <del>
              $
              {parseFloat(
                product.price + product.price * (discount / 100)
              ).toFixed(2)}
            </del>
          </span>{" "}
          <span className="text-xs text-orange-500">({discount}% OFF)</span>
        </>
      );
    }
  };

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <main>
        <Breadcrumb
          products={products}
          loading={loading}
          category={category}
          setCategory={setCategory}
        />
        {/* -- == Product > Product Name == -- */}
        <section className="px-4 pt-5 sm:px-10 xl:px-24">
          {/* ---------------- */}
          <div className="gap-8 lg:grid lg:grid-cols-4">
            {/* --------- For Mobile device----------- */}
            <div className="mb-10 block lg:hidden">
              <button
                onClick={toggleCategorySidebar}
                className=" flex w-full justify-between rounded bg-gray-100 p-2"
              >
                <span>
                  {isCategorySideBarOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 rotate-180 transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  )}
                </span>
                <span className=" ml-2 font-bold uppercase">
                  All Categories{" "}
                </span>
                <span>
                  {isCategorySideBarOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 rotate-180 transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {/* ---------Mobile Menu----------- */}
              <nav className="absolute right-0 top-0 left-0 z-50">
                {isCategorySideBarOpen && (
                  <>
                    <motion.div
                      initial={{ x: "-100%", duration: 0.5 }}
                      animate={{
                        x: 0,
                      }}
                      exit={{
                        x: "100%",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.4,
                      }}
                      className="fixed top-0 left-0 z-50 h-screen w-72 overflow-y-auto bg-white shadow-2xl"
                    >
                      <div className="my-4 mx-0 flex items-center justify-end p-2">
                        <motion.span
                          whileHover={{ rotate: 90 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="h-7 w-7 cursor-pointer text-primary hover:text-gray-600"
                          onClick={toggleCategorySidebar}
                        >
                          <VscChromeClose className="h-full w-full" />
                        </motion.span>
                      </div>
                      <div className=" w-full font-semibold">
                        {/* ------------ */}
                        <Filters
                          price={price}
                          setPrice={setPrice}
                          filterAccordion={filterAccordion}
                          setFilterAccordion={setFilterAccordion}
                          rating={rating}
                          setRating={setRating}
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                          view="mobile"
                        />
                        {/* ------------ */}
                        <ul className=" divide-y rounded border">
                          {/* ---- */}
                          <li
                            className="flex cursor-pointer items-center justify-between bg-gray-100 p-4"
                            onClick={() =>
                              setFilterAccordion([
                                filterAccordion[0],
                                !filterAccordion[1],
                              ])
                            }
                          >
                            <span className="font-bold uppercase ">
                              All Categories{" "}
                            </span>
                            <span>
                              {filterAccordion[1] ? (
                                <BsChevronUp className="h-4 w-4" />
                              ) : (
                                <BsChevronDown className="h-4 w-4" />
                              )}
                            </span>
                          </li>
                          {filterAccordion[1] && (
                            <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              transition={{
                                type: "slide",
                                bounce: 0.4,
                                duration: 0.5,
                                ease: "easeInOut",
                              }}
                            >
                              {/* -- Category start-- */}
                              <ProductCategories
                                setCategory={setCategory}
                                setCurrentPage={setCurrentPage}
                              />
                            </motion.div>
                          )}
                        </ul>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                      }}
                      onClick={toggleCategorySidebar}
                      className="fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-backdropBlur px-5"
                    />
                  </>
                )}
              </nav>
            </div>
            {/* ---------For desktop---------- */}
            <div className="hidden lg:block">
              {/* ------------ */}
              <Filters
                price={price}
                setPrice={setPrice}
                filterAccordion={filterAccordion}
                setFilterAccordion={setFilterAccordion}
                rating={rating}
                setRating={setRating}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                view="desktop"
              />
              {/* ------------ */}
              <ul className=" divide-y rounded border">
                {/* ---- */}
                <li
                  className="flex cursor-pointer items-center justify-between rounded bg-gray-200 bg-opacity-80 p-3"
                  onClick={() =>
                    setFilterAccordion([
                      filterAccordion[0],
                      !filterAccordion[1],
                    ])
                  }
                >
                  <span className="font-bold uppercase ">All Categories </span>
                  <span>
                    {filterAccordion[1] ? (
                      <BsChevronUp className="h-4 w-4" />
                    ) : (
                      <BsChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </li>
                {filterAccordion[1] && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      type: "slide",
                      bounce: 0.4,
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <ProductCategories
                      setCategory={setCategory}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  </motion.div>
                )}
              </ul>
            </div>
            {/* ---------003---------- */}
            {loading ? (
              <div className="col-span-3">
                <div className="flex h-72 w-full flex-col items-center justify-center">
                  <Loader sizeType="big" />
                </div>
              </div>
            ) : (
              <>
                {/* Error Illustrator */}
                {error && (
                  <div className="col-span-3">
                    <Error />
                  </div>
                )}

                {/* No result Found Illustrator */}
                {products.length === 0 && (
                  <div className="col-span-3">
                    <NotFound errorText="No results found" />
                  </div>
                )}

                {!error && products.length > 0 && (
                  <>
                    <MetaData title={`Eazy Shop`} />
                    <div className=" col-span-3">
                      {/* ----------- */}
                      <div>
                        {/* --------Button----------- */}
                        <div className=" items-center justify-between sm:flex">
                          {/* ----- */}
                          <div className=" flex items-center space-x-1">
                            <div className="mr-2 inline-block">
                              <p>View as: </p>
                            </div>
                            {/* ------- */}
                            <button
                              onClick={() => setViewType([true, false])}
                              className={`${
                                viewType[0] ? "bg-primary" : "bg-gray-600"
                              } inline-block rounded-sm p-1 px-3 font-medium text-white duration-300 focus:outline-none hover:bg-primary`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                              </svg>
                            </button>
                            {/* ------- */}
                            <button
                              onClick={() => setViewType([false, true])}
                              className={`${
                                viewType[1] ? "bg-primary" : "bg-gray-600"
                              } inline-block rounded-sm p-1 px-3 font-medium text-white duration-300 focus:outline-none hover:bg-primary`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                />
                              </svg>
                            </button>
                          </div>
                          {/* ----- */}
                          <div className=" mt-5 flex items-center space-x-1 sm:mt-0">
                            <div className="mr-2 inline-block font-bold">
                              <p>SORT BY: </p>
                            </div>
                            {/* ------- */}
                            <select
                              className="border p-1 px-2 focus:border-gray-500 focus:outline-none"
                              value={sorting}
                              onChange={(event) =>
                                setSorting(event.target.value)
                              }
                            >
                              <option value="A-Z">A to Z</option>
                              <option value="price[Dsc]">
                                Price: Descending
                              </option>
                            </select>
                          </div>
                        </div>

                        {/* --------View Block----------- */}
                        {viewType[0] && (
                          <div
                            className={`grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3`}
                          >
                            {products &&
                              products.map((product) => (
                                <div
                                  key={product._id}
                                  className="flex flex-col justify-evenly bg-gray-200 bg-opacity-30 pb-4"
                                >
                                  {/* ------ */}
                                  <div className="relative">
                                    <Link
                                      to={`/product/${product._id}`}
                                      className="h-full w-full cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-90"
                                    >
                                      <img
                                        className="mx-auto h-full w-full"
                                        src={product.images[0].url}
                                        alt={product.name}
                                      />
                                    </Link>
                                  </div>
                                  {/* ------ */}
                                  <div className="text-center">
                                    {/* --Titile-- */}
                                    <Link
                                      className="px-1 font-medium text-gray-800 line-clamp-2 hover:text-primary"
                                      to={`/product/${product._id}`}
                                    >
                                      {product.name}
                                    </Link>
                                    {/* --Rating-- */}
                                    <div className="flex items-center justify-center space-x-1">
                                      {/* ---- */}
                                      <div className="rating-outer">
                                        <div
                                          className="rating-inner"
                                          style={{
                                            width: `${
                                              (product.ratings / 5) * 100
                                            }%`,
                                          }}
                                        ></div>
                                      </div>
                                      {calculateNumOfReviews(product)}
                                    </div>
                                    {/* --Price-- */}
                                    <div className="flex items-center justify-center">
                                      <span className="mr-2 text-lg font-bold text-primary">
                                        ${parseFloat(product.price).toFixed(2)}
                                      </span>
                                      {addDiscount(30, 55, product, "block")}
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}

                        {/* --------View Line----------- */}
                        {viewType[1] && (
                          <div>
                            {products &&
                              products.map((product) => (
                                <div
                                  key={product._id}
                                  className={`gap-4 border-b p-5 md:grid md:grid-cols-5`}
                                >
                                  {/* <!------> */}
                                  <Link
                                    to={`/product/${product._id}`}
                                    className="relative col-span-2 transition-opacity duration-300 ease-in-out hover:opacity-90"
                                  >
                                    <img
                                      className="mx-auto h-full w-full"
                                      src={product.images[0].url}
                                      alt={product.name}
                                    />
                                  </Link>
                                  {/* <!------> */}
                                  <div className="col-span-3 py-5 md:py-0">
                                    {/* <!--Titile--> */}
                                    <Link
                                      to={`/product/${product._id}`}
                                      className="text-xl font-bold text-gray-800 hover:text-primary"
                                    >
                                      {product.name}
                                    </Link>
                                    {/* --Rating-- */}
                                    <div className="my-2 flex items-center space-x-1">
                                      {/* ---- */}
                                      <div className="rating-outer">
                                        <div
                                          className="rating-inner"
                                          style={{
                                            width: `${
                                              (product.ratings / 5) * 100
                                            }%`,
                                          }}
                                        ></div>
                                      </div>
                                      {calculateNumOfReviews(product)}
                                    </div>
                                    {/* <!--Price--> */}
                                    <div className="my-2 flex items-center">
                                      <span className="mr-2 text-xl font-bold text-primary">
                                        ${parseFloat(product.price).toFixed(2)}
                                      </span>
                                      {addDiscount(30, 55, product, "line")}
                                    </div>
                                    {/* ----Description---- */}
                                    <p className="text-sm leading-loose text-gray-500 line-clamp-4">
                                      {product.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                      {/* ----Pagination---- */}
                      {resPerPage < productsCount &&
                        filteredProductsCount > resPerPage && (
                          <div className="my-4 mb-10 flex w-full items-center justify-center space-x-1">
                            <Pagination
                              activePage={currentPage}
                              itemsCountPerPage={resPerPage}
                              totalItemsCount={filteredProductsCount}
                              onChange={setCurrentPageNumber}
                              firstPageText={
                                <MdFirstPage className="h-5 w-5" />
                              }
                              prevPageText={
                                <IoIosArrowBack className="h-4 w-4" />
                              }
                              nextPageText={
                                <IoIosArrowForward className="h-4 w-4" />
                              }
                              lastPageText={<BiLastPage className="h-5 w-5" />}
                              hideDisabled={true}
                              innerClass="w-full flex justify-center space-x-1"
                              itemClass="w-10 h-8 flex justify-center items-center bg-gray-600 border rounded font-medium text-white hover:bg-primary hover:text-white duration-300"
                              linkClass="w-full h-full flex justify-center items-center"
                              activeClass="bg-primary"
                              activeLinkClass="bg-primary text-white border-primary rounded-sm font-medium hover:bg-primaryDarkShade duration-300"
                            />
                          </div>
                        )}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default AllProducts;
