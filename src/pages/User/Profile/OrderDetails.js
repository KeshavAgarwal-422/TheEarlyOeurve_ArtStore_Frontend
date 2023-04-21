import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getOrderDetails } from "../../../Actions/orderActions";
import Loading from "../../../components/Loading";

const OrderDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { user } = useSelector((state) => state.user);

  useMemo(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(id));
    
  }, [dispatch, error, id]);

  const address =
    order &&
    `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`;

  return loading ? (
    <Loading />
  ) : (
    <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start gap-[10px] min-w-[420px] text-left text-5xl text-black font-optima-lt-std mq685:flex-col mq685:gap-[0px] mq685:items-center mq685:justify-center">
      <div className="flex-1 box-border h-[900px] flex flex-col  pl-[30px] pt-[30px] items-start gap-[50px] border-[1px] border-solid border-black mq685:flex-[unset] mq685:self-stretch">
        <div className="flex flex-col items-start justify-start gap-[25px]  md:text-lg">
          <div className="relative inline-block text-8xl w-[76px] shrink-0">
            ShippingInfo:
          </div>
          <div className="relative inline-block   shrink-0">
            Name:{user.name}
          </div>
          <div className="relative inline-block   shrink-0">
            Phone No: {order.shippingInfo.phoneNo}
          </div>

          <div className="relative inline-block   shrink-0">
            Address: {address}
          </div>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] md:text-lg">
          <div className="relative inline-block  text-8xl w-[76px] shrink-0">
            PaymentStatus:
          </div>
          <div className="relative inline-block text-green-500  shrink-0">
            {order.paymentInfo.status}
          </div>

          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] md:text-lg">
            <div className="relative inline-block  text-8xl w-[76px] shrink-0">
              OrderStatus:
            </div>
            <div className="relative inline-block   text-green-500 shrink-0">
              {order.orderStatus}
            </div>
          </div>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] md:text-lg">
          <div className="relative inline-block  text-8xl w-[76px] shrink-0">
            OrderSummary:
          </div>

          <div className="relative inline-block   shrink-0">
            Subtotal:{order.itemsPrice} Rs/-
          </div>

          <div className="relative inline-block   shrink-0">
            Shipping: Rs{order.shippingPrice}/-
          </div>

          <div className="relative inline-block   shrink-0">
            GST: Rs{order.taxPrice}/-
          </div>

          <div className="relative inline-block  text-8xl  shrink-0">
            Total: Rs{order.totalPrice}/-
          </div>
        </div>
      </div>
      <div className="flex-1 box-border h-[900px] overflow-y-scroll flex flex-col gap-2  justify-start  border-[1px] border-solid border-black mq685:flex-[unset] mq685:self-stretch">
        {order.orderItems &&
          order.orderItems.map((item, i) => {
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
                      className="w-14 h-12 mt-2 shrink-0 object-cover"
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

export default OrderDetails;
