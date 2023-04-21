import { TextField } from "@mui/material";
import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  updateProduct,
} from "../../../Actions/productActions";
import Loading from "../../../components/Loading";
import { UPDATE_PRODUCT_RESET } from "../../../Constants/productConstants";

const UpdateProductInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const { error, product } = useSelector((state) => state.productDetails);
  const { user } = useSelector((state) => state.user);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);

  const [form, setform] = useState({
    productName: "",
    artistName: "",
    description: {
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      desc5: "",
      desc6: "",
    },
    price: 0,
    images: { imgPrimary: "", imgSecondary: { img1: "", img2: "" } },
    category: "",
    stock: 1,
    user: "",
  });

  const handelChange = (e) => {
    const productName = document.getElementById("productName").value;
    const artistName = document.getElementById("artistName").value;
    const desc1 = document.getElementById("desc1").value;
    const desc2 = document.getElementById("desc2").value;
    const desc3 = document.getElementById("desc3").value;
    const desc4 = document.getElementById("desc4").value;
    const desc5 = document.getElementById("desc5").value;
    const desc6 = document.getElementById("desc6").value;
    const price = parseInt(document.getElementById("price").value);
    const imgPrimary = document.getElementById("imgPrimary").value;
    const img1 = document.getElementById("img1").value;
    const img2 = document.getElementById("category").value;
    const category = document.getElementById("category").value;
    const stock = parseInt(document.getElementById("stock").value);

    const data = {
      productName: productName,
      artistName: artistName,
      description: {
        desc1: desc1,
        desc2: desc2,
        desc3: desc3,
        desc4: desc4,
        desc5: desc5,
        desc6: desc6,
      },
      price: price,
      images: {
        imgPrimary: imgPrimary,
        imgSecondary: {
          img1: img1,
          img2: img2,
        },
      },
      category: category,
      stock: stock,
      user: user && user._id,
    };

    setform(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateProduct(id, form));
    navigate("/admin/allproducts");
  };

  useMemo(() => {
    if (product && product._id !== id) {
      dispatch(getProductDetails(id));
    } else {
      setform({
        ...product,
      });
    }
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert("Product Updated Successfully");

      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [dispatch, error, id, isUpdated, product, updateError]);

  return loading ? (
    <Loading />
  ) : (
    <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start gap-[10px] min-w-[420px] text-left text-2xl text-black font-optima-lt-std mq685:flex-col mq685:gap-[0px]">
      <div className="flex-1  flex flex-row items-start justify-start mq685:absolute mq685:top-[0] mq685:left-[0] mq685:opacity-[0.2] mq685:flex-[unset] mq685:self-stretch">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden h-[980px] object-cover"
          alt=""
          src={form.images.imgPrimary}
        />
      </div>
      <div className="flex-1 overflow-hidden flex flex-row  px-0 items-center justify-center mq685:flex-[unset] mq685:self-stretch mq685:mb-2">
        <div className="w-[445px] shrink-0 flex flex-col py-0 pr-0 pl-0.5 box-border items-start justify-start gap-[78px] mq1000:w-[340px]">
          <form
            onSubmit={handleSubmit}
            className="w-[287px] flex flex-col items-start justify-start gap-[20px]"
          >
            <div className="flex flex-row items-start justify-start">
              <div className="relative mt-4 text-9xl font-optima-lt-std text-darkslateblue text-left">
                Update Product
              </div>
            </div>
            <div className="self-stretch flex flex-col  items-end justify-start gap-[20px]">
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New ProductName"
                id="productName"
                onChange={handelChange}
                size="small"
                margin="none"
                value={form.productName}
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New ArtistName"
                id="artistName"
                onChange={handelChange}
                size="small"
                margin="none"
                value={form.artistName}
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New Desc1"
                id="desc1"
                onChange={handelChange}
                value={form.description.desc1}
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New Desc2"
                id="desc2"
                onChange={handelChange}
                value={form.description.desc2}
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New Desc3"
                id="desc3"
                onChange={handelChange}
                value={form.description.desc3}
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New Desc4"
                id="desc4"
                onChange={handelChange}
                value={form.description.desc4}
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New Desc5"
                id="desc5"
                onChange={handelChange}
                value={form.description.desc5}
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New Desc6"
                id="desc6"
                onChange={handelChange}
                value={form.description.desc6}
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="number"
                label="New Price"
                id="price"
                onChange={handelChange}
                value={form.price}
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New ImgPrimary"
                id="imgPrimary"
                onChange={handelChange}
                value={form.images.imgPrimary}
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New Img_1"
                id="img1"
                onChange={handelChange}
                value={form.images.imgSecondary.img1}
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New Img_2"
                id="img2"
                onChange={handelChange}
                value={form.images.imgSecondary.img2}
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="New Category"
                id="category"
                onChange={handelChange}
                value={form.category}
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="number"
                label=" New Stock"
                id="stock"
                onChange={handelChange}
                value={form.stock}
                size="small"
                margin="none"
              />
              <button
                type="submit"
                className="cursor-pointer [border:none] py-3 pr-3 pl-6 bg-gray-200 rounded-sm w-[287px] flex flex-col box-border items-center justify-center"
              >
                <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
                  <div className="relative text-2xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left flex items-end w-[78px] h-6 shrink-0">
                    Update
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductInfo;
