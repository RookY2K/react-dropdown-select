import React from 'react';
import styled from '@emotion/styled';

import NoData from './NoData';
import Item from './Item';

const Dropdown = ({ parentProps, parentState, parentMethods }) => (
  <DropDown
    tabIndex="-1"
    aria-expanded="true"
    role="listbox"
    selectBounds={parentState.selectBounds}
    dropdownGap={parentProps.dropdownGap}
    className="react-dropdown-select-dropdown">
    {parentProps.dropdownRenderer ? (
      parentProps.dropdownRenderer(parentProps, parentState, parentMethods)
    ) : (
      <React.Fragment>
        {parentMethods.searchResults().length === 0 ? (
          <NoData
            className="react-dropdown-select-no-data"
            parentState={parentState}
            parentProps={parentProps}
            parentMethods={parentMethods}
          />
        ) : (
          parentMethods
            .searchResults()
            .map((item, itemIndex) => (
              <Item
                item={item}
                index={itemIndex}
                parentState={parentState}
                parentProps={parentProps}
                parentMethods={parentMethods}
              />
            ))
        )}
      </React.Fragment>
    )}
  </DropDown>
);

Dropdown.propTypes = {};

const DropDown = styled.div`
  position: absolute;
  top: ${({ selectBounds, dropdownGap }) => selectBounds.bottom + dropdownGap}px;
  left: ${({ selectBounds }) => selectBounds.left}px;
  border: 1px solid #ccc;
  width: ${({ selectBounds }) => selectBounds.width}px;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 10px 0 #0000003b;
  max-height: 300px;
  overflow: auto;
  :focus {
    outline: none;
  }
}
`;

export default Dropdown;
