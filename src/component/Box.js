import React from "react";

// Box 컴포넌트는 각각 "You"와 "Computer"의 박스를 표시
const Box = (props) => {
  let result;

  // 컴퓨터가 이긴 경우(사용자가 지면)에는 결과를 반대로 처리
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    // 카드가 computer카드이고, 결과가 비기지 않으면
    // 결과를 반대로 처리 (컴퓨터가 이긴 경우, 사용자가 졌다고 표시)
    result = props.result === "win" ? "lose" : "win";
  } else {
    // 위 조건에 해당하지 않으면 전달된 결과 그대로 사용
    result = props.result;
  }

  // 디버깅 용도로 컴퓨터의 결과 출력
  if (props.title === "Computer") {
    console.log("computer", result);
  }

  return (
    <div className={`box ${result}`}> {/* 결과에 따라 box의 클래스를 설정 */}
      <h1>{props.title}</h1> {/* 'You' 또는 'Computer' 표시 */}
      <h2 data-testid="item-name">{props.item && props.item.name}</h2> {/* 선택된 항목 이름 표시 */}
      <img className="item-img" src={props.item && props.item.img} /> {/* 선택된 항목의 이미지 표시 */}
      <h2>{result}</h2> {/* 결과(승/패/비김) 표시 */}
    </div>
  );
};

// 각 박스를 담당하는 컴포넌트로, You와 Computer에 대한 정보를 표시.
// result 값에 따라 컴퓨터의 결과를 반대로 처리하여 결과를 시각적으로 표시.
// item이 없으면 이미지와 이름을 표시하지 않음.

export default Box;
