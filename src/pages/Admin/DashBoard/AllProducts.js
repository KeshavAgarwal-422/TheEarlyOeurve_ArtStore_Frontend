import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAdminProduct,
} from "../../../Actions/productActions";
import { clearErrors } from "../../../Actions/userActions";
import AdminProductCard from "../../../components/Cards/AdminProductCard";
import Loading from "../../../components/Loading";

function AllProducts() {
  const dispatch = useDispatch();

  const { error, products, loading } = useSelector((state) => state.products);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getAdminProduct());
  }, [dispatch, error, deleteError, isDeleted]);

  return loading ? (
    <Loading />
  ) : (
    <div className="self-stretch bg-white overflow-hidden flex flex-col py-[25px] px-20 items-start justify-start gap-[46px] text-3xl text-black font-optima-lt-std mq1000:pl-5 mq1000:pr-5 mq1000:box-border">
      {products &&
        products.map((product, i) => {
          return <AdminProductCard key={i} {...product} />;
        })}
    </div>
  );
}

export default AllProducts;
