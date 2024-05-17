import React from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components";

export const TextPage: React.FC = () => {

    const location = useLocation();
    const { index, text } = location.state;

    return (
        <Div>
            <Container>
                <H1>{index}</H1>
                <P>{text}</P>
            </Container>
        </Div>
    )
}

const Div = styled.div`

`

const Container = styled.div`
    width: 500px;
    min-height: calc(100vh - 120px);
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid #000;
    border-radius: 5px;
`

const H1 = styled.h1`
    text-align: center;
    margin: 20px 0;
`

const P = styled.p`
    font-size: 20px;
    margin: 20px 0;
    padding: 10px;
    white-space: pre-wrap;
`