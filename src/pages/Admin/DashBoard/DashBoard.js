import { useNavigate } from "react-router-dom";
import { getAllOrders } from "../../../Actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminProduct } from "../../../Actions/productActions";
import { getAllUsers } from "../../../Actions/userActions";

const AdminDashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { orders } = useSelector((state) => state.allOrders);
  const { products } = useSelector((state) => state.products);
  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAllUsers());
    dispatch(getAdminProduct());
  }, [dispatch]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col py-[41px] px-12 box-border items-center justify-center gap-[50px] text-left text-8xl text-black ">
      <div className="self-stretch flex flex-row py-5 px-0 items-center justify-center  font-optima-lt-std">
        <div className="flex flex-col items-center justify-start">
          <div className="relative tracking-[0.03em]">DashBoard</div>
        </div>
      </div>
      <button
        type="button"
        className="cursor-pointer [border:none] py-3 pr-3 pl-6 bg-gray-200 rounded-sm w-[287px] flex flex-col box-border items-center justify-center"
        onClick={() => navigate("/admin/newproduct")}
      >
        <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
          <div className="relative text-2xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left flex items-end  h-6 shrink-0">
            Create Product
          </div>
        </div>
      </button>
      <div className="self-stretch flex flex-row py-5 px-0 items-center justify-center">
        <div className="flex flex-col items-center justify-start gap-[5px]">
          <div className="rounded-xxs w-[200px] h-[200px] shrink-0 flex flex-row p-2.5 box-border items-center justify-center relative">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex-1 relative rounded-large bg-[url(../public/11963280929662200869975431399657653208366615n1@3x.png)] bg-cover bg-no-repeat bg-[top] z-[0]"
              onClick={() => navigate("/admin/allproducts")}
            />
            <b className="absolute my-0 mx-[!important] top-[75px] left-[80px] tracking-[0.03em] inline-block w-[13px] h-[34px] shrink-0 z-[1] text-10xl">
              {products && products.length}
            </b>
          </div>
          <div className="flex flex-col items-center justify-start  font-optima-lt-std">
            <div className="relative tracking-[0.03em] ">Products</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row py-5 px-0 items-center justify-center">
        <div className="flex flex-col items-center justify-start gap-[5px]">
          <div className="rounded-xxs w-[200px] h-[200px] shrink-0 flex flex-row p-2.5 box-border items-center justify-center relative">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex-1 relative rounded-large bg-[url(../public/11963280929662200869975431399657653208366615n1@3x.png)] bg-cover bg-no-repeat bg-[top] z-[0]"
              onClick={() => navigate("/admin/allorders")}
            />
            <b className="absolute my-0 mx-[!important] top-[75px] left-[80px] tracking-[0.03em] inline-block w-[13px] h-[34px] shrink-0 z-[1]  text-10xl">
              {orders && orders.length}
            </b>
          </div>
          <div className="flex flex-col items-center justify-start font-optima-lt-std">
            <div className="relative tracking-[0.03em] ">Orders</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row py-5 px-0 items-center justify-center">
        <div className="flex flex-col items-center justify-start gap-[5px]">
          <div className="rounded-xxs w-[200px] h-[200px] shrink-0 flex flex-row p-2.5 box-border items-center justify-center relative">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex-1 relative rounded-large bg-[url(../public/11963280929662200869975431399657653208366615n1@3x.png)] bg-cover bg-no-repeat bg-[top] z-[0]"
              onClick={() => navigate("/admin/allusers")}
            />
            <b className="absolute my-0 mx-[!important]top-[75px] left-[80px] tracking-[0.03em] inline-block w-[13px] h-[34px] shrink-0 z-[1]  text-10xl">
              {users && users.length}
            </b>
          </div>
          <div className="flex flex-col items-center justify-start  font-optima-lt-std">
            <div className="relative tracking-[0.03em]">Users</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
