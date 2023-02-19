import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      window.location.href = "/login";
    }
  });

return <></>;
};
export default Home;
