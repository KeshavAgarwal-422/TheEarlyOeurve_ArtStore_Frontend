import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createOrder, clearErrors } from "../../../Actions/orderActions";
import { BASE_URL } from "../../../Utils/baseURL";
import Loading from "../../../components/Loading";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);

  const { error, loading } = useSelector((state) => state.newOrder);

  const finalOrder = {
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
    shippingInfo,
    user: user._id,
  };

  const checkoutHandler = async (totalPrice) => {
    const {
      data: { key },
    } = await axios.get(`${BASE_URL}/api/payment/getkey`, {
      "Content-Type": "application/json",
    });

    const {
      data: { order },
    } = await axios.post(
      `${BASE_URL}/api/payment/checkout`,
      { totalPrice },
      {
        "Content-Type": "application/json",
      }
    );

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "The Early Oeuvre",
      description: "",
      image:
        "https://i.ibb.co/0Jx2JQ3/119387896-123284702829832-8666968427235121470-n.jpg",

      order_id: order.id,
      handler: async function (response) {
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          `${BASE_URL}/api/payment/paymentverification`,
          { ...data },
          {
            "Content-Type": "application/json",
          }
        );

        finalOrder.paymentInfo = {
          id: result.data.id,
          status: result.data.msg,
        };

        dispatch(createOrder(finalOrder));

        result.data.msg === "Successfull"
          ? navigate(`/ordersuccess?reference=${result.data.id}`)
          : alert("Payment Failed!");
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.phoneNo,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    checkoutHandler(finalOrder.totalPrice);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="flex flex-col gap-20 pt-10 items-center text-8xl text-black font-optima-lt-std min-h-[900px]">
        <label className="cursor-pointer ">Please proceed to payment...</label>

        <button
          className="cursor-pointer [border:none] py-3 pr-3 pl-5 bg-gray-200 rounded-sm w-[350px] flex flex-col box-border items-center justify-center mq685:hover:mix-blend-darken"
          type="button"
          onClick={submitHandler}
        >
          <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
            <div className="relative text-2xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left inline-block  shrink-0">
              Pay Now
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default Payment;
