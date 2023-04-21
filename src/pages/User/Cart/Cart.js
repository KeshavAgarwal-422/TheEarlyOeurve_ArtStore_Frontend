import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartProductCard from "../../../components/Cards/CartProductCard";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems && cartItems.length === 0) {
    return (
      <>
        <div className="flex justify-center align-middle  pt-10 text-8xl text-black font-optima-lt-std min-h-[900px]">
          <label className="cursor-pointer relative ">Empty Cart</label>
        </div>
      </>
    );
  }

  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-col py-[25px] px-20 items-start justify-start gap-[46px] text-3xl text-black font-optima-lt-std mq1000:pl-5 mq1000:pr-5 mq1000:box-border">
      <div className="self-stretch flex flex-col items-end justify-start gap-[23px] text-black md:text-lg mq685:flex mq1000:gap-[28px]">
        <div className="self-stretch flex flex-row items-start justify-between md:gap-[0px] mq685:hidden mq1000:self-stretch mq1000:w-auto mq1000:gap-[0px]">
          <div className="w-[430px] shrink-0 flex flex-row py-0 px-[70px] box-border items-start justify-start mq685:items-center mq685:justify-start mq685:pl-[70px] mq685:box-border mq740:w-[410px]">
            <label className=" relative font-medium">PRODUCT</label>
          </div>
          <div className="w-[522px] shrink-0 flex flex-row items-start justify-between md:flex-1 md:gap-[0px] md:items-center md:justify-between mq685:flex mq1124:flex-1 mq1124:gap-[40px]">
            <label className=" relative font-medium inline-block w-[60.12px] shrink-0">
              PRICE
            </label>
            <label className=" relative font-medium inline-block w-[42.94px] shrink-0">
              QTY
            </label>
            <label className=" relative font-medium inline-block w-[113.8px] shrink-0">
              UNIT PRICE
            </label>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-0.5 shrink-0"
          alt=""
          src="../divider.svg"
        />
      </div>
      {cartItems &&
        cartItems.map((cartItem, i) => {
          return <CartProductCard key={i} {...cartItem} />;
        })}

      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] md:text-lg">
        <div className="self-stretch flex flex-row items-start justify-between">
          <div className="relative inline-block w-[76px] shrink-0">
            Subtotal
          </div>
          <div className="relative inline-block  shrink-0">
            ₹
            {cartItems.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            )}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between">
          <div className="relative inline-block w-30 shrink-0">
            Shipping fee
          </div>
          <div className="relative inline-block shrink-0">₹200</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between">
          <div className="relative inline-block w-30 shrink-0">GST(18%)</div>
          <div className="relative inline-block shrink-0">
            ₹
            {cartItems.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ) * 0.18}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between">
          <div className="relative inline-block w-[73px] shrink-0">Coupon</div>
          <div className="relative inline-block w-[30px] shrink-0">NA</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between text-8xl text-black md:self-stretch md:w-auto md:gap-[0px] md:items-center md:justify-between md:text-5xl">
          <div className="relative inline-block w-[92px] shrink-0">TOTAL</div>
          <div className="relative font-medium inline-block w-[63px] shrink-0">
            ₹
            {cartItems.reduce(
              (acc, item) =>
                acc +
                item.quantity * item.price +
                item.quantity * item.price * 0.18,
              0
            ) + 200}
          </div>
        </div>
        <button
          type="button"
          className="cursor-pointer [border:none] py-3 pr-0 pl-6 bg-black self-stretch rounded-sm h-12 shrink-0 flex flex-col box-border items-center justify-center md:h-10 mq685:hover:mix-blend-darken"
          onClick={() => {
            navigate("/shippinginfo");
          }}
        >
          <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
            <div className="relative text-2xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left inline-block w-[105px] shrink-0">
              Checkout
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cart;
