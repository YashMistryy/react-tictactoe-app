/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Square = ({ value, onclick,isWinningSquare}) => {
     return (
          <button type="button" className={ `square ${value === 'X'?'text-green':'text-orange'} ${isWinningSquare ?'winning':'' }`}  onClick={onclick}>
               {value}
          </button>
     );
};

export default Square;
