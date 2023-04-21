import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { clearErrors, getProductDetails } from "../../Actions/productActions";
import { addItemsToCart } from "../../Actions/cartActions";
import Loading from "../../components/Loading";

const ProductInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { productId } = useParams();

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(productId));
  }, [loading, dispatch, error]);

  const addToCartHandler = () => {
    dispatch(addItemsToCart(productId, 1));
    alert("Item Added To Cart");
  };

  if (loading === true) {
    return <Loading />;
  }

  if (loading === false) {
    return (
      <div className="relative   bg-white w-full overflow-hidden flex flex-row items-start justify-start gap-[1px] min-w-[450px] mq1000:flex-col">
        <div className="flex-1 bg-whitesmoke-100 flex flex-row py-[113px] px-[115px] items-center justify-center lg:w-[610px] lg:pl-[70px] lg:pr-[70px] lg:box-border mq1124:w-[570px] mq1124:pl-10 mq1124:pr-[115px] mq1124:box-border mq1000:w-full mq1000:pl-[10%] mq1000:pr-[10%] mq1000:box-border mq1000:flex-[unset] mq1000:self-stretch ">
          <div className="w-[489.5px] shrink-0 flex flex-row items-center justify-center gap-[51px] mq1000:w-full mq530:flex-col">
            <div className="flex-1 h-44 flex flex-col items-start justify-start gap-[80px] mq530:flex-row mq530:pl-[120px] mq530:box-border mq530:flex-[unset] mq530:self-stretch ">
              <div className="relative w-[42px] h-12 shrink-0 mix-blend-normal ">
                <img
                  className="absolute top-[0px] left-[0px] w-[49px] h-12 object-cover"
                  alt=""
                  src="../wall1@2x.png"
                />
              </div>
              <div className="relative w-[42px] h-12 shrink-0">
                <img
                  className="absolute top-[-20px] left-[-20px]w-[41px] w-[49px] h-12 object-contain"
                  alt=""
                  src={product.images.imgPrimary}
                />
              </div>
            </div>
            <div className="w-[396.5px] shrink-0 flex flex-col items-center justify-start gap-[55px]">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="relative w-[448px] h-[504px] shrink-0 object-contain"
                  alt=""
                  src={product.images.imgPrimary}
                />
              </div>
              <div className="flex flex-row items-start justify-start gap-[33px]">
                <button className="cursor-pointer [border:none] py-0.5 px-0 bg-[transparent] overflow-hidden flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="relative w-5 h-5 shrink-0"
                    alt=""
                    src="../0-icons--action--share--black-copy1.svg"
                  />
                  <div className="relative text-xl leading-[20px] font-medium font-optima-lt-std text-gray-200 text-left">
                    View in a room
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0.5 px-0 bg-[transparent] overflow-hidden flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="relative w-5 h-5 shrink-0"
                    alt=""
                    src="../union.svg"
                  />
                  <div className="relative text-xl leading-[20px] font-medium font-optima-lt-std text-gray-200 text-left">
                    Share
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-row pt-[10px] px-0 pb-36 items-center justify-center text-left text-xl text-dimgray-100 font-optima-lt-std mq1000:w-full mq1000:flex-[unset] mq1000:self-stretch">
          <div className="flex-1 h-[555px] flex flex-col py-0 pr-0 pl-[100px] box-border items-center justify-between lg:pl-[50px] lg:box-border lg:gap-[50] mq1124:pl-5 mq1124:box-border mq1000:pl-[20%] mq1000:box-border mq530:pl-[5%] mq530:box-border">
            <button
              className="cursor-pointer [border:none] pb-10 bg-[transparent] self-stretch  flex flex-row items-start justify-start gap-[8px]"
              onClick={() => navigate("/")}
            >
              <img
                className="relative w-4 h-4 shrink-0"
                alt=""
                src="../0-icons--navigation--arrowleft--black1.svg"
              />
              <div className="relative text-base tracking-[0.88px] leading-[16px] uppercase font-karla text-gray-200 text-left">
                Back
              </div>
            </button>
            <div className="self-stretch flex flex-col py-0 pr-[119px] pl-0 items-start justify-center gap-[16px] text-left text-xl text-dimgray-100 font-optima-lt-std lg:pr-0 lg:box-border lg:gap-[25]">
              <div className="bg-white w-[464.5px] flex flex-col items-start justify-start gap-[8px] text-10xl text-gray-200">
                <div className="self-stretch relative leading-[48px] font-medium">
                  {product.productName}
                </div>
                <div className="self-stretch relative text-4xl leading-[25px] font-medium">
                  {product.artistName}
                </div>
              </div>
              <div className="w-[464.5px] flex flex-row py-2.5 px-0 box-border items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block w-[400.5px] shrink-0">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    {product.description.desc1}
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    {product.description.desc3}
                  </p>
                  <p className="m-0">{product.description.desc2} </p>
                </div>
              </div>
              <div className="w-[464.5px] flex flex-row py-2.5 px-0 box-border items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block w-[400.5px] shrink-0">
                  {product.description.desc4}
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="relative w-[394px] h-px shrink-0"
                  alt=""
                  src="../line2.svg"
                />
              </div>
              <div className="w-[464.5px] flex flex-col items-start justify-start gap-[12px] text-base font-karla">
                <b className="self-stretch relative text-6xl leading-[32px] text-gray-200">
                  Rs {product.price}
                </b>
                <div className="self-stretch relative h-4 shrink-0 overflow-hidden">
                  <div className="absolute w-[94.5%] top-[calc(50%_-_8px)] left-[5.27%] leading-[16px] inline-block">
                    {product.description.desc5}
                  </div>
                  <img
                    className="absolute h-full w-[3.83%] top-[0%] right-[96.17%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../0-icons--action--add--black1.svg"
                  />
                </div>
                <div className="self-stretch relative h-4 shrink-0 overflow-hidden">
                  <div className="absolute w-[94.27%] top-[calc(50%_-_8px)] left-[5.5%] leading-[16px] inline-block">
                    {product.description.desc6}
                  </div>
                  <div className="absolute h-full w-[3.82%] top-[0%] right-[96.41%] bottom-[0%] left-[-0.23%]">
                    <div className="absolute h-[58.33%] w-[62.22%] top-[20.83%] right-[16.94%] bottom-[20.83%] left-[20.83%]">
                      <div className="absolute h-[84.05%] w-[96.56%] top-[21.31%] right-[1.72%] bottom-[-5.36%] left-[1.72%] box-border border-[1px] border-solid border-dimgray-100" />
                      <img
                        className="absolute h-[11.04%] w-[35.92%] top-[41.03%] right-[31.82%] bottom-[47.94%] left-[32.27%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="../line3.svg"
                      />
                      <div className="absolute h-[37.38%] w-[109.06%] top-[-5.36%] right-[-4.53%] bottom-[67.98%] left-[-4.53%] box-border border-[1px] border-solid border-dimgray-100" />
                    </div>
                  </div>
                </div>
              </div>
              {product.stock !== 0 ? (
                <>
                  <div>Stock: {product.stock}</div>
                  <button
                    className="cursor-pointer [border:none] py-3 px-6 bg-gray-200 rounded-sm w-[417px] flex flex-col box-border items-start justify-center"
                    onClick={() => addToCartHandler()}
                  >
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-center gap-[90px]">
                      <div className="relative text-xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left">
                        Add to cart
                      </div>
                    </div>
                  </button>
                </>
              ) : (
                <div className="text-red-500 text-4xl py-5">Out of stock</div>
              )}
              <div className="w-[316px] flex flex-row items-start justify-start text-base font-karla">
                <div className="relative leading-[16px]">
                  Taxes and shipping fees will apply upon checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductInfo;
