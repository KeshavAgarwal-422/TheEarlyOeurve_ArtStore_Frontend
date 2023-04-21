import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAllUsers } from "../../../Actions/userActions";

import Loading from "../../../components/Loading";
import UserCard from "../../../components/Cards/UserCard";

const AllUsers = () => {
  const dispatch = useDispatch();

  const { error, users, loading } = useSelector((state) => state.allUsers);

  const { isDeleted } = useSelector((state) => state.profile);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getAllUsers());
  }, [dispatch, error, isDeleted]);

  return loading ? (
    <Loading />
  ) : (
    users.map((user, i) => {
      return <UserCard key={i} {...user} />;
    })
  );
};

export default AllUsers;
