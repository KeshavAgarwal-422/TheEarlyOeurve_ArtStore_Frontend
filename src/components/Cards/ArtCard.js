const ArtCard = ({ product }) => {
  return (
    <div className="bg-white shadow-[0px_8px_16px_rgba(0,_0,_0,_0.08)] w-[329.25px] shrink-0 flex flex-col py-[29px] px-[39px] box-border items-center justify-start hover:animate-[1s_ease-in_0s_1_normal_forwards_shadow-inset-center] hover:opacity-[1] text-xl text-black decoration-transparent">
      <div className="self-stretch flex flex-col items-center justify-center gap-[20px]  ">
        <div className="relative w-[232px] h-[247.98px] shrink-0 ">
          <div className="absolute h-[79.17%] w-[87.07%] top-[17.42%] right-[6.9%] bottom-[3.41%] left-[6.03%] [filter:blur(65.24px)] " />
          <img
            className="absolute  top-[0%] right-[0%] bottom-[0%] left-[0%] object-contain h-full w-full  "
            alt=""
            src={product.images.imgPrimary}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[60px] ">
          <div className=" flex flex-col items-start justify-start  ">
            <div className="flex flex-col items-start justify-start gap-[9px]  ">
              <div className="relative text-[16px] leading-[24px] font-optima-lt-std font-bold  ">
                {product.productName}
              </div>
              <div className="relative  text-[14px] leading-[16px] text-[#65635F] font-optima-lt-std font-semibold">
                {product.artistName}
              </div>
              <div className="relative  text-[14px] leading-[16px] font-optima-lt-std italic">
                {product.description.desc1}
              </div>
              <div className="relative  text-[14px] leading-[16px] font-optima-lt-std italic">
                {product.description.desc3}
              </div>
              <div className="relative text-[14px] text-red-600 leading-[16px] font-optima-lt-std italic">
                {product.stock === 0 ? <b>Out Of Stock</b> : null}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[125px] text-[16px] font-karla ">
            <b className="relative leading-[24px] ">Rs {product.price}</b>
            <div className="flex flex-row items-start justify-start gap-[25px] ">
              <img
                className="relative w-[12.48px] h-[15.52px] shrink-0 "
                alt=""
                src="../union.svg"
              />
              <img
                className="relative w-[17.1px] h-[14.58px] shrink-0 "
                alt=""
                src="../carticon.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[232px] h-[30.06px] shrink-0 overflow-hidden " />
    </div>
  );
};

export default ArtCard;
