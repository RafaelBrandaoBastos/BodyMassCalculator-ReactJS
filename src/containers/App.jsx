import React, {useContext, useState} from 'react';
import {Main, Card} from './AppStyled.js';
import TitleComponent from '../components/Title/Title.jsx';
import SliderComponent from '../components/Slider/Slider.jsx';
import BtnResultComponent from '../components/BtnResult/BtnResult.jsx';

const App = () => {

  const [weight, setWeight] = useState(0);
  const [hight, setHight] = useState(0);

  return (
      <Main>
      <Card /*onSubmit={() => setResult((weight / Math.pow(hight, 2)))}*/>
        <TitleComponent/> 
        <SliderComponent setWeight = {setWeight} type = "peso"/>
        <SliderComponent setHight = {setHight} type = "altura"/>       
        <BtnResultComponent hight = {hight} weight = {weight} />
      </Card>
    </Main>
  ); 
}

export default App;
