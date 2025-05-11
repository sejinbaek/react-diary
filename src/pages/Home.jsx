import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <Header
        title={"2024년 2월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
    </div>
  );
};

export default Home;
