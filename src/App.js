import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 선택 가능한 항목을 정의 (가위, 바위, 보)
const choice = {
  rock: {
    name: "Rock",
    img: "data:image/jpeg;base64,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",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  // 상태 정의: 사용자의 선택, 컴퓨터의 선택, 결과
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  // 사용자가 선택한 항목을 기반으로 게임 실행
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]); // 사용자의 선택을 상태에 저장
    let computerChoice = randomChoice(); // 컴퓨터의 랜덤 선택
    setComputerSelect(computerChoice); // 컴퓨터의 선택을 상태에 저장
    setResult(judgement(choice[userChoice], computerChoice)); // 승패 결과 판단
  };

  // 컴퓨터의 랜덤 선택을 반환하는 함수
  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값을 배열로 반환
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length); // 랜덤 인덱스 생성
    console.log("random value", randomItem);
    let final = itemArray[randomItem]; // 랜덤 항목 선택
    return choice[final]; // 선택된 항목 반환
  };

  // 사용자의 선택과 컴퓨터의 선택을 비교하여 결과를 반환
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // 비긴 경우
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} /> {/* 사용자 박스 */}
        <Box title="Computer" item={computerSelect} result={result} /> {/* 컴퓨터 박스 */}
      </div>
      <div className="main">
        {/* 가위, 바위, 보 버튼 클릭 시 각각 play 함수 호출 */}
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

// choice: 게임에서 사용할 선택(가위, 바위, 보)과 각 선택에 해당하는 이미지, 이름을 객체로 정의.
// play: 사용자가 선택을 클릭했을 때, userSelect 상태를 갱신하고, randomChoice를 통해 컴퓨터의 선택을 결정한 후, judgement로 승패를 판별하여 result 상태를 설정.
// randomChoice: choice 객체에서 랜덤으로 하나의 선택을 반환.
// judgement: 사용자의 선택과 컴퓨터의 선택을 비교하여 승패(혹은 무승부)를 판별.


export default App;
