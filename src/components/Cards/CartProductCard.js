import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../Actions/cartActions";

const CartProductCard = ({
  product: id,
  name: productName,
  price,
  image: imgPrimary,
  quantity,
  stock,
}) => {
  const dispatch = useDispatch();

  const [newQty, setNewQty] = useState(quantity);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (stock <= quantity) {
      alert("Maximum Limit Reached!");
      return;
    }
    dispatch(addItemsToCart(id, newQty));
    setNewQty(newQty);
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;

    if (1 >= quantity) {
      dispatch(removeItemsFromCart(id));
      return;
    }
    dispatch(addItemsToCart(id, newQty));

    setNewQty(newQty);
  };

  const deleteCartItems = (_id) => {
    dispatch(removeItemsFromCart(_id));
  };

  useEffect(() => {}, [dispatch, increaseQuantity, decreaseQuantity]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
      <div className="self-stretch flex flex-row items-center justify-between md:self-stretch md:w-auto md:flex-row md:gap-[0px] md:items-center md:justify-between md:text-lg mq685:flex-col mq685:gap-[40px] mq685:items-center mq685:justify-center">
        <div className="flex flex-row items-start justify-center mq685:items-center mq685:justify-center mq685:pl-[100px] mq685:pb-2.5 mq685:box-border mq1124:gap-[10px] mq1000:w-[430px]">
          <div className="w-[479px] shrink-0 flex flex-row items-center justify-start gap-[48px] md:flex-1 mq1124:gap-[20px]">
            <div className="flex flex-col items-start justify-start">
              <img
                className=" cursor-pointer relative w-[23.62px] h-[22px] shrink-0 "
                alt=""
                src="vector11.svg"
                onClick={() => {
                  deleteCartItems(id);
                }}
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-center gap-[29px] md:flex-1 md:flex-col md:items-start md:justify-center mq1124:gap-[10px]">
              <img
                className="relative rounded-2xxs w-[137.85px] h-[94px] shrink-0 object-contain md:[scale:0.9]"
                alt=""
                src={imgPrimary}
              />
              <div className="flex-1 relative font-medium inline-block h-px md:self-stretch">
                {productName}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[512px] shrink-0 flex flex-row items-center justify-between md:flex-1 md:h-auto md:gap-[0px] mq685:flex-1 mq685:gap-[0px] mq685:items-center mq685:justify-center mq1124:flex-1 mq1124:gap-[40px]">
          <div className="relative font-medium">Rs {quantity * price}/-</div>
          <div className="bg-whitesmoke-100 w-[126px] h-12 shrink-0 flex flex-row items-center justify-center gap-[30px] md:w-[100px] md:h-10">
            <img
              className=" cursor-pointer relative w-[10px] h-0.5 shrink-0"
              alt=""
              src="../rectangle-11-copy-3.svg"
              onClick={() => {
                decreaseQuantity(id, quantity);
              }}
            />
            <div className="relative font-medium inline-block w-[11.81px] shrink-0">
              {newQty}
            </div>
            <img
              className=" cursor-pointer relative w-[10px] h-2 shrink-0"
              alt=""
              src="../vector10.svg"
              onClick={() => {
                increaseQuantity(id, quantity, stock);
              }}
            />
          </div>
          <div className="relative font-medium">Rs {price}/-</div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-0.5 shrink-0"
        alt=""
        src="../divider.svg"
      />
    </div>
  );
};

export default CartProductCard;
