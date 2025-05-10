import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { useReducer, useRef } from "react";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기입니다",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기입니다",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
  }
};

const App = () => {
  const [data, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기 추가 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <button onClick={() => onCreate(new Date().getTime(), 1, "헬로")}>
        일기 추가 테스트
      </button>
      <button onClick={() => onUpdate(1, new Date().getTime(), 1, "하루")}>
        일기 수정 테스트
      </button>
      <button onClick={() => onDelete(1)}>일기 삭제 테스트</button>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
