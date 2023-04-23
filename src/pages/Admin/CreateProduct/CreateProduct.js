import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createProduct } from "../../../Actions/productActions";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

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
    images: {
      imgPrimary: "",
      imgSecondary: {
        img1: "",
        img2: "",
      },
    },
    category: "",
    stock: 0,
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

    const img2 = document.getElementById("img2").value;

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
    dispatch(createProduct(form));
    alert("Product Created Successfully");
    navigate("/admin/allproducts");
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, isAuthenticated]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start gap-[10px] min-w-[420px] text-left text-2xl text-black font-optima-lt-std mq685:flex-col mq685:gap-[0px]">
      <div className="flex-1  flex flex-row items-start justify-start mq685:absolute mq685:top-[0] mq685:left-[0] mq685:opacity-[0.2] mq685:flex-[unset] mq685:self-stretch">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden h-[980px] object-cover"
          alt=""
          src="../119632809-2966220086997543-1399657653208366615-n-1@2x.png"
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
                Create Product
              </div>
            </div>
            <div className="self-stretch flex flex-col  items-end justify-start gap-[20px]">
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="productName"
                id="productName"
                onChange={handelChange}
                placeholder="Wallowing Breeze"
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="ArtistName"
                id="artistName"
                onChange={handelChange}
                placeholder="Hettie Richards"
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="Desc1"
                id="desc1"
                onChange={handelChange}
                placeholder="Oil on canvas, 2008"
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="Desc2"
                id="desc2"
                onChange={handelChange}
                placeholder="Gallery wrap canvas"
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="Desc3"
                id="desc3"
                onChange={handelChange}
                placeholder="26 in × 23 in"
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="Desc4"
                id="desc4"
                onChange={handelChange}
                placeholder="Dynamic and elusive abstraction... "
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="Desc5"
                id="desc5"
                onChange={handelChange}
                placeholder="Shipping Info"
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="Desc6"
                id="desc6"
                onChange={handelChange}
                placeholder="Estimated to ship in 3 - 7 days "
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="number"
                label="Price"
                id="price"
                onChange={handelChange}
                placeholder="Rs 620/-"
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="ImgPrimary"
                id="imgPrimary"
                onChange={handelChange}
                placeholder="URL"
                size="small"
                margin="none"
              />
              <TextField
                id="img1"
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="Img_1"
                onChange={handelChange}
                placeholder="URL"
                size="small"
                margin="none"
              />
              <TextField
                id="img2"
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="Img_2"
                onChange={handelChange}
                placeholder="URL"
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="text"
                label="Category"
                id="category"
                onChange={handelChange}
                placeholder="painting"
                size="small"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                type="number"
                label="Stock"
                id="stock"
                onChange={handelChange}
                placeholder="1"
                size="small"
                margin="none"
              />
              <button
                type="submit"
                className="cursor-pointer [border:none] py-3 pr-3 pl-6 bg-gray-200 rounded-sm w-[287px] flex flex-col box-border items-center justify-center"
              >
                <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
                  <div className="relative text-2xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left flex items-end w-[78px] h-6 shrink-0">
                    Create
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
export default CreateProduct;
