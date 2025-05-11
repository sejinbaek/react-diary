import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import css from "./DiaryItem.module.css";

const DiaryItem = () => {
  return (
    <div className={css.DiaryItem}>
      <div className={css.DiaryItem_img}>
        <img src={getEmotionImage(1)} />
      </div>
      <div className={css.DiaryItem_info}>
        <div className={css.DiaryItem_createdDate}>날짜</div>
        <div className={css.DiaryItem_content}>내용</div>
      </div>
      <div className={css.DiaryItem_btn}>
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
