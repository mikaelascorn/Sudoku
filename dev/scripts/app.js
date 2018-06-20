import React from 'react';
import ReactDOM from 'react-dom';

// need a 9x9 cell
// rows colums and squares need to all have different numbers 
  // set the state to an empty array and then push in the numbers as the user enters them to monitor if the squares and columns all have different numbers, 

const sudoku = [
  [0, 0, 3, 0, 2, 0, 6, 0, 0],
  [9, 0, 0, 3, 0, 5, 0, 0, 1],
  [0, 0, 1, 8, 0, 6, 4, 0, 0],
  [0, 0, 8, 1, 0, 2, 9, 0, 0],
  [7, 0, 0, 0, 0, 0, 0, 0, 8],
  [0, 0, 6, 7, 0, 8, 2, 0, 0],
  [8, 0, 2, 6, 0, 9, 5, 0, 0],
  [8, 0, 0, 2, 0, 3, 0, 0, 9],
  [0, 0, 5, 0, 1, 0, 3, 0, 0],
]

const cell = []

class App extends React.Component {
  constructor() {
    super();
    this.state ({ 
      board: ''
    })
    this.gameBoard = this.gameBoard.bind(this);
  }

  // a = x axis
  // b = y axis
  gameBoard() {
    let a = 0;
    let b = 0;
    for (let i = 0; i < 81 ; i ++) {
      cell[i] = new cell(a, b, i, sudoku[i])
      a = a + 50;
      if (i % 9 == 0 && i !== 0) {
        b = b + 50;
        a = 0;
      }
      console.log(sudoku[i]);
    }
    this.setState({
      board: call[i]
    })
  }

  draw() {
    background(51);
    for (let i = 0; i < 81; i++) {
      cell[i].show();
    }
  }

  // cell(a,b,i,num) {
  //   this.a = a;
  //   this.b = b;
  //   this.i = i;
  //   this.num = num;
  //   // the border 
  //   this.show = () => {
  //     noFill();
  //     stroke(255);
  //     rec(this.a, this.b, 50, 50);
  //     fill(255);
  //     textSize(32);
  //   }
  // }

  render() {
    return (
      <div>
        
        <div>
          {/* <label display={this.board}></label> */}
          {this.state.gameBoard.map((number) => {
            console.log(number);
            return (
              <div className="number">
                {number}
                </div>
            )
          })}
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
