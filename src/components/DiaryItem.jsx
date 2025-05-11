import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import css from "./DiaryItem.module.css";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ item }) => {
  const { id, createdDate, content } = item;
  const navigate = useNavigate();

  // 일기 상세 페이지로 이동시키는 함수
  const goToDetailPage = () => {
    navigate(`/diary/${id}`);
  };
  // 일기 수정 페이지로 이동시키는 함수
  const goToEditPage = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className={css.DiaryItem}>
      <div className={css.DiaryItem_img} onClick={goToDetailPage}>
        <img src={getEmotionImage(1)} />
      </div>
      <div className={css.DiaryItem_info} onClick={goToDetailPage}>
        <div className={css.DiaryItem_createdDate}>
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className={css.DiaryItem_content}>{content}</div>
      </div>
      <div className={css.DiaryItem_btn}>
        <Button text={"수정하기"} onClick={goToEditPage} />
      </div>
    </div>
  );
};

export default DiaryItem;
