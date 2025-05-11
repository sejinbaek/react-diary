import css from "./DiaryList.module.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const DiaryList = ({ data }) => {
  return (
    <div className={css.DiaryList}>
      <div className={css.DiaryList_menuBar}>
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"새로운 일기 작성하기"} type={"POSITIVE"} />
      </div>
      <div className={css.DiaryList_listWrapper}>
        {data.map((item) => (
          <DiaryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
