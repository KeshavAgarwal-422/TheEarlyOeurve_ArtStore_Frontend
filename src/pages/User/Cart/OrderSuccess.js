import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const seachQuery = useSearchParams()[0];
  const referenceNum = seachQuery.get("reference");

  localStorage.setItem("cartItems", JSON.stringify([]));

  return (
    <div className="flex flex-col gap-20 pt-10 items-center text-8xl text-black font-optima-lt-std min-h-[900px]">
      <label className="cursor-pointer ">Order Placed Successfully!</label>
      <label className="cursor-pointer ">Id: {referenceNum}</label>

      <button
        className="cursor-pointer [border:none] py-3 pr-3 pl-5 bg-gray-200 rounded-sm w-[350px] flex flex-col box-border items-center justify-center mq685:hover:mix-blend-darken"
        type="button"
        onClick={() => navigate("/")}
      >
        <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
          <div className="relative text-2xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left inline-block  shrink-0">
            Continue Browsing...
          </div>
        </div>
      </button>
    </div>
  );
};

export default OrderSuccess;
