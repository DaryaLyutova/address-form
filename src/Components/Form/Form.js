import React from 'react';
// import styled, { css } from 'styled-components';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { styled } from "@material-ui/core/styles";
// Предоставляем компонент для стилизации
import Button from "@material-ui/core/Button";


const ButtonComponent = styled(Button)`
color='green';
`

function Form() {
  return (
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
  <ButtonComponent >HookComponent</ButtonComponent>
</FormControl>
  );
}

export default Form;