import React from "react";

import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const OrderConfirm = () => {
  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  console.log(shippingInfo);
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  console.log(cartItems);
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/orderpayment");
  };

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start gap-[10px] min-w-[420px] text-left text-5xl text-black font-optima-lt-std mq685:flex-col mq685:gap-[0px] mq685:items-center mq685:justify-center">
      <div className="flex-1 box-border h-[900px] flex flex-col  pl-[30px] pt-[30px] items-start gap-[100px] border-[1px] border-solid border-black mq685:flex-[unset] mq685:self-stretch">
        <div className="flex flex-col items-start justify-start gap-[25px]  md:text-lg">
          <div className="relative inline-block text-8xl w-[76px] shrink-0">
            ShippingInfo
          </div>
          <div className="relative inline-block   shrink-0">
            Name:{user.name}
          </div>
          <div className="relative inline-block   shrink-0">
            Phone No: {shippingInfo.phoneNo}
          </div>

          <div className="relative inline-block   shrink-0">
            Address: {address}
          </div>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] md:text-lg">
          <div className="relative inline-block  text-8xl w-[76px] shrink-0">
            OrderSummary
          </div>

          <div className="relative inline-block   shrink-0">
            Subtotal: Rs{subtotal}/-
          </div>

          <div className="relative inline-block   shrink-0">
            Shipping: Rs{shippingCharges}/-
          </div>

          <div className="relative inline-block   shrink-0">GST: Rs{tax}/-</div>

          <div className="relative inline-block  text-8xl  shrink-0">
            Total: Rs{totalPrice}/-
          </div>
        </div>

        <button
          className="cursor-pointer [border:none] py-3 pr-3 pl-5 bg-gray-200 rounded-sm w-[350px] flex flex-col box-border items-center justify-center mq685:hover:mix-blend-darken"
          type="submit"
          onClick={proceedToPayment}
        >
          <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
            <div className="relative text-2xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left inline-block w-[65px] shrink-0">
              Payment
            </div>
          </div>
        </button>
      </div>
      <div className="flex-1 box-border h-[900px] overflow-y-scroll flex flex-col gap-2  justify-start  border-[1px] border-solid border-black mq685:flex-[unset] mq685:self-stretch">
        {cartItems &&
          cartItems.map((item, i) => {
            return (
              <>
                <Link
                  className="no-underline text-black"
                  to={`/productinfo/${item._id}`}
                >
                  <div className="flex justify-between align-start   p-3 box-border  border-[1px] border-solid border-black ">
                    <img
                      src={item.image}
                      alt=""
                      className="w-14 h-12 mt-2 shrink-0 object-contain"
                    />
                    <h2 className=" text-5xl">{item.name}</h2>
                    <h2 className=" text-5xl">Rs {item.price}</h2>
                    <h2 className=" text-5xl">{item.quantity}</h2>
                  </div>
                </Link>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default OrderConfirm;
