import React from 'react';
import { VariableSizeList } from 'react-window';

const MobileNumbersList = ({ mobileNumbers }) => {
  // This function returns the height of each row in the list
  const getItemSize = (index) => {
    return 50; // Return a fixed height for each row (you can customize this)
  };

  // This function renders each row in the list
  const renderRow = ({ index, style }) => {
    return (
      <div className="list-row" style={style} key={index}>
        {mobileNumbers[index].mobile}
      </div>
    );
  };

  return (
    <div className="mobile-numbers-container">
      {/* Render header row with column name */}
      <div className="header-row">
        <div className="header-cell">Mobile Numbers</div>
      </div>

      {/* Render VariableSizeList for mobile numbers */}
      <VariableSizeList
        height={500} // Set the height of the list container in pixels
        width="100%" // Set the width of the list container (can be percentage or fixed value)
        itemCount={mobileNumbers.length} // Total number of items
        itemSize={getItemSize} // Function to determine the height of each row
      >
        {renderRow}
      </VariableSizeList>
    </div>
  );
};

export default MobileNumbersList;