import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square(props) {
  console.log("val:", props.value);
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  const [boardArray, setBoardArray] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  console.log(boardArray);
  function renderSquare(i) {
    return (
      <Square
        value={boardArray[i]}
        onClick={() =>
          setBoardArray((prevState) => {
            let arr = prevState.slice();
            arr[i] = isXTurn ? "X" : "O";
            setIsXTurn((prevState) => (prevState ? false : true));
            return arr;
          })
        }
      />
    );
  }

  const status = "Current turn: " + (isXTurn ? "X" : "O");
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game(props) {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
