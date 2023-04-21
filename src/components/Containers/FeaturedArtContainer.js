import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getFeaturedProducts } from "../../Actions/productActions";
import ArtCard from "../Cards/ArtCard";
import ArtistSectionContainer from "../Containers/ArtistSectionContainer";
import Loading from "../Loading";

const FeaturedArtContainer = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getFeaturedProducts());
  }, [dispatch, error]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="self-stretch flex flex-col items-center justify-start gap-[52px] text-left text-10xl textblack font-optima-lt-std mb-28  ">
        <div className="self-stretch flex flex-row pt-[19px] px-[50px] pb-0 items-center justify-between sm:text-4xl md:text-5xl lg:text-8xl ">
          <div className="relative leading-[56px] font-medium">
            Featured Products...
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[30px] flex-wrap mq685:flex-col">
          {products &&
            products.map((product) => (
              <Link className="no-underline" to={`/productinfo/${product._id}`}>
                <ArtCard key={product._id} product={product} />
              </Link>
            ))}
        </div>
      </div>
      <ArtistSectionContainer />
    </>
  );
};

export default FeaturedArtContainer;
