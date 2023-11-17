import React, { useState } from "react";
import AzeFlag from "../../assets/AZE.jpg";
import AbdFlag from "../../assets/Abd.svg";
function WlcComp() {
  const [AzeInput, setAzeInput] = useState(100);
  const [UsdInput, setUsdInput] = useState(Math.floor(AzeInput / 1.7));

  const convert = () => {
    setUsdInput(Math.floor(AzeInput / 1.7));
  };

  return (
    <div className="py-[60px] flex">
      <div className="left lg:w-1/2 text-center lg:text-left">
        <div className="p-2 bg-[#262626] rounded-[61px] w-[254px] flex items-center justify-between mb-6 mx-auto lg:mx-0">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.16907 2.16563C6.85588 1.37578 7.86943 0.875 9 0.875C10.1305 0.875 11.144 1.37573 11.8308 2.16551C12.8751 2.09255 13.946 2.45513 14.7455 3.25464C15.545 4.05415 15.9076 5.12507 15.8347 6.16933C16.6243 6.85613 17.125 7.86957 17.125 9C17.125 10.1306 16.6242 11.1443 15.8342 11.8311C15.907 12.8751 15.5444 13.9458 14.7451 14.7452C13.9457 15.5446 12.875 15.9072 11.8309 15.8344C11.1441 16.6242 10.1306 17.125 9 17.125C7.8695 17.125 6.856 16.6243 6.1692 15.8345C5.12493 15.9075 4.054 15.5449 3.25448 14.7454C2.45496 13.9459 2.09238 12.8749 2.16534 11.8307C1.37565 11.1439 0.875 10.1304 0.875 9C0.875 7.86951 1.37571 6.85602 2.16546 6.16921C2.09258 5.12504 2.45517 4.05423 3.25462 3.25478C4.05406 2.45533 5.12489 2.09274 6.16907 2.16563ZM12.0086 7.48827C12.2092 7.20739 12.1442 6.81705 11.8633 6.61642C11.5824 6.41579 11.192 6.48084 10.9914 6.76173L8.29525 10.5364L6.94194 9.18306C6.69786 8.93898 6.30214 8.93898 6.05806 9.18306C5.81398 9.42714 5.81398 9.82286 6.05806 10.0669L7.93306 11.9419C8.06297 12.0719 8.24346 12.138 8.42655 12.1229C8.60964 12.1077 8.7768 12.0128 8.88358 11.8633L12.0086 7.48827Z"
                fill="#CAFF33"
              />
            </svg>
          </div>
          <p className="text-sm text-white">
            No LLC Required, No Credit Check.
          </p>
        </div>
        <p className="text-[28px] lg:text-[38px] text-white lg:pr-9">
          Welcome to YourBank Empowering Your{" "}
          <span className="text-[#CAFF33]">Financial Journey</span>{" "}
        </p>
        <p className="text-[16px] text-[#E4E4E7] lg:pr-10">
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers' needs.
        </p>
        <button className="px-6 py-3 bg-[#CAFF33] rounded-[82px] mt-10">
          Open Account
        </button>
      </div>
      <div className="right">
        <div className="transactions__container p-7 rounded-lg border border-[#262626] relative">
          <div className="flex items-center bg-[#22251B] rounded-lg p-3 absolute -top-7 -left-10">
            <div className="p-[6.5px] bg-[#CAFF33] inline-block rounded-full w-[30px] h-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.41518 4.38867C8.70122 4.38867 8.9331 4.61928 8.9331 4.90375V8.50926H12.5585C12.8446 8.50926 13.0765 8.73986 13.0765 9.02433C13.0765 9.3088 12.8446 9.5394 12.5585 9.5394H8.9331V13.1449C8.9331 13.4294 8.70122 13.66 8.41518 13.66C8.12914 13.66 7.89726 13.4294 7.89726 13.1449V9.5394H4.27183C3.98579 9.5394 3.75391 9.3088 3.75391 9.02433C3.75391 8.73986 3.98579 8.50926 4.27183 8.50926H7.89726V4.90375C7.89726 4.61928 8.12914 4.38867 8.41518 4.38867Z"
                  fill="#1A1A1A"
                />
              </svg>
            </div>
            <div className="pl-2 text-white">
              <p className="text-xs">+ $5000,00</p>
              <p className="text-[#E4E4E7] text-[11px]">Monthly Income</p>
            </div>
          </div>
          <p className="text-white">Your Transactions</p>

          {/*  */}
          <div>
            <div className="flex items-center bg-[#1C1C1C] rounded-lg p-3 border border-[#262626] w-[355px]  mt-3 relative z-10">
              <div className="p-[6.5px] bg-[#CAFF33] inline-block rounded-full w-[30px] h-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7072 1.94287C11.4737 2.19302 11.4882 2.5841 11.7398 2.81638L13.4803 4.42374L6.36197 4.42374C6.01872 4.42374 5.74047 4.70047 5.74047 5.04183C5.74047 5.38319 6.01872 5.65992 6.36197 5.65992L13.4803 5.65992L11.7398 7.26728C11.4882 7.49956 11.4737 7.89064 11.7072 8.14079C11.9408 8.39094 12.334 8.40542 12.5856 8.17314L15.4859 5.49476C15.6126 5.37781 15.6845 5.2137 15.6845 5.04183C15.6845 4.86996 15.6126 4.70585 15.4859 4.5889L12.5856 1.91052C12.334 1.67824 11.9408 1.69273 11.7072 1.94287ZM6.40307 8.53581C6.1695 8.28566 5.77626 8.27118 5.52473 8.50346L2.62438 11.1818C2.49774 11.2988 2.42578 11.4629 2.42578 11.6348C2.42578 11.8066 2.49774 11.9707 2.62438 12.0877L5.52473 14.7661C5.77626 14.9984 6.1695 14.9839 6.40307 14.7337C6.63663 14.4836 6.62207 14.0925 6.37054 13.8602L4.62997 12.2529H11.7483C12.0916 12.2529 12.3698 11.9761 12.3698 11.6348C12.3698 11.2934 12.0916 11.0167 11.7483 11.0167H4.62997L6.37054 9.40932C6.62207 9.17704 6.63663 8.78596 6.40307 8.53581Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
              <div className="pl-2 text-white">
                <p className="text-xs">Transaction</p>
                <p className=" text-sm">
                  Joel Kenley <span className="text-base">-$68.00</span>
                </p>
              </div>
            </div>

            <div className="flex items-center bg-[#1C1C1C] rounded-lg p-3 border border-[#262626] w-[327px] relative -top-7 mx-auto mt-3 opacity-70">
              <div className="p-[6.5px] bg-[#CAFF33] inline-block rounded-full w-[30px] h-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7072 1.94287C11.4737 2.19302 11.4882 2.5841 11.7398 2.81638L13.4803 4.42374L6.36197 4.42374C6.01872 4.42374 5.74047 4.70047 5.74047 5.04183C5.74047 5.38319 6.01872 5.65992 6.36197 5.65992L13.4803 5.65992L11.7398 7.26728C11.4882 7.49956 11.4737 7.89064 11.7072 8.14079C11.9408 8.39094 12.334 8.40542 12.5856 8.17314L15.4859 5.49476C15.6126 5.37781 15.6845 5.2137 15.6845 5.04183C15.6845 4.86996 15.6126 4.70585 15.4859 4.5889L12.5856 1.91052C12.334 1.67824 11.9408 1.69273 11.7072 1.94287ZM6.40307 8.53581C6.1695 8.28566 5.77626 8.27118 5.52473 8.50346L2.62438 11.1818C2.49774 11.2988 2.42578 11.4629 2.42578 11.6348C2.42578 11.8066 2.49774 11.9707 2.62438 12.0877L5.52473 14.7661C5.77626 14.9984 6.1695 14.9839 6.40307 14.7337C6.63663 14.4836 6.62207 14.0925 6.37054 13.8602L4.62997 12.2529H11.7483C12.0916 12.2529 12.3698 11.9761 12.3698 11.6348C12.3698 11.2934 12.0916 11.0167 11.7483 11.0167H4.62997L6.37054 9.40932C6.62207 9.17704 6.63663 8.78596 6.40307 8.53581Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
              <div className="pl-2 text-white">
                <p className="text-xs">Transaction</p>
                <p className=" text-sm">
                  Mark Smith <span className="text-base">-$68.00</span>
                </p>
              </div>
            </div>

            <div className="flex items-center bg-[#1C1C1C] rounded-lg p-3 border border-[#262626] w-[300px] relative -top-14 mx-auto mt-3 opacity-40">
              <div className="p-[6.5px] bg-[#CAFF33] inline-block rounded-full w-[30px] h-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7072 1.94287C11.4737 2.19302 11.4882 2.5841 11.7398 2.81638L13.4803 4.42374L6.36197 4.42374C6.01872 4.42374 5.74047 4.70047 5.74047 5.04183C5.74047 5.38319 6.01872 5.65992 6.36197 5.65992L13.4803 5.65992L11.7398 7.26728C11.4882 7.49956 11.4737 7.89064 11.7072 8.14079C11.9408 8.39094 12.334 8.40542 12.5856 8.17314L15.4859 5.49476C15.6126 5.37781 15.6845 5.2137 15.6845 5.04183C15.6845 4.86996 15.6126 4.70585 15.4859 4.5889L12.5856 1.91052C12.334 1.67824 11.9408 1.69273 11.7072 1.94287ZM6.40307 8.53581C6.1695 8.28566 5.77626 8.27118 5.52473 8.50346L2.62438 11.1818C2.49774 11.2988 2.42578 11.4629 2.42578 11.6348C2.42578 11.8066 2.49774 11.9707 2.62438 12.0877L5.52473 14.7661C5.77626 14.9984 6.1695 14.9839 6.40307 14.7337C6.63663 14.4836 6.62207 14.0925 6.37054 13.8602L4.62997 12.2529H11.7483C12.0916 12.2529 12.3698 11.9761 12.3698 11.6348C12.3698 11.2934 12.0916 11.0167 11.7483 11.0167H4.62997L6.37054 9.40932C6.62207 9.17704 6.63663 8.78596 6.40307 8.53581Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
              <div className="pl-2 text-white">
                <p className="text-xs">Transaction</p>
                <p className=" text-sm">
                  Lenen Roy <span className="text-base">-$68.00</span>
                </p>
              </div>
            </div>
          </div>

          <p className="py-5 text-white text-sm">Money Exchange</p>

          <div className="money__convertor__container border border-[#262626] rounded-lg">
            <div className="flex">
              <div className="aze p-3 w-1/2 border-r-[#262626] border-r-[0.5px]">
                <div className="flex">
                  <img
                    src={AzeFlag}
                    alt="Azerbaijan flag"
                    className="w-[27px] h-[27px] rounded-full"
                  />
                  <span className="pl-2 text-white">AZE</span>
                </div>
                <p className="text-[#E4E4E7] pt-2 text-xs">Azerbaijani Manat</p>
              </div>
              <div className="USD p-3 w-1/2">
                <div className="flex">
                  <img
                    src={AbdFlag}
                    alt="Azerbaijan flag"
                    className="w-[27px] h-[27px] rounded-full"
                  />
                  <span className="pl-2 text-white">USD</span>
                </div>
                <p className="text-[#E4E4E7] pt-2 text-xs">
                  United States Dollar
                </p>
              </div>
            </div>
            <div className="flex border-t-[#262626] border-t-[0.5px] text-white">
              <div className="px-3 py-5 w-1/2 border-r-[#262626] border-r-[0.5px]">
                <input
                  type="text"
                  value={AzeInput}
                  onChange={(e) => setAzeInput(e.target.value)}
                  className="bg-transparent outline-none"
                />
              </div>
              <div className="px-3 py-5 w-1/2">{UsdInput}</div>
            </div>
          </div>

          <button
            className="px-5 py-3 w-full text-[#D1FF4D] bg-[#D1FF4D] bg-opacity-5 mt-5 rounded-[56px]"
            onClick={() => convert()}
          >
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
}

export default WlcComp;
