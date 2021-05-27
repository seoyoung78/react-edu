import React, { useState } from "react";

//컴포넌트x - 기본값(전역 데이터x)
const ColorContext = React.createContext({
  color: "yellow",
  setColor: function(color) {}   //함수라는 형태만 표시 - 실행되어서 값의 변경 이루어지지x
});

//컴포넌트O - 전역 데이터로 사용
export function ColorContextProvider(props) {
  const [color, setColor] = useState("yellow");
  const value = {
    color: color,
    setColor: setColor
  };
  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContext;