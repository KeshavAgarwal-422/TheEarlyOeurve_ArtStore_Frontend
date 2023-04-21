import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ArtCard from "../../components/Cards/ArtCard";
import ArtistSectionContainer from "../../components/Containers/ArtistSectionContainer";
import { getPaintings } from "../../Actions/productActions";

const Paintings = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getPaintings());
  }, [dispatch, error]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="self-stretch flex flex-col items-center justify-start gap-[52px] text-left text-12xl textblack font-optima-lt-std mb-28 ">
        <div className="self-stretch flex flex-row pt-[19px] px-[100px] pb-0 items-center justify-between md:text-10xl sm:text-8xl mq685:text-[35x] ">
          <div className="relative leading-[56px] font-medium">
            Paintings...
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

export default Paintings;
