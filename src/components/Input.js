import React from 'react';
import styled from '@emotion/styled';

const Input = ({ parentProps, parentState, parentMethods }) => {
  const placeHolder =
    (parentState.values && parentState.values.length > 0 && parentProps.addPlaceholder) ||
    parentProps.placeholder;

  return parentProps.inputRenderer ? (
    parentProps.inputRenderer(parentProps, parentState, parentMethods)
  ) : (
    <InputComponent
      tabIndex="-1"
      className="react-dropdown-select-input"
      size={parentMethods.getInputSize()}
      value={parentState.search}
      onClick={() => parentMethods.dropDown('open')}
      onChange={parentMethods.setSearch}
      placeholder={placeHolder}
    />
  );
};

Input.propTypes = {};

const InputComponent = styled.input`
  flex: 1;
  display: flex;
  line-height: inherit;
  width: auto;
  border: none;
  margin-left: 5px;
  background: transparent;
  font-size: smaller;
  :focus {
    outline: none;
  }
`;

export default Input;
