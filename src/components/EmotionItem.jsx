import { getEmotionImage } from "../util/get-emotion-image";
import css from "./EmotionItem.module.css";

const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
  return (
    <div
      className={`${css.EmotionItem} ${isSelected ? css.EmotionItem_on : ""}`}
    >
      <img className={css.EmotionItem_img} src={getEmotionImage(emotionId)} />
      <div className={css.EmotionItem_name}>{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
