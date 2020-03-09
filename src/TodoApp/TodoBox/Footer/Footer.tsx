import React, { useState } from "react";
import styled from "styled-components";

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

export const Footer = (props) => {

  const [inpVal, setInpVal] = useState('');
  const handleTodoInputChange = e => {
    setInpVal(e.target.value);
    console.log('inpVal', inpVal);
  };

  const handleClick = e => {
    props.onInputChanged(inpVal);
  };

  return (
    <>
      <Box>
        <p>Write here your daily activity:</p>
        <Wrapper>
          <Text onChange={handleTodoInputChange} type="text" />
          <Btn onClick={handleClick}>Ok!</Btn>
        </Wrapper>
      </Box>
    </>
  );
};
