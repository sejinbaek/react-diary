import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const getMonthlyData = (pivotDate, data) => {
  // 이번 달의 시작 시간 - state 연도, state 월, 1일 0시 0분 0초
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  // 이번 달의 마지막 시간 - state 연도/월, 일, 23시 59분 59초
  const endTime = new Date(
    pivotDate.getFullYear(),
    // 월에 +1을 하고 0일로 설정하면 이전 달의 마지막 날짜로 설정
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => item.createdDate >= beginTime && item.createdDate <= endTime
  );
};

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  const data = useContext(DiaryStateContext);

  const monthlyData = getMonthlyData(pivotDate, data);

  // 이전 버튼 클릭 시 이전 달로 이동하는 함수
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  // 다음 버튼 클릭 시 다음 달로 이동하는 함수
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
