import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import ArtCard from "./Cards/ArtCard";
import { getProduct } from "../Actions/productActions";

const Search = ({ keyword }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.searchProducts
  );
  

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword));
  }, [dispatch, keyword, error]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="self-stretch flex flex-col items-center justify-start gap-[52px] text-left text-12xl textblack font-optima-lt-std mb-28 ">
        <div className="self-stretch flex flex-row pt-[19px] px-[100px] pb-0 items-center justify-between md:text-10xl sm:text-8xl mq685:text-[35x] ">
          <div className="relative leading-[56px] font-medium">Results...</div>
        </div>

        <div className="self-stretch flex flex-row items-center justify-center gap-[30px] flex-wrap mq685:flex-col">
          {products.length !== 0 ? (
            products.map((product) => (
              <Link className="no-underline" to={`/productinfo/${product._id}`}>
                <ArtCard key={product._id} product={product} />
              </Link>
            ))
          ) : (
            <div className="flex flex-col justify-start items-center mt-5  md:text-10xl sm:text-8xl mq685:text-[35x] min-h-[800px]">
              No match Found...
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
