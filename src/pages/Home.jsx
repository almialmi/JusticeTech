import React from 'react'
import styled from 'styled-components'
import Rebar from '../components/Rebar';
import Topic from '../components/Topic';


const Container = styled.div`
    height:100vh;
    background-color:#f5fafd;
    display: flex;
    align-items: center;
    justify-content: top;
    flex-direction:column;

`;

const Home = () => {
    return (
        <Container>
           <Topic />
           <Rebar />
        </Container>
    )
}

export default Home
