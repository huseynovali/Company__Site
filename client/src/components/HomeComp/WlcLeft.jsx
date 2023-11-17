import React from "react";

function WlcLeft() {
  return (
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
        <p className="text-sm text-white">No LLC Required, No Credit Check.</p>
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
  );
}

export default WlcLeft;
