const Cell = (props) => {
  const {
    value, onClick, isPeer, isSelected, sameValue, prefilled, notes, conflict,
  } = props;
  const backgroundColor = getBackGroundColor({
    conflict, isPeer, sameValue, isSelected,
  });
  const fontColor = getFontColor({ conflict, prefilled, value });
  return (
    <div className="cell" onClick={onClick}>
      {
        notes ?
          range(9).map(i =>
            (
              <div key={i} className="note-number">
                {notes.has(i + 1) && (i + 1)}
              </div>
            )) :
          value && value
      }
      {/* language=CSS */}
      <style jsx>{CellStyle}</style>
      <style jsx>{`
                .cell {
                    background-color: ${backgroundColor || 'initial'};
                    color: ${fontColor || 'initial'};
                }
            `}
      </style>
    </div>
  );
};

Cell.propTypes = {
  // current number value
  value: PropTypes.number,
  // cell click handler
  onClick: PropTypes.func.isRequired,
  // if the cell is a peer of the selected cell
  isPeer: PropTypes.bool.isRequired,
  // if the cell is selected by the user
  isSelected: PropTypes.bool.isRequired,
  // current cell has the same value if the user selected cell
  sameValue: PropTypes.bool.isRequired,
  // if this was prefilled as a part of the puzzle
  prefilled: PropTypes.bool.isRequired,
  // current notes taken on the cell
  notes: PropTypes.instanceOf(Set),
  // if the current cell does not satisfy the game constraint
  conflict: PropTypes.bool.isRequired,
};

Cell.defaultProps = {
  notes: null,
  value: null,
};