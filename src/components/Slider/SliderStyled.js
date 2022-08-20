import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start; 
    height: 8rem;
    width: 350px;
    height: 20%;
    padding: 25px;
    margin-left: 15px;
    margin-right: 15px;
`;


export const ContainerLabels = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    width: 100%;
    padding: 0px;
    margin: 0px;
    margin-bottom: 20px;
`;


export const Label = styled.p`
    color: #000000;
    font-family: "poppins";
    font-size: 24px;
    padding: 0px;
    margin: 0px;
`;

export const Result = styled.p`
    color: #F7B718;
    font-family: "poppins";
    font-size: 40px;
    height: 3rem;
    padding: 0px;
    margin: 0px;
`;

export const Slider = styled.input`
    width: 100%;     
    -webkit-appearance: none;
    width: 35rem;
    height: 1.5rem;
    background: #ffffff;
    border-radius: 0.4rem;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 3.5rem;
    height: 3.5rem;
    background: #f7b718;
    border-radius: 50%;
    cursor: pointer;
  }
`;
