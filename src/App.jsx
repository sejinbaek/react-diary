import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { useReducer } from "react";

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
  return state;
};

const App = () => {
  const [data, dispatch] = useReducer(reducer, mockData);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
