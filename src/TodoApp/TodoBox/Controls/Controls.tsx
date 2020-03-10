import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../TodoContext/TodoContext";

const Btn = styled.button`
  padding: 10px 15px;
  border-radius: 20%;
  margin-left: 15px;
`;

const Box = styled.div`
  border-radius: 20%;
  border: 5px;
  padding: 20px;
  font-size: 20px;
  background-color: white;
  margin-bottom: 20px;
  color: coral;

  ${Btn} {
    background-color: coral;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Text = styled.input`
  font-size: 18px;
`;

export const Controls = (props) => {
  const inputEl = useRef(null);

  const dispatch = useContext(TodoContext);
  const handleClick = e => {

    if (inputEl.current.value === '') {
      return alert('Please, write something!')
    }

    dispatch({
      type: 'addtodo',
      payload: inputEl.current.value
    });
    inputEl.current.value = '';
  };

  return (
    <>
      <Box>
        <p>Write here your daily activity:</p>
        <Wrapper>
          <Text ref={inputEl} type="text" />
          <Btn onClick={handleClick}>Ok!</Btn>
        </Wrapper>
      </Box>
    </>
  );
};
