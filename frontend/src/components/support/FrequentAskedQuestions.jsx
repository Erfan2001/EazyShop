import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { FcAbout } from "react-icons/fc";

const FrequentAskedQuestions = () => {
  // window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <main>
      {/* <!--------------Breadcrumb-----------------------> */}
      <div className="flex items-center px-4 pt-6 text-sm font-medium uppercase text-gray-500 sm:px-10 xl:px-24">
        {/* <!--------------> */}
        <Link className="flex items-center hover:text-primary" to={"/"}>
          <span>
            <FcAbout className="mr-1 h-4 w-4" />
          </span>
          <span>ABOUT US</span>
        </Link>
        {/* <!--------------> */}
        <span className="mx-1 mt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        {/* <!--------------> */}
        <Link
          to={"/faq"}
          className="cursor-pointer tracking-widest text-gray-400"
        >
          FAQ
        </Link>
      </div>
      {/* <!--------------Breadcrumb End-----------> */}
      {/* <!-- == FAQ == --> */}
      <section className="mt-2 px-4 sm:px-10 xl:px-24">
        {/* <!------001-------> */}
        <div>
          {/* <!-----> */}
          <div className="mt-8 mb-4">
            <h4 className=" text-2xl font-bold tracking-tighter text-gray-700">
              Delivery
            </h4>
          </div>
          {/* <!-------Accrodion----------> */}
          <div className="mb-1">
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-primary text-white" : "bg-gray-100 text-black"
                    } relative flex h-10 w-full items-center rounded px-4 font-semibold duration-300 focus:outline-none hover:bg-primary hover:text-white`}
                  >
                    <span>I want the replacement to a different address.</span>
                    {open && (
                      <span className="absolute -bottom-1 left-9 z-10 h-3 w-3 rotate-45 transform bg-primary"></span>
                    )}
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-300 ease-in-out transform"
                    enterFrom="-translate-y-1 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-in-out transform"
                    leaveFrom="translate-y-0 opacity-100"
                    leaveTo="-translate-y-1 opacity-0"
                  >
                    <Disclosure.Panel className="relative overflow-hidden transition-all duration-500">
                      <div className="bg-gray-100 p-4 text-gray-500">
                        <span>
                          If you'd like to get the replacement item to a
                          different address, we recommend that you return the
                          item for a refund and place a new order to the updated
                          address.
                        </span>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        {/* <!------002-------> */}
        <div className="mt-2 mb-20 sm:mb-40">
          {/* <!-----> */}
          <div className="mt-8 mb-4">
            <h4 className=" text-2xl font-bold tracking-tighter text-gray-700">
              Payment
            </h4>
          </div>
          {/* <!-------Accrodion----------> */}
          <div className="mb-1">
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-primary text-white" : "bg-gray-100 text-black"
                    } relative flex h-10 w-full items-center rounded px-4 font-semibold duration-300 focus:outline-none hover:bg-primary hover:text-white`}
                  >
                    <span>Do you offer technical support?</span>
                    {open && (
                      <span className="absolute -bottom-1 left-9 z-10 h-3 w-3 rotate-45 transform bg-primary"></span>
                    )}
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-300 ease-in-out transform"
                    enterFrom="-translate-y-1 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-in-out transform"
                    leaveFrom="translate-y-0 opacity-100"
                    leaveTo="-translate-y-1 opacity-0"
                  >
                    <Disclosure.Panel className="relative overflow-hidden transition-all duration-500">
                      <div className="bg-gray-100 p-4 text-gray-500">
                        <span>
                          No Sorry..., We don't charge anything for listing
                          the products. However, upon a successful sale, the
                          seller has to incur a small amount of charge as a
                          marketplace fee.
                        </span>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FrequentAskedQuestions;
