import React, { useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearErrors,
  getOrderDetails,
  updateOrder,
} from "../../../Actions/orderActions";

import Loading from "../../../components/Loading";
import { UPDATE_ORDER_RESET } from "../../../Constants/orderConstants";

const ProcessOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState();

  const { id } = useParams();
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.order);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateOrder(id, selectedOption));
    navigate("/admin/allorders");
  };

  //useMemo is similar  to useEffect but renders before return
  useMemo(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert("Order Updated Successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(id));
  }, [dispatch, error, updateError, isUpdated]);

  return loading ? (
    <Loading />
  ) : (
    order && (
      <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start gap-[10px] min-w-[420px] text-left text-5xl text-black font-optima-lt-std mq685:flex-col mq685:gap-[0px] mq685:items-center mq685:justify-center">
        <div className="flex-1 box-border h-[900px] flex flex-col  pl-[30px] pt-[30px] items-start gap-[46px] border-[1px] border-solid border-black mq685:flex-[unset] mq685:self-stretch">
          <div className="flex flex-col items-start justify-start gap-[32px]  md:text-lg">
            <div className="relative inline-block text-8xl w-[76px] shrink-0">
              ShippingInfo
            </div>
            <div className="relative inline-block  shrink-0">
              Name: {order.user}
            </div>
            <div className="relative inline-block   shrink-0">
              Phone: {order.shippingInfo.phoneNo}
            </div>
            <div className="relative inline-block   shrink-0">
              Address: {order.shippingInfo.address}
            </div>

            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] md:text-lg">
              <div className="relative inline-block  text-8xl w-[76px] shrink-0">
                PaymentStatus
              </div>
              <div className="relative inline-block text-green-500  shrink-0">
                {order.paymentInfo.status}
              </div>
              <div className="relative inline-block  text-8xl  shrink-0">
                Amount: {order.totalPrice}
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px] md:text-lg">
                <div className="relative inline-block  text-8xl w-[76px] shrink-0">
                  OrderStatus
                </div>
                <div className="relative inline-block   text-green-500 shrink-0">
                  {order.orderStatus}
                </div>
                <form
                  className="self-stretch flex flex-col items-start justify-start  gap-0 md:text-lg"
                  onSubmit={handleSubmit}
                >
                  <div className="relative inline-block  text-8xl w-[76px] shrink-0">
                    ProcessOrder
                  </div>
                  <ul class="items-center list-none  w-full pl-0   text-black sm:flex">
                    <li class="w-full">
                      <div class="flex items-center ">
                        <input
                          id="horizontal-list-radio-processing"
                          type="radio"
                          name="selectedOption"
                          class="w-4 h-4 text-black focus:ring-gray-900focus:ring-2"
                          value="processing"
                          checked={selectedOption === "Processing"}
                          onChange={() => setSelectedOption("Processing")}
                        />
                        <label
                          for="horizontal-list-radio-processing"
                          class="w-full py-3 ml-2 text-sm  text-black"
                        >
                          Processing{" "}
                        </label>
                      </div>
                    </li>
                    <li class="w-full">
                      <div class="flex items-center ">
                        <input
                          id="horizontal-list-radio-shipped"
                          type="radio"
                          name="selectedOption"
                          class="w-4 h-4 text-black focus:ring-gray-900focus:ring-2"
                          value="shipped"
                          checked={selectedOption === "Shipped"}
                          onChange={() => setSelectedOption("Shipped")}
                        />
                        <label
                          for="horizontal-list-radio-shipped"
                          class="w-full py-3 ml-2 text-sm  text-black"
                        >
                          Shipped{" "}
                        </label>
                      </div>
                    </li>
                    <li class="w-full">
                      <div class="flex items-center">
                        <input
                          id="horizontal-list-radio-delivered"
                          type="radio"
                          name="selectedOption"
                          class="w-4 h-4 text-black focus:ring-gray-900focus:ring-2"
                          value="delivered"
                          checked={selectedOption === "Delivered"}
                          onChange={() => setSelectedOption("Delivered")}
                        />
                        <label
                          for="horizontal-list-radio-delivered"
                          class="w-full py-3 ml-2 text-sm  text-black"
                        >
                          Delivered{" "}
                        </label>
                      </div>
                    </li>
                  </ul>
                  <button
                    className="cursor-pointer [border:none] py-3 pr-3 pl-6 bg-gray-200 rounded-sm w-[270px] flex flex-col box-border items-center justify-center mq685:hover:mix-blend-darken"
                    type="submit"
                  >
                    <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
                      <div className="relative text-2xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left inline-block w-[65px] shrink-0">
                        Update
                      </div>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 box-border h-[900px] overflow-y-scroll flex flex-col gap-2  justify-start  border-[1px] border-solid border-black mq685:flex-[unset] mq685:self-stretch">
          {order.orderItems &&
            order.orderItems.map((order, i) => {
              return (
                <>
                  <div className="flex justify-between align-start   p-3 box-border  border-[1px] border-solid border-black">
                    <img
                      src={order.image}
                      alt=""
                      className="w-14 h-12 mt-2 shrink-0 object-cover"
                    />
                    <h2 className=" text-5xl">{order.name}</h2>
                    <h2 className=" text-5xl">Rs {order.price}</h2>
                    <h2 className=" text-5xl">{order.quantity}</h2>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    )
  );
};

export default ProcessOrder;
