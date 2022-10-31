import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApiData from "./components/ApiData";
import "./App.css";
import { action } from "./redux/actions/action";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  useEffect(() => {
    dispatch(action());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Data Fetch From Api By Redux Thunk</h1>
      {loading ? (
        <h2>Loading ....</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <ApiData users={users} />
      )}
    </div>
  );
}

export default App;
