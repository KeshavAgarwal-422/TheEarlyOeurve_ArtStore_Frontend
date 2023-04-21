import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, deleteUser } from "../../Actions/userActions";
import { DELETE_USER_RESET } from "../../Constants/userConstants";

const UserCard = (user) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useSelector((state) => state.allUsers);

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert(message);

      dispatch({ type: DELETE_USER_RESET });
    }
  }, [dispatch, error, deleteError]);

  return (
    <div className="flex flex-row items-center justify-between text-2xl m-10 text-gray-200 font-optima-lt-std border-[1px] border-solid border-grey-201">
      <div className="flex flex-row gap-4 ml-2 mt-2">
        <img
          className="relative w-14 h-14 shrink-0 object-cover"
          alt=""
          src="../vector1.svg"
        />
        <div className="flex flex-col items-start justify-start gap-[3px]">
          <div className="relative leading-[24px]">{user._id}</div>
          <div className="relative text-base leading-[16px] text-dimgray-100">
            {user.name}
          </div>
          <div className="relative text-base leading-[16px] text-dimgray-100">
            {user.email}
          </div>
        </div>
      </div>
      <div className="relative leading-[24px]">{user.role}</div>
      <div className="flex flex-row gap-2 m-5">
        <img
          className=" cursor-pointer relative w-[23.62px] h-[22px] shrink-0"
          alt=""
          src="../edit.svg"
          onClick={() => {
            navigate(`updateuser/${user._id}`);
          }}
        />
        <img
          className=" cursor-pointer relative w-[23.62px] h-[22px] shrink-0"
          alt=""
          src="../trashbin.svg"
          onClick={() => {
            deleteUserHandler(user._id);
          }}
        />
      </div>
    </div>
  );
};

export default UserCard;
