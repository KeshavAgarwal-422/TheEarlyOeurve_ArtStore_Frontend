import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import { myOrders } from "../../../Actions/orderActions";
import { useEffect } from "react";
import { clearErrors } from "../../../Actions/orderActions";
import OrderDetails from "./OrderDetails";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.myOrders);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, error]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {orders.length === 0 ? (
        <div className="flex justify-center align-middle  pt-10 text-8xl text-black font-optima-lt-std min-h-[900px]">
          No Orders Yet...
        </div>
      ) : (
        orders &&
        orders.map((order, i) => {
          const utcDate = new Date(order.createdAt);
          const istDate = utcDate.toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
          });

          return (
            <Link className="no-underline " to={`/orderdetails/${order._id}`}>
              <div className="flex flex-row cursor-pointer items-center justify-between text-2xl m-10 pr-3 text-gray-200 font-optima-lt-std border-[1px] border-solid border-grey-201 mq685:flex-col mq685:gap-3 mq685:p-5">
                <div className="flex flex-row gap-4 m-2">
                  <img
                    className="relative w-14 h-14 shrink-0 object-cover"
                    alt=""
                    src="../Task.svg"
                  />
                  <div className="flex flex-col items-start justify-start gap-[3px]">
                    <div className="relative leading-[24px]">{order._id}</div>
                    <div className="relative text-base leading-[16px] text-dimgray-100">
                      TotalItems: {order.__v}
                    </div>
                    <div className="relative text-base leading-[16px] text-dimgray-100">
                      TotalAmount: {order.totalPrice}
                    </div>
                  </div>
                </div>
                <div className="relative leading-[24px] text-green-500">
                  {order.orderStatus}
                </div>
                <div className="relative leading-[24px]">{istDate}</div>
              </div>
            </Link>
          );
        })
      )}
    </>
  );
};

export default MyOrders;
