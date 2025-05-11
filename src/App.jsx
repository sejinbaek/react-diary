import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { useReducer, useRef, createContext } from "react";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2025-05-11").getTime(),
    emotionId: 1,
    content: "1번 일기입니다",
  },
  {
    id: 2,
    createdDate: new Date("2025-05-10").getTime(),
    emotionId: 2,
    content: "2번 일기입니다",
  },
  {
    id: 3,
    createdDate: new Date("2025-04-10").getTime(),
    emotionId: 3,
    content: "3번 일기입니다",
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

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(4);

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
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <RouterProvider router={router} />
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
};

export default App;
