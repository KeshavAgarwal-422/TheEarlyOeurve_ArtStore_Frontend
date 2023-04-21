import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteOrder } from "../../Actions/orderActions";
import { DELETE_ORDER_RESET } from "../../Constants/orderConstants";

const AdminOrderedProductCard = (order) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    if (deleteError) {
      alert(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      dispatch({ type: DELETE_ORDER_RESET });
    }
  }, [dispatch, deleteError, isDeleted]);

  return (
    <div className="flex flex-row items-center justify-between text-2xl m-10 text-gray-200 font-optima-lt-std border-[1px] border-solid border-grey-201">
      <div className="flex flex-row gap-4 m-2">
        <img
          className="relative w-14 h-14 shrink-0 object-cover"
          alt=""
          src="../Task.svg"
        />
        <div className="flex flex-col items-start justify-start gap-[3px]">
          <div className="relative leading-[24px]">{order._id}</div>
          <div className="relative text-base leading-[16px] text-dimgray-100">
            TotalItems: {order.orderItems.length}
          </div>
          <div className="relative text-base leading-[16px] text-dimgray-100">
            TotalAmount: {order.totalPrice}
          </div>
        </div>
      </div>
      <div className="relative leading-[24px] text-green-500">
        {order.orderStatus}
      </div>

      <div className="flex flex-row gap-2 m-5">
        <img
          className=" cursor-pointer relative w-[23.62px] h-[22px] shrink-0"
          alt=""
          src="../edit.svg"
          onClick={() => {
            navigate(`updateorder/${order._id}`);
          }}
        />
        <img
          className=" cursor-pointer relative w-[23.62px] h-[22px] shrink-0"
          alt=""
          src="../trashbin.svg"
          onClick={() => {
            deleteOrderHandler(order._id);
          }}
        />
      </div>
    </div>
  );
};

export default AdminOrderedProductCard;
