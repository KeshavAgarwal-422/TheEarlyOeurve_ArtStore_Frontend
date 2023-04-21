import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../../Actions/userActions";
import { TextField } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [form, setform] = useState({
    email: "",
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
    dispatch(login(form.email, form.password));
    navigate("/");
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error, isAuthenticated, loading]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start gap-[10px] min-w-[420px] mq685:flex-col mq685:gap-[0px]  min-h-[900px]">
      <div className="flex-1 flex flex-row items-start justify-start mq685:absolute mq685:top-[0] mq685:left-[0] mq685:opacity-[0.2] mq685:flex-[unset] mq685:self-stretch">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[900px] object-cover"
          alt=""
          src="../119632809-2966220086997543-1399657653208366615-n-12@2x.png"
        />
      </div>
      <div className="flex-1 overflow-hidden flex flex-row py-[135px] px-0 items-center justify-center text-left text-2xl text-black font-optima-lt-std mq685:flex-[unset] mq685:self-stretch">
        <div className="w-[445px] shrink-0 flex flex-col py-0 pr-0 pl-0.5 box-border items-start justify-start gap-[50px] mq1000:w-[340px]">
          <form
            className="w-[287px] flex flex-col items-start justify-start gap-[51px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row items-start justify-start">
              <div className="relative text-9xl font-optima-lt-std text-darkslateblue text-left">
                Login
              </div>
            </div>
            <div className="flex flex-col items-end justify-start gap-[26px]">
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                value={form.email}
                type="email"
                label="Email"
                name="email"
                placeholder="abc@gmail.com"
                size="medium"
                margin="none"
                onChange={handelChange}
                required
              />
              <TextField
                className="[border:none] bg-[transparent]"
                fullWidth
                color="primary"
                variant="outlined"
                value={form.password}
                type="password"
                label="Password"
                name="password"
                placeholder="***"
                size="medium"
                margin="none"
                onChange={handelChange}
                required
              />
              <button
                className="cursor-pointer [border:none] py-3 pr-3 pl-6 bg-gray-200 rounded-sm w-[287px] flex flex-col box-border items-center justify-center mq685:hover:mix-blend-darken"
                type="submit"
              >
                <div className="self-stretch h-6 shrink-0 overflow-hidden flex flex-row items-center justify-center">
                  <div className="relative text-2xl tracking-[1px] leading-[24px] uppercase font-optima-lt-std text-white text-left inline-block w-[65px] shrink-0">
                    Login
                  </div>
                </div>
              </button>
            </div>
          </form>
          <Link
            className="cursor-pointer [text-decoration:none] relative text-[inherit]"
            to="/forgotpassword"
          >
            Forget Password?
          </Link>

          <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
            <div className="relative box-border w-[444px] h-px shrink-0 border-t-[1px] border-solid border-whitesmoke-200" />
            <div className="flex flex-row items-start justify-start gap-[100px]">
              <div className="flex flex-row items-start justify-start">
                <div className="relative">Don’t haven an account?</div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <Link
                  className="cursor-pointer [text-decoration:none] relative text-[inherit]"
                  to="/signup"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
