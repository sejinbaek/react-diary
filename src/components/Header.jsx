import React from "react";
import css from "./header.module.css";

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <header className={css.header}>
      <div className={css.headerLeft}>{leftChild}</div>
      <div className={css.headerCenter}>{title}</div>
      <div className={css.headerRight}>{rightChild}</div>
    </header>
  );
};

export default Header;
