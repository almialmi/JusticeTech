import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    margin-top:30px;
    margin-bottom:30px;

`;

const Title = styled.h2`
    font-size:40px;
    color:rgb(15,15,15);
    font-weight:600;
`;

const Topic = () => {
    return (
        <Container>
           <Title>Justice Tech</Title>
        </Container>
    )
}

export default Topic
