import React, {useState, useContext} from 'react';
import {Slider, Label, Result, Container, ContainerLabels} from './SliderStyled.js';
import {useForm} from "react-hook-form";


const SliderComponent = ({type, setWeight, setHight}) => {
    const [rangeval1, setRangeval1] = useState(0);
    let props =  rangeval1;
    const [rangeval2, setRangeval2] = useState(0);

    if(type === "peso")      
        return (  
            props,
            <Container>
                <ContainerLabels>
                        <Label>Peso</Label>
                        <Result>{rangeval1}</Result>                                                         
                </ContainerLabels>
                <Slider onChange={(event) => {setWeight(event.target.value); setRangeval1(event.target.value);}} type = "range" min={1} max={250} defaultValue={0} step="1"/>             
            </Container> 
        );
    if(type === "altura")      
        return (  
            <Container>
                <ContainerLabels>
                        <Label>Altura</Label>
                        <Result>{rangeval2}</Result>                                                         
                </ContainerLabels>
                <Slider onChange={(event) => {setHight(event.target.value); setRangeval2(event.target.value);}} type = "range" min={1.00} max={2.50} defaultValue={0} step="0.01"/>                
            </Container> 
        );    
        
}

export default SliderComponent;
