import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 선택 가능한 항목을 정의 (가위, 바위, 보)
const choice = {
  rock: {
    name: "Rock",
    img: "https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=",
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

export default App;
