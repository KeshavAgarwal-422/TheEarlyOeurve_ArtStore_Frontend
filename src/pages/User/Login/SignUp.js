import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, signup } from "../../../Actions/userActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [form, setform] = useState({
    name: "",
    email: "",
    mobileNo: "",
    password: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signup(form)).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert, isAuthenticated]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start gap-[10px] min-w-[420px] text-left text-2xl text-black font-optima-lt-std mq685:flex-col mq685:gap-[0px] min-h-[900px]">
      <div className="flex-1 h-[793px] flex flex-row items-start justify-start mq685:absolute mq685:top-[0] mq685:left-[0] mq685:opacity-[0.2] mq685:flex-[unset] mq685:self-stretch">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden h-[900px] object-cover"
          alt=""
          src="../119632809-2966220086997543-1399657653208366615-n-1@2x.png"
        />
      </div>
      <div className="flex-1 overflow-hidden flex flex-row py-[135px] px-0 items-center justify-center mq685:flex-[unset] mq685:self-stretch">
        <div className="w-[445px] shrink-0 flex flex-col py-0 pr-0 pl-0.5 box-border items-start justify-start gap-[78px] mq1000:w-[340px]">
          <form
            onSubmit={handleSubmit}
            className="w-[287px] flex flex-col items-start justify-start gap-[51px]"
          >
            <div className="flex flex-row items-start justify-start">
              <div className="relative text-9xl font-optima-lt-std text-darkslateblue text-left">
                SignUp
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[26px]">
              <TextField
                name="name"
                value={form.name}
                type="text"
                label="Full Name"
                onChange={handelChange}
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                placeholder="abc"
                size="medium"
                margin="none"
                required
              />
              <TextField
                name="email"
                value={form.email}
                type="email"
                label="Email"
                onChange={handelChange}
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                placeholder="abc@gmail.com"
                size="medium"
                margin="none"
                required
              />
              <TextField
                name="mobileNo"
                value={form.mobileNo}
                type="tel"
                label="Mobile No"
                onChange={handelChange}
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                placeholder="000000000"
                size="medium"
                margin="none"
                required
              />
              <TextField
                name="password"
                value={form.password}
                type="password"
                label="Password"
                onChange={handelChange}
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                placeholder="***"
                size="medium"
                margin="none"
                required
              />
              <button
                type="submit"
                className="cursor-pointer [border:none] py-3 pr-3 pl-6 bg-gray-200 rounded-sm w-[287px] flex flex-col box-border items-center justify-center"
              >
                <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
                  <div className="relative text-2xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left flex items-end w-[78px] h-6 shrink-0">
                    SignUp
                  </div>
                </div>
              </button>
            </div>
          </form>
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="relative box-border w-[444px] h-px shrink-0 border-t-[1px] border-solid border-whitesmoke-200" />
            <div className="flex flex-row items-start justify-start gap-[100px]">
              <div className="flex flex-row items-start justify-start">
                <div className="relative">Already have an account?</div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <Link
                  className="cursor-pointer [text-decoration:none] relative text-[inherit]"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
