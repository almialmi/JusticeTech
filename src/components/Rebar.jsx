import React, { useState } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height:60vh;
    width:60vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;

`;

const Desc = styled.p`
    font-size:20px;
    font-weight:300;
    margin-bottom:20px;
`;
const FormContainer = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
  
`;

const Input = styled.input`
width:80%;
height: 42px;
outline:none;
border: 1px solid rgba(200,200,200,0.3);
padding:0px 10px;
margin:5px 0px;
transition: all 200ms ease-in-out; 
border-bottom: 1.4px solid transparent;

&:placeholder{
    color:rgba(200,200,200,1);
}
&:not(:last-of-type){
    border-bottom: 1.5px solid rgba(200,200,200,0.4);
}
&:focus {
    outline:none;
    border-bottom: 1px solid rgb(23,21,21);
}
`;

const Button = styled.button`
    width:40%;
    padding:11px;
    margin-top:20px;
    margin-right:20px;
    color:#fff;
    font-size:20px;
    font-weight:600;
    border:none;
    border-radius:100px 100px 100px 100px;
    cursor:pointer;
    transition: all 240ms ease-in-out; 
    background: rgb(23,21,21);
    background: linear-gradient(58deg, rgba(23,21,21,1) 0%, rgba(209,31,90,1) 100%, rgba(0,0,0,1) 100%);

    &:hover {
        filter: brightness(1.03);
        outline: none;
    }
    &:focus{
        outline: none;
    }
    &:disabled {
        color:rgb(15,15,15);
        cursor:not-allowed;

    }
`;

const DescText = styled.p`
    width:20%;
    margin-right:5px;
`;

const AnalaysisContainer = styled.div`
    height:100px;
    display:flex;
    margin-top:15px;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`;

const Label = styled.label`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;

`
const Amount = styled.p`
    font-size:20px;
`

const Rebar = () => {
    const [length1, setLength1] = useState(0);
    const [length2, setLength2] = useState(0);
    const [quantity1, setQuantity1] = useState(0);
    const [quantity2, setQuantity2] = useState(0);
    const [amount, setAmount] = useState(0);

    const handleClick = (e) => {
        const rebar = ((length1 * quantity1) + (length2 * quantity2)) / 12;
        setAmount(Math.ceil(rebar));
    }
    return (
        <Container>
            <Desc>Enter below fields to calculate</Desc>
            <FormContainer>
                <Label><DescText>Length 1:</DescText> <Input required onChange={(e) => setLength1(e.target.value)} type='number' placeholder='Eg. 2' /></Label>
                <Label><DescText>Quantity 1:</DescText> <Input required onChange={(e) => setQuantity1(e.target.value)} type='number' placeholder='Eg. 5' /></Label>
                <Label><DescText>Length 2:</DescText> <Input required onChange={(e) => setLength2(e.target.value)} type='number' placeholder='Eg. 4' /></Label>
                <Label><DescText>Quantity 2:</DescText> <Input required onChange={(e) => setQuantity2(e.target.value)} type='number' placeholder='Eg. 10' /></Label>
            </FormContainer>
            <Button onClick={handleClick}>
                Calculate
            </Button>
            <AnalaysisContainer>
                {
                    amount !== 0 ?
                        <Amount>Minimum Needed Rebar: {amount}</Amount> : ''
                }
            </AnalaysisContainer>

        </Container>
    )
}

export default Rebar