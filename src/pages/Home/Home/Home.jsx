import React from "react";
import Prodoct from "../../Products/Product/Product";
import Review from "../../Review/Review/Review";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Prodoct />
      <Review />
    </div>
  );
};

export default Home;
