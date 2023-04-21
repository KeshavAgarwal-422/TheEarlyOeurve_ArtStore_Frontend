import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../Actions/orderActions";
import { clearErrors } from "../../../Actions/userActions";
import AdminOrderedProductCard from "../../../components/Cards/AdminOrderedProductCard";
import Loading from "../../../components/Loading";

const AllOrders = () => {
  const dispatch = useDispatch();

  const { error, orders, loading } = useSelector((state) => state.allOrders);

  const { isDeleted } = useSelector((state) => state.order);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getAllOrders());
  }, [dispatch, alert, error, isDeleted]);

  return loading ? (
    <Loading />
  ) : (
    orders &&
      orders.map((order, i) => {
        return <AdminOrderedProductCard key={i} {...order} />;
      })
  );
};

export default AllOrders;
