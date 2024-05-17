import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components";

export const IndexPage: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { id, title, index, text } = location.state
    console.log(title)

    return (
        <Div>
            <Container>
                <H1>{title}</H1>
                <P>目次</P>
                <Ol>
                    <Li key={id} onClick={() => navigate('/text', {
                        state: { index: index, text: text }
                    })}>{index}</Li>
                </Ol>
            </Container>
        </Div>
    )
}

const Div = styled.div`

`

const Container = styled.div`
    width: 500px;
    min-height: calc(100vh - 120px);
    margin: 20px auto;
    border: 1px solid #000;
`

const H1 = styled.h1`
    text-align: center;
    margin: 20px 0;
`

const P = styled.p`
    text-align: center;
    font-size: 25px;
    margin: 20px 0;
`

const Ol = styled.ol`
    width: 400px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
    
const Li = styled.li`
    cursor: pointer;
    position: relative;
    margin-bottom: 10px;

    &:hover::after {
        content: '';
        width: 100%;
        height: 1px;
        background: #000;
        position: absolute;
        left: 0;
        bottom: 0;
    }
`