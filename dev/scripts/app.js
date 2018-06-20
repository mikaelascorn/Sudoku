
import React from 'react';
import ReactDOM from 'react-dom';

// need a 9x9 cell 
// rows x, colums y and squares (3x3) need to all have different numbers 
// the cells that have 0 are empty and the user can enter a number of their choice to fill the puzzle
// the cells that have numbers pre loaded are frozen and the user cant change input 
// need 9 empty arrays to hold all the numbers that are in the 3x3 cells, 9 arrays to hold the numbers in the 9 rows and for the columns too
  // use a function to check hold the numbers that are already in the squares the rows and one for the colums to see if that number is already used

// to check same 3x3 square for the number, make function to check the column that number is in
    // check the square by using num <=3, num => 4 & <= 6, num => 7 & <= 9, it will check the nubmer the user is entering from the corresponding array for the 3x3 square
        // then evaluate if the number they are entering is already used in that 3x3 section of the grid
        // then push that number to that array and iterate over that array to check if the number has been used already
    
// when the user hits done, to check their numbers, in the 3x3 squares, the columns and rows, add up all the numbers in each of the arrays that we made and if they all equal 45 then the user has solved the puzzle correctly

//when user hits play again button the sudoku array is sent through a Math.floor randomizer 

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

class App extends React.Component {
  constructor() {
    super();
 
  }

  render() {
    return (
      <div>
        <div>
          {sudoku.map((number) => {
            return(
              <div className="row">
              {number.map((cell) => {
                  return (
                    cell == 0 ? <input className="number" type="text" placeholder="" /> : <input className="number" type="text" placeholder={cell} />
                  )
                })}
              </div>
            )
          })}
        </div>

      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
