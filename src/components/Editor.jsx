import Button from "./Button";
import css from "./Editor.module.css";
import EmotionItem from "./EmotionItem";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

const Editor = () => {
  const emotionId = 1;
  return (
    <div className={css.Editor}>
      <section className={css.Editor_dateSection}>
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      <section className={css.Editor_emotionSection}>
        <h4>오늘의 감정</h4>
        <div className={css.Editor_emotionListWrapper}>
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              emotionId={item.emotionId}
              emotionName={item.emotionName}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className={css.Editor_contentSection}>
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?" />
      </section>
      <section className={css.Editor_btnSection}>
        <Button text={"취소하기"} />
        <Button text={"작성 완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
