import css from "./DiaryList.module.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const goToAddDiaryPage = () => {
    navigate("/new");
  };

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        // 오름차순 (오래된 순)
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        // 내림차순 (최신순)
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className={css.DiaryList}>
      <div className={css.DiaryList_menuBar}>
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={goToAddDiaryPage}
          text={"새로운 일기 작성하기"}
          type={"POSITIVE"}
        />
      </div>
      <div className={css.DiaryList_listWrapper}>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
