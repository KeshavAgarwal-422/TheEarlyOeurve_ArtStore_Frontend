import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePassword, updateProfile } from "../../../Actions/userActions";
import Loading from "../../../components/Loading";
import { saveShippingInfo } from "../../../Actions/cartActions";
import {
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
} from "../../../Constants/userConstants";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const shippingInfo = localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
        phoneNo: "",
      };

  const { user, loading } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.myOrders);

  const [form1, setForm1] = useState({
    name: user.name,
    email: user.email,
  });

  const [form2, setForm2] = useState({
    address: shippingInfo.address,
    city: shippingInfo.city,
    state: shippingInfo.state,
    country: shippingInfo.country,
    pinCode: shippingInfo.pinCode,
    phoneNo: shippingInfo.phoneNo,
  });

  const [form3, setForm3] = useState({
    password: "",
  });

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handelChange1 = (e) => {
    const { name, value } = e.target;

    setForm1({
      ...form1,
      [name]: value,
    });
  };
  const handelChange2 = (e) => {
    const { name, value } = e.target;

    setForm2({
      ...form2,
      [name]: value,
    });
  };

  const handelChange3 = (e) => {
    const { name, value } = e.target;

    setForm3({
      ...form3,
      [name]: value,
    });
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    dispatch(updateProfile(form1));
    alert("Data Updated.");
    dispatch({ type: UPDATE_PROFILE_RESET });

    e.target.reset();
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    dispatch(saveShippingInfo(form2));
    alert("Data Updated.");
    e.target.reset();
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    dispatch(updatePassword(form3));
    alert("Data Updated.");
    e.target.reset();
  };

  if (loading === true) {
    return <Loading />;
  }

  if (loading === false) {
    return (
      <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start gap-[10px] min-w-[420px] text-left text-10xl text-black font-optima-lt-std mq685:flex-col mq685:gap-[0px] mq685:items-center mq685:justify-center">
        <div className="flex-1 box-border h-[793px] flex flex-col pt-[72px] px-0 pb-0 items-center justify-start gap-[46px] border-[1px] border-solid border-black mq685:flex-[unset] mq685:self-stretch">
          <div className="self-stretch relative text-center">Profile</div>
          <img
            className="relative w-[135.22px] h-[141.67px] shrink-0"
            alt=""
            src="../vector12.svg"
          />
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-9xl">
            <div className="relative">{user.name}</div>
            <div className="relative text-7xl font-medium text-dimgray-100">
              {user.email}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center text-11xl">
            <div
              className="cursor-pointer box-border w-[95px] h-[98px] shrink-0 flex flex-col items-center justify-center gap-[10px] border-[2px] border-solid border-black"
              onClick={() => {
                navigate("/myorders");
              }}
            >
              <div className="relative inline-block w-[55.71px] h-[45.39px] shrink-0">
                {orders ? orders.length : 0}
              </div>
              <div className="relative text-2xl text-dimgray-100 text-center inline-block w-[70.15px]">
                Orders
              </div>
            </div>
          </div>
        </div>
        {isChecked ? (
          <div className="flex-1 overflow-hidden flex flex-col items-center justify-center text-3xl mq685:flex-[unset] mq685:self-stretch">
            <div className="flex flex-col items-center justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[59px] font-optima-lt-std">
                <div class="flex items-center pl-4 ">
                  <input
                    type="radio"
                    checked={!isChecked}
                    onChange={handleOnChange}
                  />
                  <label
                    for="bordered-radio-2"
                    class="w-full py-4 ml-2 text-sm font-medium text-black"
                  >
                    Profile
                  </label>
                </div>
                <div class="flex items-center pl-4 ">
                  <input
                    type="radio"
                    checked={isChecked}
                    onChange={handleOnChange}
                  />
                  <label
                    for="bordered-radio-1"
                    class="w-full py-4 ml-2 text-sm font-medium text-black"
                  >
                    Shipping
                  </label>
                </div>
              </div>
              <div className="w-[445px] shrink-0 flex flex-col py-0 pr-0 pl-0.5 box-border items-start justify-start gap-[50px] mq1000:w-[340px]">
                <form
                  className="w-[350px] flex flex-col items-start justify-start gap-[45px]"
                  onSubmit={handleSubmit1}
                >
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative text-10xl font-optima-lt-std text-black text-left">
                      Update Email
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[26px]">
                    <TextField
                      className="[border:none] bg-[transparent]"
                      value={form1.name}
                      onChange={handelChange1}
                      fullWidth
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Full Name"
                      size="medium"
                      margin="none"
                      name="name"
                    />
                    <TextField
                      className="[border:none] bg-[transparent]"
                      value={form1.email}
                      onChange={handelChange1}
                      fullWidth
                      color="primary"
                      variant="outlined"
                      type="email"
                      label="Email"
                      size="medium"
                      margin="none"
                      name="email"
                    />

                    <button
                      type="submit"
                      className="cursor-pointer [border:none] py-3 pr-3 pl-6 bg-black rounded-sm w-[350px] flex flex-col box-border items-center justify-center"
                    >
                      <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
                        <div className="relative text-3xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left flex items-end w-[78px] h-6 shrink-0">
                          Update
                        </div>
                      </div>
                    </button>
                  </div>
                </form>
                <form
                  className="w-[350px] flex flex-col items-start justify-start gap-[45px]"
                  onSubmit={handleSubmit3}
                >
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative text-10xl font-optima-lt-std text-black text-left">
                      Update Password
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[26px]">
                    <TextField
                      className="[border:none] bg-[transparent]"
                      value={form3.password}
                      onChange={handelChange3}
                      fullWidth
                      color="primary"
                      variant="outlined"
                      type="password"
                      label="New Password"
                      placeholder="***"
                      size="medium"
                      margin="none"
                      name="password"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer [border:none] py-3 pr-3 pl-6 bg-black rounded-sm w-[350px] flex flex-col box-border items-center justify-center"
                    >
                      <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
                        <div className="relative text-3xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left flex items-end w-[78px] h-6 shrink-0">
                          Update
                        </div>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-hidden flex flex-col items-center justify-center text-3xl mq685:flex-[unset] mq685:self-stretch">
            <div className="flex flex-col items-center justify-start gap-[38px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[59px] font-optima-lt-std">
                <div class="flex items-center pl-4 ">
                  <input
                    type="radio"
                    checked={!isChecked}
                    onChange={handleOnChange}
                  />
                  <label class="w-full py-4 ml-2 text-sm font-medium text-black">
                    ShippingInfo
                  </label>
                </div>
                <div class="flex items-center pl-4 ">
                  <input
                    type="radio"
                    checked={isChecked}
                    onChange={handleOnChange}
                  />
                  <label class="w-full py-4 ml-2 text-sm font-medium text-black">
                    ProfileInfo
                  </label>
                </div>
              </div>
              <div className="w-[445px] shrink-0 flex flex-col py-0 pr-0 pl-0.5 box-border items-start justify-start gap-[78px] mq1000:w-[340px]">
                <form
                  className="w-[287px] flex flex-col items-start justify-start gap-[51px]"
                  onSubmit={handleSubmit2}
                >
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative text-10xl font-optima-lt-std text-black text-left">
                      Update
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[26px]">
                    <TextField
                      name="address"
                      value={form2.address}
                      type="text"
                      label="Full Address"
                      onChange={handelChange2}
                      className="[border:none] bg-[transparent]"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      size="medium"
                      margin="none"
                    />
                    <TextField
                      name="city"
                      value={form2.city}
                      onChange={handelChange2}
                      type="text"
                      label="City"
                      className="[border:none] bg-[transparent]"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      size="medium"
                      margin="none"
                    />
                    <TextField
                      name="state"
                      value={form2.state}
                      type="text"
                      label="State"
                      onChange={handelChange2}
                      className="[border:none] bg-[transparent]"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      size="medium"
                      margin="none"
                    />
                    <TextField
                      name="country"
                      value={form2.country}
                      type="text"
                      label="Country"
                      onChange={handelChange2}
                      className="[border:none] bg-[transparent]"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      size="medium"
                      margin="none"
                    />
                    <TextField
                      name="pinCode"
                      value={form2.pinCode}
                      type="text"
                      label="Pin Code"
                      onChange={handelChange2}
                      className="[border:none] bg-[transparent]"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      size="medium"
                      margin="none"
                    />
                    <TextField
                      name="phoneNo"
                      value={form2.phoneNo}
                      type="tel"
                      label="Mobile No"
                      onChange={handelChange2}
                      className="[border:none] bg-[transparent]"
                      fullWidth
                      color="primary"
                      variant="outlined"
                      size="medium"
                      margin="none"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer [border:none] py-3 pr-3 pl-6 bg-black rounded-sm w-[287px] flex flex-col box-border items-center justify-center"
                    >
                      <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
                        <div className="relative text-3xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left flex items-end w-[78px] h-6 shrink-0">
                          Update
                        </div>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default UserProfile;
