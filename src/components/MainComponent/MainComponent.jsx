import { useState } from "react";
import "./MainComponent.scss";

function MainComponent() {
  let [currentValue, setCurrentValue] = useState(0);

  const plusBtnHandler = () => {
    setCurrentValue(currentValue + 1)
  }

  const minusBtnHandler = () => {
    setCurrentValue(currentValue - 1)
  }

  const clearBtnHandler = () => {
    setCurrentValue(currentValue = 0)
  }

  return (
    <div className="main-component">
      <h1>Счетчик!</h1>
      <p>Значение сейчас: {currentValue}</p>
      <div className="buttons">
        <div className="change-btns">
        <button className="btn plus" onClick={plusBtnHandler}>Увеличить</button>
        <button className="btn minus" onClick={minusBtnHandler}>Уменьшить</button>
        </div>
        <div className="clear">
            <button className="btn clear-btn" onClick={clearBtnHandler}>
                Сброс
            </button>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
