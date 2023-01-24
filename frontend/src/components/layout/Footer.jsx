import React, { useState } from "react";
import { Link } from "react-router-dom";

import FooterAccordion from "./FooterAccordion";

const Footer = () => {
  const [isFooterAccordionOpen, setIsFooterAccordionOpen] = useState([
    false,
    false,
    false,
  ]);

  return (
    <footer>
      <div className="flex items-center justify-center bg-primary py-5 px-4 sm:flex sm:px-10 xl:px-24">

        <div className="flex items-center justify-center">
          <a
            className="mr-3 rounded-full bg-black bg-opacity-25 p-3 text-white duration-300 hover:bg-white hover:text-twitter"
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-twitter h-4 w-4"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          <a
            className="mr-3 rounded-full bg-black bg-opacity-25 p-3 text-white duration-300 hover:bg-white hover:text-facebook"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="svg-inline--fa fa-facebook-f fa-w-10 h-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </a>
          <a
            className="mr-3 rounded-full bg-black bg-opacity-25 p-3 text-white duration-300 hover:bg-white hover:text-primary"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-instagram h-4 w-4 "
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
          <a
            className="mr-3 rounded-full bg-black bg-opacity-25 p-3 text-white duration-300 hover:bg-white hover:text-youtube"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-youtube h-4 w-4"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </a>
          <a
            className="mr-3 rounded-full bg-black bg-opacity-25 p-3 text-white duration-300 hover:bg-white hover:text-pinterest"
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="svg-inline--fa fa-pinterest-p fa-w-12 h-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <FooterAccordion
        isFooterAccordionOpen={isFooterAccordionOpen}
        setIsFooterAccordionOpen={setIsFooterAccordionOpen}
      />

      <div className="hidden border-t py-5 px-4 sm:px-10 md:grid-cols-2 lg:grid xl:gap-4 xl:px-24">
        <div className="col-span-1 flex flex-col items-center">
          <div className="mb-2">
            <h3 className="text-sm font-bold leading-loose">CONTACT US</h3>
            <div className="h-0.5 w-full bg-primary"></div>
          </div>

          <div className="text-sm">
            <ul className="flex flex-col items-center">
              <li className="mb-4 flex items-center text-gray-500">
                <span className="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill h-4 w-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </span>
                <span className="ml-1"> University Of Isfahan, Iran</span>
              </li>
              <li className="mb-4 flex items-center text-gray-500">
                <div className="flex items-center">
                  <span className="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-telephone-fill h-4 w-4"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                  </span>
                  <span className="ml-1">09134821558</span>
                </div>
              </li>
              <li className="mb-4 flex items-center text-gray-500">
                <div
                  className="flex items-center"
                >
                  <span className="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-envelope h-4 w-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                    </svg>
                  </span>
                  <span className="ml-1">2001erfan1380@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-2">
            <h3 className="text-sm font-bold leading-loose">ALL CATEGORIES</h3>
            <div className="h-0.5 w-full bg-primary"></div>
          </div>

          <div className="text-sm">
            <ul className="flex flex-col items-center">
              <li className="mb-2 text-gray-600">
                <Link to={"/products/Clothing"}>
                  <span className="inline-block">
                    <svg
                      className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2">Clothing</span>
                </Link>
              </li>
              <li className="mb-2 text-gray-600">
                <Link to={"/products/Gadgets"}>
                  <span className="inline-block">
                    <svg
                      className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2">Gadgets</span>
                </Link>
              </li>
              <li className="mb-2 text-gray-600">
                <Link to={"/products/Kitchen"}>
                  <span className="inline-block">
                    <svg
                      className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2">Kitchen</span>
                </Link>
              </li>
              <li className="mb-2 text-gray-600">
                <Link to={"/products/Smartphones"}>
                  <span className="inline-block">
                    <svg
                      className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2">Smartphones</span>
                </Link>
              </li>
              <li className="mb-2 text-gray-600">
                <Link to={"/products/Laptops"}>
                  <span className="inline-block">
                    <svg
                      className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2">Laptops</span>
                </Link>
              </li>
              <li className="mb-2 text-gray-600">
                <Link to={"/products"}>
                  <span className="inline-block">
                    <svg
                      className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2">View All</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" text-center items-center justify-center border-t py-4 px-4 text-xs text-gray-500 sm:px-10 sm:text-sm lg:flex xl:px-24">
        <div className="flex items-center justify-center text-center">
          <p>Designed by Erfan Nourbakhsh & Matin Saffar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
