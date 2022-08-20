import React, {useState} from 'react';
import {Button, ButtonContainer, ResultContainer, Result} from './BtnResult.js';

const BtnResultComponent = ({weight, hight}) => {
  const [result, setResult] = useState(0);
  const [string, setString] = useState(null);
  
  const handleClick = () => {
    const imc = ((weight / Math.pow(hight, 2)));
    if(imc > 0 && weight > 1 && hight > 1) { 
    setResult(imc)
    }
    if(weight > 1 && hight > 1) { 
      if (imc > 1 && imc <= 18.5) {
        setString("(Abaixo do Normal)")
      } else if (imc > 0 && imc <= 24.9) {
        setString("(Peso Normal)")   
      } else if (imc > 0 && imc <= 29.9) {
        setString("(Acima do Normal)")   
      } else if (imc > 0 && imc <= 34.9) {
        setString("(Obesidade Grau 1)")   
      } else if (imc > 0 && imc <= 39.9) {
        setString("(Obesidade Grau 2)")   
      } else if (imc > 0){
        setString("(Obesidade Grau 3)")   
      }      
    }   
  }

  return ( 
    <>      
    <ButtonContainer>
        <Button w = {weight} h = {hight} onClick = {handleClick}>Calcular</Button>
    </ButtonContainer>
    <ResultContainer>
    <Result>IMC: {result.toFixed(2)}  {string}</Result> 
  </ResultContainer>
  </>   
  );
}

export default BtnResultComponent;
