import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import { useState } from "react";
import { logout } from "../Actions/userActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const [keyWord, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.user);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const HandleChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <>
      <div className="self-stretch overflow-hidden flex flex-col py-3 px-[51px] items-center justify-center text-left text-base text-gray-200 font-karla mb-10">
        <div className="self-stretch flex flex-row py-0 pr-[41px] pl-0 items-center justify-between">
          <div className="w-[133px] shrink-0 flex flex-col p-2.5 box-border items-start justify-start">
            <Link to="/">
              <img
                className="relative rounded-xxl w-[101.25px] h-[100px] shrink-0 object-cover"
                alt=""
                src="../119387896-123284702829832-8666968427235121470-n-1@2x.png"
              />
            </Link>
          </div>

          <form className="flex flex-1  ml-20  mr-20 items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search"
                className="bg-white text-black h-8 text-sm rounded-xxl block w-full pl-10 p-2 font-optima-lt-std"
                placeholder="Search"
                onChange={HandleChange}
              />
            </div>
          </form>

          <div className="flex flex-row items-center justify-start gap-[36px]">
            <div className="flex flex-row items-center justify-start gap-[36px]">
              <div className="overflow-hidden flex flex-row items-start justify-start  gap-[26px] mq685:hidden ">
                <Link
                  className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit]"
                  to="/paintings"
                >
                  Painting
                </Link>
                <Link
                  className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit]"
                  to="/drawings"
                >
                  Drawings
                </Link>
                <Link
                  className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit]"
                  to="/sculptures"
                >
                  Sculpture
                </Link>

                <Link
                  to="/artists"
                  className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit] "
                >
                  Artists
                </Link>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-9 h-6 shrink-0 overflow-hidden hidden mq685:flex">
                <img
                  className="absolute h-[71.75%] w-[66.67%] top-[14.13%] right-[16.67%] bottom-[14.12%] left-[16.67%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={!isOpen ? "../vector.svg" : "../icons8-close.svg"}
                  onClick={toggleNavbar}
                />
              </button>
            </div>
            <div className="flex flex-row items-start justify-end gap-[22px]  mq685:hidden">
              <Link to="/cart">
                <img
                  className="relative w-[20.35px] h-[17.25px] shrink-0"
                  alt=""
                  src="../carticon.svg"
                />
              </Link>
              <Link to={user ? "/myprofile" : "/login"}>
                <img
                  className="relative w-[21.5px] h-[21.5px] shrink-0"
                  alt=""
                  src="../vector1.svg"
                />
              </Link>
              {user && user.role === "admin" ? (
                <Link to="admin/dashboard">
                  <img
                    className="relative w-[25px] h-[25px] shrink-0"
                    alt=""
                    src="https://img.icons8.com/external-others-phat-plus/64/000000/external-admin-programming-outline-others-phat-plus.png"
                  />
                </Link>
              ) : null}
              {user ? (
                <img
                  className="cursor-pointer relative w-[21.5px] h-[20px]  shrink-0 fill-black"
                  alt=""
                  src="../logout.svg"
                  onClick={() => dispatch(logout())}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=" hidden flex-col items-center gap-9 text-gray-200 font-karla min-h-screen mq685:flex">
          <Link
            className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit]"
            to="/paintings"
            onClick={() => setIsOpen(!isOpen)}
          >
            Painting
          </Link>
          <Link
            className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit]"
            to="/drawings"
            onClick={() => setIsOpen(!isOpen)}
          >
            Drawings
          </Link>
          <Link
            className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit]"
            to="/sculptures"
            onClick={() => setIsOpen(!isOpen)}
          >
            Sculpture
          </Link>

          <Link
            to="/artists"
            className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit] "
            onClick={() => setIsOpen(!isOpen)}
          >
            Artists
          </Link>
          <Link
            to="/myprofile"
            className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit] "
            onClick={() => setIsOpen(!isOpen)}
          >
            Profile
          </Link>
          {user && user.role === "admin" ? (
            <Link
              to="/admin/dashboard"
              className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit] "
              onClick={() => setIsOpen(!isOpen)}
            >
              Admin
            </Link>
          ) : null}
          <Link
            to="/cart"
            className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit] "
            onClick={() => setIsOpen(!isOpen)}
          >
            Cart
          </Link>
          <Link
            to="/artists"
            className="[text-decoration:none] relative tracking-[0.88px] leading-[28px] uppercase text-[inherit] "
            onClick={() => setIsOpen(!isOpen)}
          >
            Logout
          </Link>
        </div>
      )}
      {keyWord ? <Search keyword={keyWord} /> : <></>}
    </>
  );
};

export default NavBar;
