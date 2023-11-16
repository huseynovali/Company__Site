import React from "react";
import Container from "../Container";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#1C1C1C] py-[60px]">
      <Container>
        <div className="flex flex-col items-center">
          <div className="logo pb-10">
            <Link to={"/"} className="logo ">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="footer__links pb-10">
            <ul className="flex">
              <li className={`  text-[#E4E4E7] `}>
                <Link className="text-sm py-[10px] px-4 block" to={"/"}>
                  Home
                </Link>
              </li>
              <li className=" text-[#E4E4E7]">
                <Link className="text-sm py-[10px] px-4 block">Careers</Link>
              </li>
              <li className=" text-[#E4E4E7]  ">
                <Link className="text-sm py-[10px] px-4 block">About</Link>
              </li>
              <li className=" text-[#E4E4E7] ">
                <Link className="text-sm py-[10px] px-4 block">Security</Link>
              </li>
            </ul>
          </div>
          <div className="contact__address flex py-10  border-y border-y-[#262626] w-full justify-center">
            <div className="mail flex text-[#E4E4E7] items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M1.75 7.22425V14.375C1.75 15.7557 2.86929 16.875 4.25 16.875H16.75C18.1307 16.875 19.25 15.7557 19.25 14.375V7.22425L11.8102 11.8026C11.0067 12.297 9.99327 12.297 9.18976 11.8026L1.75 7.22425Z"
                    fill="#CAFF33"
                  />
                  <path
                    d="M19.25 5.75652V5.625C19.25 4.24429 18.1307 3.125 16.75 3.125H4.25C2.86929 3.125 1.75 4.24429 1.75 5.625V5.75652L9.84488 10.738C10.2466 10.9852 10.7534 10.9852 11.1551 10.738L19.25 5.75652Z"
                    fill="#CAFF33"
                  />
                </svg>
              </div>
              <span className="-translate-y-0.5 px-0.5 ">
                hello@skillbirdge.com
              </span>
            </div>

            <div className="phone flex text-[#E4E4E7] items-center pl-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.75 3.75C1.75 2.36929 2.86929 1.25 4.25 1.25H5.39302C6.11 1.25 6.73498 1.73796 6.90887 2.43354L7.83037 6.11952C7.98284 6.72942 7.75495 7.37129 7.25202 7.74849L6.174 8.557C6.06206 8.64096 6.03772 8.7639 6.06917 8.84974C7.01542 11.4329 9.0671 13.4846 11.6503 14.4308C11.7361 14.4623 11.859 14.4379 11.943 14.326L12.7515 13.248C13.1287 12.7451 13.7706 12.5172 14.3805 12.6696L18.0665 13.5911C18.762 13.765 19.25 14.39 19.25 15.107V16.25C19.25 17.6307 18.1307 18.75 16.75 18.75H14.875C7.62626 18.75 1.75 12.8737 1.75 5.625V3.75Z"
                    fill="#CAFF33"
                  />
                </svg>
              </div>
              <span className="-translate-y-0.5 px-0.5 ">
                +91 91813 23 2309
              </span>
            </div>

            <div className="phone flex text-[#E4E4E7] items-center pl-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.1165 18.6259C10.1416 18.6405 10.1614 18.6517 10.1754 18.6596L10.1987 18.6726C10.3844 18.7745 10.6148 18.7738 10.8007 18.6729L10.8246 18.6596C10.8386 18.6517 10.8584 18.6405 10.8835 18.6259C10.9339 18.5967 11.0058 18.5542 11.0963 18.4985C11.2771 18.3872 11.5323 18.223 11.8372 18.0076C12.4459 17.5776 13.2581 16.9395 14.0721 16.1061C15.6922 14.4474 17.375 11.9551 17.375 8.75C17.375 4.95304 14.297 1.875 10.5 1.875C6.70304 1.875 3.625 4.95304 3.625 8.75C3.625 11.9551 5.30777 14.4474 6.92788 16.1061C7.74188 16.9395 8.55409 17.5776 9.16282 18.0076C9.46771 18.223 9.72295 18.3872 9.90375 18.4985C9.99419 18.5542 10.0661 18.5967 10.1165 18.6259ZM10.5 11.25C11.8807 11.25 13 10.1307 13 8.75C13 7.36929 11.8807 6.25 10.5 6.25C9.11929 6.25 8 7.36929 8 8.75C8 10.1307 9.11929 11.25 10.5 11.25Z"
                    fill="#CAFF33"
                  />
                </svg>
              </div>
              <span className="-translate-y-0.5 px-0.5 ">
                Somewhere in the World
              </span>
            </div>
          </div>
          <div className="end mt-10 bg-[#1A1A1A] border border-[#262626] w-full p-3 rounded-[82px] flex items-center justify-between">
            <div className="social flex">
              <div className="face p-3 bg-[#CAFF33] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_108_2734)">
                    <path
                      d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                      fill="#262626"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_108_2734">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="twit p-3 bg-[#CAFF33] rounded-full mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6.2918 18.1249C13.8371 18.1249 17.9652 11.8721 17.9652 6.45143C17.9652 6.27565 17.9613 6.09596 17.9535 5.92018C18.7566 5.33943 19.4496 4.62009 20 3.79596C19.2521 4.12871 18.458 4.34603 17.6449 4.44049C18.5011 3.9273 19.1421 3.1211 19.4492 2.17135C18.6438 2.64868 17.763 2.98539 16.8445 3.16705C16.2257 2.50951 15.4075 2.07414 14.5164 1.92825C13.6253 1.78237 12.711 1.93409 11.9148 2.35996C11.1186 2.78583 10.4848 3.46213 10.1115 4.2843C9.73825 5.10648 9.64619 6.02872 9.84961 6.90846C8.21874 6.82662 6.62328 6.40296 5.16665 5.66496C3.71002 4.92696 2.42474 3.89108 1.39414 2.62448C0.870333 3.52758 0.710047 4.59625 0.945859 5.61329C1.18167 6.63033 1.79589 7.51942 2.66367 8.09987C2.01219 8.07918 1.37498 7.90378 0.804688 7.58815V7.63893C0.804104 8.58667 1.13175 9.50537 1.73192 10.2389C2.3321 10.9723 3.16777 11.4753 4.09687 11.6624C3.49338 11.8275 2.85999 11.8515 2.2457 11.7327C2.50788 12.5477 3.01798 13.2606 3.70481 13.7718C4.39164 14.283 5.22093 14.567 6.07695 14.5842C4.62369 15.7258 2.82848 16.345 0.980469 16.3421C0.652739 16.3416 0.325333 16.3215 0 16.2819C1.87738 17.4863 4.06128 18.126 6.2918 18.1249Z"
                    fill="#262626"
                  />
                </svg>
              </div>

              <div className="linkedin p-3 bg-[#CAFF33] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_108_2740)">
                    <path
                      d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                      fill="#262626"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_108_2740">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="text-[#B3B3B3] text-sm">
              YourBank All Rights Reserved
            </p>
            <div className="text-[#B3B3B3] flex items-center">
              <p>Privacy Policy</p>
              <span className="block px-1">|</span>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
