import * as React from 'react';
import './App.css';
import { Button, Grid, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import PercentIcon from '@mui/icons-material/Percent';

/*
  WELCOME TO 'calculator.'
  I optimized this calculator for making a complete product in the short amount of time 
  I had to put into the project. Below you'll find some of those things I would change,
  given I had more time to invest:

  Code Changes:
    1. I would add some error handling for both of the input boxes (or changed the input 
      type entirely). Using textboxes is a poor choice of input for two numbers, but it
      was fast and easy. Also, the "calculate" function still calculates even if there's
      not a valid number in each number slot, so I would want to fix that.
    2. I would make take care of rounding issues that might pop up from javascript doing
      math, by either rounding my answer or truncating it after a certain number of
      decimals.

  UI Changes:
    1. I would clean up the calculation displayed at the bottom of the calculator (line 87). 
      I could conditionally display the "=" and operator so that it wouldn't display when 
      there's nothing in those variables. It looks funny as is.
    2. I would make the answer more noticeable. Your answer currently displays along side 
      the calculation. It makes sense and it's functional, but the user experience would be
      enhanced with that sticking out more.
    3. I didn't even get to adding any CSS, but I'm out of time here. I would create a CSS 
      object down below where I could really customize every element using spacing (I know, 
      IT NEEDS MARGINS) and other styling. Using a library like material-ui made it easy to
      build a clean-looking app without even touching CSS.
*/

function App() {
  const [operator, setOperator] = React.useState('');
  const [firstValue, setFirstValue] = React.useState('');
  const [secondValue, setSecondValue] = React.useState('');
  const [result, setResult] = React.useState('');

  const handleOperator = (event, newOperator) => {
    setResult('');
    setOperator(newOperator);
  };

  const calculate = () => {
    operator === "+" ? setResult(Number(firstValue) + Number(secondValue)) :
    operator === "-" ? setResult(Number(firstValue) - Number(secondValue)) :
    operator === "*" ? setResult(Number(firstValue) * Number(secondValue)) :
    operator === "/" ? setResult(Number(firstValue) / Number(secondValue)) :
    alert("You need to choose an operator :)")
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
    >
      <h1>calculator.</h1>
      <div>
        <TextField value={firstValue} onChange={(e) => setFirstValue(e.target.value)} label="Number 1" variant="outlined" />
      </div>
      <div>
        <ToggleButtonGroup
          value={operator}
          exclusive
          onChange={handleOperator}
          aria-label="operator options"
        >
          <ToggleButton value="+">
            <AddIcon></AddIcon>
          </ToggleButton>
          <ToggleButton value="-">
            <RemoveIcon></RemoveIcon>
          </ToggleButton>
          <ToggleButton value="*">
            <ClearIcon></ClearIcon>
          </ToggleButton>
          <ToggleButton value="/">
            <PercentIcon></PercentIcon>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <TextField value={secondValue} onChange={(e) => setSecondValue(e.target.value)} label="Number 2" variant="outlined" />
      </div>
      <div>
        <Button onClick={calculate}>Calculate</Button>
      </div>
      <div>
        <p>{firstValue} {operator} {secondValue} = {result}</p>
      </div>
    </Grid>
  );
}

export default App;
