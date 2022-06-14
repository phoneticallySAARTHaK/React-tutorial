import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
}

function Board(props) {
  const [boardArray, setBoardArray] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [history, setHistory] = useState(Array(9).fill(null));

  const winner = calculateWinner(boardArray);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Current turn: " + (isXTurn ? "X" : "O");
  }

  function renderSquare(i) {
    return (
      <Square
        value={boardArray[i]}
        isDisabled={boardArray[i] === null ? false : true}
        onClick={() => {
          setBoardArray((prevState) => {
            let arr = prevState.slice();
            arr[i] = isXTurn ? "X" : "O";
            return arr;
          });

          setIsXTurn((prevState) => !prevState);
        }}
      />
    );
  }

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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  for (const square of squares) {
    if (square === null) {
      return null;
    }
  }
  return "No one";
}
