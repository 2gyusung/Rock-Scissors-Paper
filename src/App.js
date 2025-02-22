import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

// 1. 선택 가능한 항목을 정의 (가위, 바위, 보)
const choice = {
  rock: {
    name: "바위",
    img: "https://buzzdestars.b-cdn.net/wp-content/uploads/2023/07/dwayne-johnson-the-rock.jpg",
  },
  scissors: {
    name: "가위",
    img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
  },
  paper: {
    name: "보",
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
    } else if (user.name === "바위") {
      return computer.name === "가위" ? "win" : "lose";
    } else if (user.name === "가위") {
      return computer.name === "보" ? "win" : "lose";
    } else if (user.name === "보") {
      return computer.name === "바위" ? "win" : "lose";
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
