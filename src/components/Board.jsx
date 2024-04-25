/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      squares: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    };
  }

  handleClick = (x, y) => {
    const valor = this.state.squares[y][x];

    if (valor === 0) {
      const squares = this.state.squares;
      var player = this.state.player;

      if (this.state.player === 1) {
        squares[y][x] = 1;
        player = 2;
      } else {
        squares[y][x] = 2;
        player = 1;
      }

      this.setState({ squares, player });
    }

    this.checkWinner();
  };

  checkWinner = () => {
    const squares = this.state.squares;

    let allSquaresFilled = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (squares[i][j] === 0) {
          allSquaresFilled = false;
          break;
        }
      }
      if (!allSquaresFilled) {
        break;
      }
    }

    if (allSquaresFilled) {
      alert("It's a draw!");
      this.reset();
    }

    for (var i = 0; i < 3; i++) {
      if (squares[i][0] === squares[i][1] && squares[i][1] === squares[i][2]) {
        if (squares[i][0] !== 0) {
          alert("Player " + squares[i][0] + " wins");
          this.reset();
        }
      }
    }

    for (var ii = 0; ii < 3; ii++) {
      if (
        squares[0][ii] === squares[1][ii] &&
        squares[1][ii] === squares[2][ii]
      ) {
        if (squares[0][ii] !== 0) {
          alert("Player " + squares[0][ii] + " wins");
          this.reset();
        }
      }
    }

    if (squares[0][0] === squares[1][1] && squares[1][1] === squares[2][2]) {
      if (squares[0][0] !== 0) {
        alert("Player " + squares[0][0] + " wins");
        this.reset();
      }
    }

    if (squares[0][2] === squares[1][1] && squares[1][1] === squares[2][0]) {
      if (squares[0][2] !== 0) {
        alert("Player " + squares[0][2] + " wins");
        this.reset();
      }
    }
  };

  reset = () => {
    this.setState({
      player: 1,
      squares: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    });
  };

  render() {
    return (
      <div className="board">
        <div>player {this.state.player}</div>
        {this.state.squares.map((valor, y) => {
          return (
            <div key={y} className="board-row">
              {valor.map((valor, x) => {
                var label;
                if (valor === 0) label = "";
                if (valor === 1) label = "X";
                if (valor === 2) label = "O";

                return (
                  <button
                    key={x}
                    className="square"
                    onClick={() => this.handleClick(x, y)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          );
        })}
        <div onClick={this.reset}>RESETAR</div>
      </div>
    );
  }
}
